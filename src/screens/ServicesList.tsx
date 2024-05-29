import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { ArrowForwardIcon, VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import  Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

import api from '../services/api';
import { ServiceData } from '../@types/Tipos';

type ParamsProps = {
  serviceId: number;
}
export default function Services(){

  const route = useRoute();
  const [serviceData, setServiceData] = useState<ServiceData[]>([]);
  const { serviceId } = route.params as ParamsProps;

  useEffect(() => { 
    async function getServicesData() {
      try {
        
        const wichList = (serviceId ? api.get(`/service/${serviceId}`) : api.get(`/services`))
        const response = await wichList;

        const dados = response.data;
        setServiceData(dados);
        console.log('Dados', serviceData);
      } catch (error) {
        console.log('Erro ao buscar dados dos serviços:', error);
      }
    }

    getServicesData();
  }, [])

  return(
    <View >
      { serviceData !== null ?
      <VStack style={styles.container}>
        <VStack mb={10}>
          <Ellipse />
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>
            {serviceId ? serviceData[0].titulo : 'Lista de Serviços'}</Heading>
        </VStack>

        <Heading paddingY={2} color="#000">Serviços disponíveis</Heading>

        <ScrollView showsVerticalScrollIndicator={false}>
        {serviceData.length > 0 ? serviceData.map(service => {
          return (
            <Link key={service.id}>
              <VStack paddingY={4}>
                <Text>{service.titulo}</Text>  
              </VStack>
          </Link>
            ) 
          }) : <Text>Não existem serviços para exibir no momento! </Text>
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