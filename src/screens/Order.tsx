import { useEffect, useState } from 'react';
import { Alert, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { VStack, HStack, Heading, Text, ScrollView, Checkbox } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

import Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg'
import Star from '../imgs/star.svg';

import api from '../services/api';
import { CadastroData, ServiceData, WorkerData, OrderData } from '../@types/Tipos';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Loading } from '../components/Loading';
import { Inter_400Regular } from '@expo-google-fonts/inter';

type ParamsProps = {
  userId: number;
  workerId: number;
  serviceId: number;
}

export default function Order(){

  const route = useRoute();
  const navigation = useNavigation();
  const { userId, workerId } = route.params as ParamsProps;
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [workerData, setWorkerData] = useState<WorkerData | null>(null);
  const [userData, setUserData] = useState<CadastroData | null>(null);
  const [data, setData] = useState<OrderData>({
    data_abertura: new Date(),
    data_encerramento: new Date(''),
    servico: serviceData?.descricao ? serviceData?.descricao : '',
    observacao: '',
    avaliacao: 0,
    status: 0,
    valor: serviceData?.preco ? serviceData?.preco : 0,
    acrescimo: 0,
    desconto: 0,
    rua_servico: '',
    bairro_servico: '',
    numcasa_servico: 0,
    complemento_servico: '',
    cidade_servico: '',
    uf_servico: '',
    id_cliente: userId,
    id_colaborador: workerId
  })

  const handleChange = (key: keyof OrderData, value: string) => {
    setData(prevData => ({...prevData,
      [key]: key === 'numcasa_servico' ? parseInt(value) :
            value,
    }));
  }; 
  const handleDate = (key: keyof OrderData, value: Date) => {
    setData(prevData => ({...prevData, [key]: value, }));
  }; 

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    handleDate('data_abertura', currentDate);
  };
  const showMode = () => {
    setShow(true); 
  }

  const checkAddress = () => {
    console.log(checked);
    if (checked && ((userData) && (serviceData))) {
      data.servico = serviceData.descricao;
      data.valor = serviceData.preco;
      data.rua_servico = userData.endereco;
      data.bairro_servico = userData.bairro;
      data.numcasa_servico = userData.numero;
      data.cidade_servico = userData.cidade;
      data.uf_servico = userData.uf;
    }
  }

  const handleNewOrder = async () => {
    try {
      setIsLoading(true);
      checkAddress();
      const response = await api.post('/neworder', data);

      console.log('Response do novo pedido:', response.data);
      setErrorMessage('');
      setIsLoading(false);
      navigation.navigate('orderfinish');
      
    } catch (error : any) {
      if (error.response){
        setIsLoading(false);
        console.log('Responsta do servidor:', error.response.data);
        setErrorMessage(error.response.data.error);
        Alert.alert('Novo pedido', errorMessage)
      } else {
        console.log('Erro na requisiçao:', error.message);
        setErrorMessage('Ocorreu um erro ao solicitar o pedido. Por favor revise os dados e tente novamente.')
      }
    }
  }

