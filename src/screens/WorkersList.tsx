import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { ArrowForwardIcon, VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import  Ellipse from '../imgs/ellipse3.svg';

import api from '../services/api';
import { ServiceData } from '../@types/Tipos';

type ParamsProps = {
  serviceId: number;
  userId: number;
}
export default function Services(){

  const route = useRoute();
  const navigation = useNavigation();
  const [serviceData, setServiceData] = useState<ServiceData[]>([]);
  const { serviceId } = route.params as ParamsProps;
  const { userId } = route.params as ParamsProps;

  const openCategory = (id : number, uId : number) => {
    console.log('Abriu serviço nº:', id);
    navigation.navigate('service', {serviceId: id, userId: uId});
};

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
        
        <VStack flex={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
          {serviceData.length > 0 ? serviceData.map(service => {
            return (
              <Link key={service.id} onPress={() => {openCategory(service.id, userId)}}>
                <VStack style={styles.item} width={56}>
                  <Text textAlign={'center'} color="white" bold fontSize={16}>{service.titulo}</Text>  
                </VStack>
            </Link>
              ) 
            }) : <Text>Não existem serviços para exibir no momento! </Text>
          }
          </ScrollView>
        </VStack>
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
  item : {
    paddingVertical: 12,
    marginVertical: 6,
    borderRadius: 26,
    alignItems: 'center',
    backgroundColor: '#00ABD5'
  }
})