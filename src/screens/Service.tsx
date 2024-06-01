import { useEffect, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { Button as NBButton, VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { Worker } from '../components/WorkerBox';

import  Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

import api from '../services/api';
import { ServiceData, WorkerData } from '../@types/Tipos';

type ParamsProps = {
  serviceId: number;
  userId: number;
}
export default function Services(){

  const route = useRoute();
  const navigation = useNavigation();  
  const  [serviceData, setServiceData ] = useState<ServiceData | null>(null);
  const [ workerData, setWorkerData ] = useState<WorkerData[]>([]);
  const [ fWorkers, setFWorkers ] = useState<WorkerData[]>([]);
  const [ workerModalData, setWorkerModalData ] = useState<WorkerData | null>(null);
  const [ showModal, setShowModal ] = useState(false);
  const { serviceId, userId } = route.params as ParamsProps;

  async function getWorker(id : number){
    try {
      const response = await api.get(`/worker/${id}`);
      const dados = response.data[0];
      setWorkerModalData(dados);
    } catch (error) {
      console.error('Erro ao buscar dados do trabalhador selecionado:', error);
    }
  };
  
  function openWorkerModal(id : number){
    try {
      getWorker(id);
      setShowModal(true);
    } catch (error) {
      console.error('Erro ao abrir modal:', error);
    }
  };

  function gotoNewOrder(id: number, code: number){
    setShowModal(false);
    const workerId = id;
    const serviceId = code;
  
    console.log(workerId, serviceId, serviceId);
    navigation.navigate('order', {workerId: workerId, serviceId: serviceId, userId: userId});  
  }

  useEffect(() => { 
    async function getServicesData() {
      try {
        console.log(serviceId);
        const response = await api.get(`/service/${serviceId}`);
        const dados = response.data[0];
        setServiceData(dados);
      } catch (error) {
        console.log('Erro ao buscar dados dos serviços:', error);
      }
    }

    getServicesData();
  }, [serviceId])

  useEffect(() => { 
    async function getWorkersData() {
      try {
        // const { serviceId } = route.params as ParamsProps;
        const response = await api.get(`/workers`);
        const dados = response.data;
        setWorkerData(dados);
      } catch (error) {
        console.log('Erro ao buscar dados dos respectivos trabalhadores:', error);
      }
    }

    getWorkersData();
    const filtrados: typeof workerData = workerData.filter(worker => worker.cod_servico == serviceId)
    setFWorkers(filtrados);
  }, [serviceId])

    return(
    <View style={styles.container}>
      {serviceData !== null ?
      <VStack style={styles.container}>
        <VStack mb={10}>
          <Ellipse />
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>{serviceData.titulo}</Heading>
        </VStack>

        <Heading paddingY={2} color="#000">Trabalhadores</Heading>

        <ScrollView showsVerticalScrollIndicator={false}>
          {fWorkers.length > 0 ? fWorkers.map(worker => { 
              return (
                <Link onPress={() => {openWorkerModal(worker.id)}} key={worker.id}>
                  <Worker name={worker.nome} job={worker.profissao} jobCount={0} city={worker.cidade} uf={worker.uf} rating={0} />
                </Link>
                )
              })
            : 
              <VStack style={styles.container}>
                <Text textAlign="center" fontSize="md" color="#333">Não existem trabalhadores para exibir no momento! </Text>
              </VStack>
          }

            <Modal animationType='slide' transparent={true} visible={showModal} onRequestClose={() => {setShowModal(!showModal)}} >
              <VStack style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <VStack style={styles.modalView}>
                  <VStack alignItems='center'>
                    <VStack paddingY={4}>
                      <BigUser />
                    </VStack>
                    
                    <VStack paddingX={6}>
                      <Text style={styles.dataText}>{workerModalData?.nome}</Text>
                      <Text style={styles.dataText}>{workerModalData?.profissao}</Text>
                      <Text style={styles.dataText}>{workerModalData?.cidade} - {workerModalData?.uf}</Text>
                      
                      <HStack paddingY={1} alignContent="center">
                        <Text fontSize='md' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: {workerModalData?.pedidos_realizados}</Text>
                        <Text fontSize='md' color='#FFF' fontWeight='medium' mr={1}>Avaliação: {workerModalData?.avaliacao}</Text>
                        <Star />
                      </HStack>
                    </VStack>

                      <VStack alignItems={"center"}>
                        <Button mt={0} mb={1} bgColor={'#FFC700'} color={'#000'} title={'Solicitar Serviço'} h={10} fs='lg' pbgColor='#FFF100' onPress={() => {workerModalData?.id != null ? gotoNewOrder(workerModalData.id, workerModalData.cod_servico) : console.log('Erro!')}}/>
                      </VStack>
                  </VStack>

                  <HStack display= 'flex' justifyContent='center' mx={12} alignItems={'center'}>
                    <NBButton  onPress={() => { setShowModal(!showModal); } } style={{backgroundColor: '#FFD', marginTop: 10, padding: 4, height: 40, width: 40, borderRadius: 100 }}>
                    <Text textAlign={'center'} style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>X</Text>
                  </NBButton>
                  </HStack>                
                </VStack>
              </VStack>
            </Modal>

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
    justifyContent: 'center'
  },
  card : {
    width: 140,
    height: 200,
    backgroundColor : '#00ABD5',
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
  },
  modalView : {
    backgroundColor: '#00ABD5',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  dataText : {
    fontSize : 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold'
  }
})