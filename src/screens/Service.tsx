import { useEffect, useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { ArrowForwardIcon, VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import { Worker } from '../components/WorkerBox';

import  Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

import api from '../services/api';
import { ServiceData, WorkerData } from '../@types/Tipos';

type ParamsProps = {
  serviceId: number;
}
export default function Services(){

  const route = useRoute();
  const navigation = useNavigation();  
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [workerData, setWorkerData] = useState<WorkerData[]>([]);

  useEffect(() => { 
    async function getServicesData() {
      try {
        const { serviceId } = route.params as ParamsProps;
        const response = await api.get(`/service/${serviceId}`);
        const dados = response.data[0];
        setServiceData(dados);
      } catch (error) {
        console.log('Erro ao buscar dados dos serviços:', error);
      }
    }

    getServicesData();
  }, [serviceData])

  useEffect(() => { 
    async function getWorkersData() {
      try {
        const { serviceId } = route.params as ParamsProps;
        const response = await api.get(`/worker/service/${serviceId}`);
        const dados = response.data;
        setWorkerData(dados);
      } catch (error) {
        console.log('Erro ao buscar dados dos serviços:', error);
      }
    }

    getWorkersData();
  }, [workerData])

    return(
    <View >
      {serviceData !== null ?
      <VStack style={styles.container}>
        <VStack mb={10}>
          <Ellipse />
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>{serviceData.titulo}</Heading>
        </VStack>

        <Heading paddingY={2} color="#000">Trabalhadores</Heading>

        <ScrollView showsVerticalScrollIndicator={false}>
          {workerData.length > 0 ? workerData.map(worker => { 
              return (
                <Link key={worker.id}>
                  <Worker name={worker.nome} job={worker.profissao} jobCount={0} city={worker.cidade} uf={worker.uf} rating={0} />
                </Link>
                )
              })
            : 
              <Text>Não existem trabalhadores para exibir no momento! </Text>
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