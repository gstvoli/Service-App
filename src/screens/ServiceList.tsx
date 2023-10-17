import { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Modal, ScrollView, StyleSheet } from 'react-native';
import { Button as NBButton, Center, HStack, Heading, Link, Text, VStack } from 'native-base';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import api from '../services/api';
import { CadastroData, WorkerData, ServiceData } from '../@types/Tipos';

import { Button } from '../components/Button';
import { Service } from '../components/ServiceBox';
import { Worker } from '../components/WorkerBox';

import Painter from '../imgs/pintor.svg';
import Wrench from '../imgs/wrench.svg';
import Hammer from '../imgs/hammer.svg';
import Trowel from '../imgs/trowel.svg';
import CircleRight from '../imgs/circle-right.svg';
import BigUser from '../imgs/bigUser.svg';
import UserGroup from '../imgs/user-group.svg';
import Ellipse from '../imgs/ellipse.svg';
import Star from '../imgs/star.svg';

type ParamsProps = {
  userId: number;
}

export default function ServicesList(){
const route = useRoute();
const navigation = useNavigation();
const [ userData, setUserData ] = useState<CadastroData | null>(null);
const [ workerData, setWorkerData ] = useState<WorkerData[]>([]);
const [ serviceData, setServiceData ] = useState<ServiceData[]>([]);
const [ showModal, setShowModal ] = useState(false);

const openCategory = (id : number) => {
    console.log('Abriu serviço nº:', id);
    navigation.navigate('services', {serviceId: id});
};

function openWorkerModal(){
  console.log('aq');
  setShowModal(true);
};

useEffect(() => {
  async function getUserData(){
    try {
      const { userId } = route.params as ParamsProps;
      const response = await api.get(`/users/${userId}`);
      const dados = response.data[0];
      setUserData(dados);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  }

  async function getServicesData() {
    try {
      const response = await api.get('/services');
      const dados = response.data;
      setServiceData(dados);
      console.log('Dados', dados);
    } catch (error) {
      console.log('Erro ao buscar dados dos servicos:', error);
    }
  }

  async function getWorkerData() {
    try {
      const response = await api.get('/workers');
      const dados = response.data;
      setWorkerData(dados);
      console.log('Trabalhadores: ', workerData);
    } catch (error) {
      console.log('Erro ao buscar dados do colaborador:', error)
    }
  }

  getUserData();
  getServicesData();
  getWorkerData();
}, [])

  return (
    <View >
      
      { (userData !== null) && (workerData !== null) ? 
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack alignItems='center'>

        <VStack mt={-12}>
          <Ellipse />
          <Heading pt={2} mt={-16} mb={12} color='#FFF' textAlign='center'>Bem vindo, {userData.nome}!</Heading>
        </VStack>
      
        <Heading color='#393E46' mb={2}>Serviços</Heading>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          
            {serviceData.map(service => { 
              return (
                <Link onPress={() => {openCategory(service.id)}} key={service.id}>
                  <Service title={service.titulo} path={service.imagem}/>
                </Link>
                )
              })
            }

        </ScrollView> 

        <Link mt={3}>
          <Text color='#1A82E2' fontSize='lg' fontWeight='bold' mr={1} mt={-2}>Todos os serviços</Text>
          <CircleRight />
        </Link>

        <Heading color='#393E46' my={4}>Melhores colaboradores</Heading>

        <Heading fontSize="lg" mb={2}>Marcenaria</Heading>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Link onPress={() => {setShowModal(true); console.log(showModal)}}>
          {workerData.length > 0 ? workerData.map(worker => { 
              return (
                <Link onPress={() => {setShowModal(true); console.log(showModal)}} key={worker.id}>
                  <Worker name={worker.nome} job={worker.profissao} jobCount={0} city={worker.cidade} uf={worker.uf} rating={0} />
                </Link>
                )
              })
            : 
              <Text>Não existem trabalhadores no momento! </Text>
          }

          </Link>
            
          <Modal animationType='slide' transparent={true} visible={showModal} onRequestClose={() => {setShowModal(!showModal)}} >
            <VStack style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <VStack style={styles.modalView}>
                <VStack alignItems='center'>
                  <VStack paddingY={4}>
                    <BigUser />
                  </VStack>
                  
                  <VStack paddingX={6}>
                    {/* <Text style={styles.dataText}>{workerData?.nome}</Text>
                    <Text style={styles.dataText}>{workerData?.profissao}</Text>
                    <Text style={styles.dataText}>{workerData?.cidade} - {workerData?.uf}</Text> */}
                    
                    <HStack paddingY={2}>
                      <Text fontSize='md' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: </Text>
                      <Text fontSize='md' color='#FFF' fontWeight='medium' mr={1}>Avaliação: </Text>
                      <Star />
                    </HStack>
                  </VStack>

                    <VStack alignItems={"center"}>
                      <Button mt={0} mb={1} bgColor={'#FFC700'} color={'#000'} title={'Solicitar Serviço'} h={10} fs='lg' pbgColor='#FFF100'/>
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

        <Link mt={6}>
          <Text color='#1A82E2' fontSize='lg' bold mr={1} mt={-2} mb={3}>Lista de Marceneiros(as)</Text>
          <CircleRight />
        </Link>
        
        <Heading fontSize="lg" mb={4}>Pintores</Heading>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
        </ScrollView>

          <Link mt={6}>
            <Text color='#1A82E2' fontSize='lg' bold mr={1} mt={-2} mb={3}>Lista de Pintores(as)</Text>
            <CircleRight />
          </Link>
        </VStack>

        <Heading textAlign='center' fontSize="lg">Disponíveis no momento</Heading>

        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack alignItems='center'>          
            <VStack style={styles.hCard}>
              <HStack alignItems='center'>
                <VStack>
                <BigUser />

                </VStack>
                <VStack paddingX={5}>
                  <Text style={styles.dataText}>Gustavo Oliveira Souza</Text>
                  <Text style={styles.dataText}>Progamador Mobile/Web</Text>
                  <Text style={styles.dataText}>Muriaé - MG</Text>
                  
                  <HStack paddingY={2}>
                    <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                    
                    <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                    <Star />
                  </HStack>
                
                  <Button mt={0} mb={0} bgColor={'#FFC700'} color={'#000'} title={'Solicitar Serviço'} h={10} fs='lg' pbgColor='#FFF100'/>
                </VStack>
              </HStack>
            </VStack>
          </VStack>            
        </ScrollView>

        <Link mt={6} justifyContent='center' alignItems='center'>
          <Text color='#1A82E2' fontSize='lg' bold  mr={1} mt={-2} mb={3}>Ver todos os colaboradores</Text>
          <UserGroup />
        </Link>

        <VStack alignItems={'center'}>
          <Button mt={5} mb={0} color="#000" bgColor={'#FFC700'} pbgColor={'#FFF100'} title={'Crie uma solicitação'} w={260} />
        </VStack>
      </ScrollView>
      : <Heading>Carregando dados do usuário...</Heading>}
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center',
    paddingBottom: 10
  },
  box : {
    width: 95,
    height: 95,
    backgroundColor : '#00ADB5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    elevation: 10,
    marginVertical: 4,
    marginHorizontal: 5
  },
  card : {
    width: 150,
    height: 200,
    backgroundColor : '#00ADB5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginHorizontal: 5
  },
  hCard : {
    width: '90%',
    backgroundColor: '#00ABD5',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
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
    textAlign: 'center'
  }
})

