import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { ArrowForwardIcon, VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import  Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

import api from '../services/api';
import { CadastroData, OrderData, WorkerData } from '../@types/Tipos';
import { Loading } from '../components/Loading';
import { Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function OrderList(){

  const route = useRoute();
  const navigation = useNavigation();
  const [fDateInit, setfDateInit] = useState([]);
  const [fDateEnd, setDateEnd] = useState([]);
  const [userData, setUserData] = useState<CadastroData | null>(null);
  const [orderData, setOrderData] = useState<OrderData[]>([]);
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
  }, [orderData]);

  return(
    <View>
      { orderData && userData ?
      <VStack style={styles.container}>
        <VStack mb={10}>
          <Ellipse />
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>Meus pedidos</Heading>
        </VStack>

        <ScrollView showsVerticalScrollIndicator={false}>
          {orderData.map(order => { 
              return (
                <Link mx={2} key={order.id} onPress={() => {order.id ? openDetails(order.id) : null}}>
                  <VStack style={styles.hCard}>
                    <HStack alignItems='center'>
                      <VStack px={4}>
                        <BigUser />
                      </VStack>
                      <VStack paddingX={3}>
                        <Text style={styles.BoldText} color='#00ADB5'>Ordem Nº:{order.id}</Text>
                        <Text style={styles.mediumText} color='#333'>Responsável: {order.colaborador}</Text>
                        <Text style={styles.mediumText} color='#333' mr={2}>Data: {order.servico}</Text>
                        <Text style={styles.mediumText} color='#333'>
                          Status:                       
                        {order.status == 0 ? 
                          <Text style={styles.BoldText} color="#00D672">Em andamento</Text> 
                          :
                          <Text style={styles.BoldText} color='#00D6B8'>Concluído</Text>
                        }
                        </Text>

                      </VStack>
                      <VStack backgroundColor="#00ADB5" borderRadius="full" padding={2} ml={4}>
                        <Link>
                          <ArrowForwardIcon color="#FFF"/>
                        </Link>
                      </VStack>
                    </HStack>
                  </VStack>
                </Link>
                )
              })
            }
        </ScrollView>
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
    justifyContent: 'center',
    height: '100%'
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