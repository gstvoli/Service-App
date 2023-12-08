import { useEffect, useState } from 'react';
import { Alert, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { VStack, HStack, Heading, Text, ScrollView, Checkbox } from 'native-base';

import Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg'
import Star from '../imgs/star.svg';

import api from '../services/api';
import { CadastroData, ServiceData, WorkerData, OrderData } from '../@types/Tipos';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Loading } from '../components/Loading';

type ParamsProps = {
  orderId: number;
}

export default function OrderDetails(){

  const route = useRoute();
  const navigation = useNavigation();
  const [orderData, setOrderData] = useState<OrderData>();

  useEffect(() => {
    async function getOrderData() {
      try {
        const { orderId } = route.params as ParamsProps;
        const response = await api.get(`/order/${orderId}`);
        const dados = response.data[0];
        setOrderData(dados);
      } catch (error) {
        console.error('Erro ao buscar dados do pedido: ', error);
      }
    }

    getOrderData();
  }, [])

  return (
    <View>
    {(orderData != null) ? 
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack alignItems='center' maxW={'full'} w={'full'}>
        <VStack mb={10}>
          <Ellipse />
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>Pedido Nº {orderData.id}</Heading>
        </VStack>

        <Heading textAlign="center" color="#000">{orderData.servico}</Heading>
        <Text textAlign="center" color="#000" bold fontSize={"lg"}>Responsável: {orderData.colaborador}</Text>

        <VStack style={styles.hCard}>
          <HStack alignItems="center">
            <VStack backgroundColor="#ccc" w={120} h={120} borderRadius="full" alignItems="center" justifyContent="center">
              <BigUser />
            </VStack>

            <VStack paddingX={4}>
              <Text style={styles.textData} mb={1}>{orderData.colaborador}</Text>
              <Text style={styles.textData} mb={1}>Serviços realizados:</Text>
              <HStack mb={1}>
                <Text style={styles.textData} mr={2}>Avaliação:</Text>
                <Star />
              </HStack>
              <Text style={styles.textData}>Valor: R$ </Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack maxWidth={'full'} mx={4} >
          <Heading size={'md'} mb={3} textAlign={"center"}>Informe os dados sobre seu pedido</Heading>
          
          {/* { !checked ?
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
        } */}
        
          {/* <Input placeholder={'Observação'} value={data.observacao} onChangeText={observacao => handleChange('observacao', observacao)} mb={2} />                                        */}
        </VStack>
      </VStack>
    </ScrollView>
  : <VStack>
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
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 12,
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