import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';
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
}

export default function Order(){

  const route = useRoute();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [workerData, setWorkerData] = useState<WorkerData | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);

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

      if (workerData?.cod_servico != null){
        const serviceId = workerData.cod_servico;
        const responseS = await api.get(`/service/${serviceId}`)
        const dataS = responseS.data[0];
        setServiceData(dataS);
      }
    } catch (error) {
      console.log('Erro ao buscar dados dos serviços:', error);
    }
  }

  getData();
}, [])

    return(
    <View >
      {(workerData != null) && (serviceData != null) ? 
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack alignItems='center'>
          <VStack mb={10}>
            <Ellipse />
            <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>{serviceData.descricao}</Heading>
          </VStack>

          <Heading paddingY={2} textAlign="center" color="#000">{workerData.nome}</Heading>

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

          <VStack>
            <Heading size={'md'} mb={3} textAlign={"center"}>Informe os dados sobre seu pedido</Heading>

            <HStack>
              <Button fs="lg" backgroundColor={"#00ADB5"} color={'#fff'} mt={0} mb={0} title={'Data do Pedido'} onPress={showMode} />
              {show && (
                <DateTimePicker 
                value={new Date()}
                mode="date" 
                onChange={onChange}
                // minimumDate={new Date(2023, 1, 1)}
                /> 
              )}
              <Input placeholder={'Data do pedido'} value={date.toLocaleDateString()} isReadOnly ml={3} w={'1/3'} />
            </HStack>
            
            <Input placeholder={'Local do serviço'} />
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
    paddingVertical: 12,
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