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

type ParamsProps = {
  userId: number;
}

export default function OrderList(){

  const route = useRoute();
  const [userData, setUserData] = useState<CadastroData | null>(null);
  const [workerData, setWorkerData] = useState<WorkerData | null>(null);
  const [orderData, setOrderData] = useState<OrderData[]>([]);

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
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>{userData.nome}</Heading>
        </VStack>

        <Heading paddingY={2} color="#000">Trabalhadores</Heading>

        <ScrollView showsVerticalScrollIndicator={false}>
          {orderData.map(order => { 
              return (
                <Link key={order.id}>
          <VStack style={styles.hCard}>
            <HStack alignItems='center'>
              <VStack>
                <BigUser />
              </VStack>
              <VStack paddingX={3}>
                <Text fontSize='md' color='#FFF' fontWeight='medium'>{}</Text>
                <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
                
                <HStack paddingY={2}>
                  <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                  
                  <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                  <Star />
                </HStack>
              </VStack>
              <VStack backgroundColor="red.100" borderRadius="full" padding={1}>
                <Link>
                  <ArrowForwardIcon color="#000"/>
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
        : <Heading>Carregando dados do usuário...</Heading>
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
    backgroundColor: '#00ABD5',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 6,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 10
  }
})