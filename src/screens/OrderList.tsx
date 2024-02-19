import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { VStack, HStack, Heading, Text, ScrollView, Link, Center, FlatList } from 'native-base';

import  Ellipse from '../imgs/ellipse3.svg';

import api from '../services/api';
import { CadastroData, OrderData } from '../@types/Tipos';
import { Loading } from '../components/Loading';
import { Filter } from '../components/Filter';
import { OrderItem } from '../components/OrderItem';

export default function OrderList(){

  const route = useRoute();
  const navigation = useNavigation();
  const [fDateInit, setfDateInit] = useState([]);
  const [fDateEnd, setDateEnd] = useState([]);
  const [userData, setUserData] = useState<CadastroData | null>(null);
  const [orderData, setOrderData] = useState<OrderData[]>([]);
  const [fOrders, setFOrders] = useState<OrderData[]>([]);
  const [statusSelected, setStatusSelected] = useState<0 | 1>(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  
function openDetails(id : number){
  navigation.navigate('orderdetails', {orderId : id})
}

  useEffect(() => {
    async function getUserData(){
      try {
        const userId = await AsyncStorage.getItem('userId');
        const response = await api.get(`/users/${userId}`);
        const dados = response.data[0];
        setUserData(dados);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    }
    
    getUserData();
  }, [userData])

  useEffect(() => { 
    async function getOrdersData() {
      try {
        const userId = await AsyncStorage.getItem('userId');
        const response = await api.get(`/orders/${userId}`);
        const dados = response.data;
        setOrderData(dados);
      } catch (error) {
        console.log('Erro ao buscar dados dos pedidos:', error);
      }
    }

    getOrdersData();
    const filtrados: typeof orderData = orderData.filter(order => order.status == statusSelected)
    setFOrders(filtrados);
  }, [orderData]);

  return(
    <View>
      { orderData && userData ?
      <VStack style={styles.container}>
        <VStack mb={10} w='full'>
          <Ellipse />
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>Meus pedidos</Heading>
        </VStack>

        <VStack>
          <HStack mb={8}>
              <Filter
                type='open'
                title="em andamento"
                onPress={() => setStatusSelected(0)}
                isActive={statusSelected === 0}
              />

              <Filter 
                type="closed"
                title="finalizados"
                onPress={() => setStatusSelected(1)}
                isActive={statusSelected === 1}
                />
            </HStack>  
          </VStack>

        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <FlatList
          data={orderData}
          // keyExtractor={(item) =>  (item.id ? item.id : item.id)}
          renderItem={({ item } : {item : any}) => <OrderItem data={item} onPress={() => openDetails(item.id)}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <Text color="gray.700" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 0 ? 'em andamento!' : 'finalizadas!'}
              </Text>
            </Center>
          )}
        />
          {/* {orderData.map(order => { 
              return (
                )
              })
            } */}
        {/* </ScrollView> */}
      </VStack>
        : <VStack style={styles.container}>
            <Loading />
          </VStack>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  card : {
    width: 140,
    height: 200,
    backgroundColor : '#00ADB5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginHorizontal: 5
  },
  hCard : {
    borderColor: '#00ADB5',
    borderWidth: 2,
    marginVertical: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    width: '100%'
  },
  BoldText: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold'
  },
  mediumText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium'
  }
})