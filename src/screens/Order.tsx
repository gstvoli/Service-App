import { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { VStack, HStack, Heading, Text, ScrollView, Checkbox } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

import Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg'
import Star from '../imgs/star.svg';

import api from '../services/api';
import { ServiceData, WorkerData, OrderData } from '../@types/Tipos';
import { Button } from '../components/Button';
import { Input } from '../components/Input';


// interface OrderProps {
//   data : OrderData;
//   handleDate: (key: keyof OrderData, value: Date) => void;
// }

type ParamsProps = {
  workerId: number;
  serviceId: number;
}

export default function Order(){

  const route = useRoute();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [workerData, setWorkerData] = useState<WorkerData | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [data, setData] = useState<OrderData>({
    data_abertura: new Date('1990-01-01'),
    data_encerramento: new Date(''),
    servico: '',
    observacao: '',
    avaliacao: 0,
    status: 0,
    valor: 0,
    acrescimo: 0,
    desconto: 0,
    rua_servico: '',
    bairro_servico: '',
    numcasa_servico: '',
    complemento_servico: '',
    cidade_servico: '',
    uf_servico: '',
    id_cliente: 0,
    id_colaborador: 0
  });

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    console.log(currentDate);
    setShow(false);
    setDate(currentDate);
  };
  const showMode = () => {
    setShow(true);
    console.log(date);    
  };

  const handleNewOrder = async () => {
    try {
      setIsLoading(true);
      const response = await api.post('/neworder', data);

      console.log('Response do novo pedido:', response.data);
      setErrorMessage('');
      setIsLoading(false);
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

// useEffect(() => { 
//   async function getServicesData() {
//     try {
//       const { serviceId } = route.params as ParamsProps;
//       const response = await api.get(`/service/${serviceId}`);
//       const dados = response.data[0];
//       setServiceData(dados);
//     } catch (error) {
//       console.log('Erro ao buscar dados dos serviços:', error);
//     }
//   }

//   getServicesData();
// }, [serviceData])

useEffect(() => { 
  async function getData() {
    try {
      const { workerId } = route.params as ParamsProps;
      const responseW = await api.get(`/worker/${workerId}`);
      const dataW = responseW.data[0];
      setWorkerData(dataW);
      console.log(workerData);

      const { serviceId } = route.params as ParamsProps;
      const responseS = await api.get(`/service/${serviceId}`)
      const dataS = responseS.data[0];
      setServiceData(dataS);
      console.log(serviceData);

    } catch (error) {
      console.log('Erro ao buscar dados dos serviços:', error);
    }
  }

  getData();
}, [])

    return(
    <View>
      {(workerData != null) && (serviceData != null) ? 
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

              <VStack paddingX={5}>
                <Text style={styles.textData}>{workerData.cidade} - {workerData.uf}</Text>
                <Text style={styles.textData}>Serviços realizados: {workerData.pedidos_realizados}</Text>
                <HStack>
                  <Text style={styles.textData} mr={2}>Avaliação: {workerData.avaliacao}</Text>
                  <Star />
                </HStack>
              </VStack>
            </HStack>
          </VStack>

          <VStack maxWidth={'full'} mx={4} >
            <Heading size={'md'} mb={3} textAlign={"center"}>Informe os dados sobre seu pedido</Heading>

            <HStack h={12}>
              <Button fs="lg" backgroundColor={"#00ADB5"} color={'#fff'} mt={0} mb={0} h={12} title={'Data do Pedido'} onPress={showMode} w={'1/2'}/>
              {show && (
                <DateTimePicker 
                value={new Date()}
                mode="date" 
                onChange={onChange}
                // minimumDate={new Date(2023, 1, 1)}
                /> 
              )}
              <Input placeholder={'Data do pedido'} value={date.toLocaleDateString()} isReadOnly w={'1/2'}/>
            </HStack>
            
            <VStack my={4} mx={2} >
              <Checkbox value="sameAddress" isChecked={checked} onChange={setChecked}>
                <Text fontSize="sm" bold>O serviço é no meu próprio endereço</Text>
              </Checkbox>
            </VStack>
            
            { !checked ?
            <VStack>
              <Input placeholder={'Endereço do serviço'} value={orderData?.rua_servico}/>

              <HStack my={2} h={12}>
                <Input placeholder={'Bairro'} value={orderData?.bairro_servico} w={'3/4'} mr={2}/>
                <Input placeholder={'Nº'} value={orderData?.numcasa_servico} w={'20'}/>
              </HStack>
              
              <HStack mb={2} h={12}>
                <Input placeholder={'Cidade'} value={orderData?.cidade_servico} w={'3/4'} mr={2}/>
                <Input placeholder={'UF'} value={orderData?.uf_servico} w={'20'} maxLength={2}/>
              </HStack>
            </VStack>
            : null 
          }
          </VStack>

          <VStack >
            <Button fs="lg" backgroundColor={"#FFC700"} color={"#000"} mt={0} mb={0} h={12} title={'Confirmar Pedido'} onPress={handleNewOrder}/>
          </VStack>

        </VStack>
      </ScrollView>
    : <Text> Carregando </Text> }

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
    fontWeight: 'bold',
    fontSize: 18
  }
})