useEffect(() => { 

    async function getWorkerData(){
      try {
        const { workerId } = route.params as ParamsProps;
        const responseW = await api.get(`/worker/${workerId}`);
        const dataW = responseW.data[0];
        setWorkerData(dataW);
        console.log(dataW);
      } catch (error : any) {
        setErrorMessage('Erro ao buscar dados do trabalhador: ' + error);
      }
    }

    async function getServiceData() {
      try {
        const { serviceId } = route.params as ParamsProps;
        const responseS = await api.get(`/service/${serviceId}`);
        const dataS = responseS.data[0];
        setServiceData(dataS);
        console.log(dataS);   
      } catch (error : any) {
        setErrorMessage('Erro ao buscar dados do serviço: ' + error);
      }
    }

    async function getUserData(){
      try {
        const responseU = await api.get(`/users/${userId}`);
        const dataU = responseU.data[0];
        setUserData(dataU);
        console.log(dataU);    
      } catch (error : any) {
        setErrorMessage('Erro ao buscar dados do usuário: ' + error);
      }
    }

  async function getData() {
    try {
      setIsLoading(true);
      await Promise.all([getWorkerData(), getServiceData(), getUserData()]);
      setIsLoading(false);
    } catch (error : any) {
      console.log('Erro ao buscar dados dos serviços:', error);
      setErrorMessage('Erro ao buscar dados! Entre em contato conosco!');
    } finally {
      setIsLoading(false);
    }
  }

  getData();
}, [])

  if(errorMessage){
    return(
      <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
        <Heading>{errorMessage}</Heading>
      </VStack>
    )
  }

  if(isLoading){
    return (
      <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
        <Loading />
      </VStack>
    )
  }

    return(
      <View>
        <VStack>
          {(workerData != null) && (serviceData != null) && (userData != null) ? 
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack alignItems='center' maxW={'full'} w={'full'}>
              <VStack mb={10}>
                <Ellipse />
                <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>{serviceData.descricao}</Heading>
              </VStack>

              <Heading textAlign="center" color="#000">{workerData.nome}</Heading>

              <VStack style={styles.hCard}>
                <HStack alignItems="center">
                  <VStack backgroundColor="#ccc" w={120} h={120} borderRadius="full" alignItems="center" justifyContent="center">
                    <BigUser />
                  </VStack>

                  <VStack paddingX={4}>
                    <Text style={styles.textData} mb={1}>{workerData.cidade} - {workerData.uf}</Text>
                    <Text style={styles.textData} mb={1}>Serviços realizados: {workerData.pedidos_realizados}</Text>
                    <HStack mb={1}>
                      <Text style={styles.textData} mr={2}>Avaliação: {workerData.avaliacao}</Text>
                      <Star />
                    </HStack>
                    <Text style={styles.textData}>Valor: R$ {serviceData.preco}</Text>
                  </VStack>
                </HStack>
              </VStack>

              <VStack maxWidth={'full'} mx={4} >
                <Heading size={'md'} mb={3} textAlign={"center"}>Informe os dados sobre seu pedido</Heading>

                <HStack h={12}>
                  <Button fs="lg" backgroundColor={"#00ADB5"} color={'#fff'} mt={0} mb={0} h={12} title={'Data do Pedido'} onPress={showMode} w={'1/2'}/>
                  {show && (
                    <DateTimePicker 
                    value={data.data_abertura}
                    mode="date" 
                    onChange={onChange}
                    /> 
                  )}
                  <Input placeholder={'Data do pedido'} value={data.data_abertura.toLocaleDateString()} isReadOnly w={'1/2'}/>
                </HStack>
                
                <VStack my={4} mx={2} >
                  <Checkbox value="sameAddress" isChecked={checked} onChange={setChecked}>
                    <Text fontSize="sm" bold>O serviço é no meu próprio endereço</Text>
                  </Checkbox>
                </VStack>
                
                { !checked ?
                <VStack>
                  <Input placeholder={'Endereço do serviço'} value={data.rua_servico} onChangeText={rua => handleChange('rua_servico', rua)}/>

                  <HStack my={2} h={12}>
                    <Input placeholder={'Bairro'} value={data.bairro_servico} onChangeText={bairro => handleChange('bairro_servico', bairro)} w={'3/4'} mr={2}/>
                    <Input placeholder={'Nº'} value={(data.numcasa_servico.toString() == '0' ? '' : data.numcasa_servico.toString())} onChangeText={numero => handleChange('numcasa_servico', numero)} w={'20'}/>
                  </HStack>
                  
                  <HStack mb={2} h={12}>
                    <Input placeholder={'Cidade'} value={data.cidade_servico} onChangeText={cidade => handleChange('cidade_servico', cidade)} w={'3/4'} mr={2}/>
                    <Input placeholder={'UF'} value={data.uf_servico} onChangeText={uf => handleChange('uf_servico', uf)} w={'20'} maxLength={2}/>
                  </HStack>
                  
                  <Input placeholder={'Complemento'} value={data.complemento_servico} onChangeText={complemento => handleChange('complemento_servico', complemento)} mb={2}/>
                </VStack>
                : null 
              }
              
                <Input placeholder={'Observação'} value={data.observacao} onChangeText={observacao => handleChange('observacao', observacao)} mb={2} />                                       
              </VStack>

              <VStack>
                <Button fs="lg" backgroundColor={"#FFC700"} color={"#000"} mt={0} mb={0} h={12} title={'Confirmar Pedido'} onPress={handleNewOrder}/>
              </VStack>

            </VStack>
          </ScrollView>
        : <VStack alignItems={"center"} justifyContent={"center"}>
            <Text>Oi</Text>
          </VStack>
        }
      </VStack>

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
    marginHorizontal: 5,
    fontFamily: 'Inter_700Bold'
  },
  hCard : {
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderColor: '#00ADB5' 
  },
  textData : {
    color: '#000',
    fontFamily: 'Inter_400Regular',
    fontWeight: 'bold',
    fontSize: 18
  }
})