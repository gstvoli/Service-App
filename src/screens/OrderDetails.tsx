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
import { DataValue } from '../components/DataValue';

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
    <VStack style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack maxW={'full'} w={'full'}>
          <VStack mb={10}>
            <Ellipse />
            <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>Pedido Nº {orderData.id}</Heading>
          </VStack>

          <Heading textAlign="center" color="#000">{orderData.servico}</Heading>
          <Text textAlign="center" color="#000" bold fontSize={"lg"}>Responsável: {orderData.colaborador}</Text>

          <VStack style={styles.hCard}>
              <VStack backgroundColor="#ccc" w={120} h={120} borderRadius="full" alignItems="center" justifyContent="center">
                <BigUser />
              </VStack>
          </VStack>

          <VStack maxWidth={'full'} mx={4}>
            <Heading style={styles.header}>Detalhes do pedido</Heading>

            <VStack mx={6}>
              <DataValue my={1} detail={'Data do Pedido: '} dColor={''} vColor={''} value={orderData.data_abertura.toLocaleDateString()} />

              <DataValue my={1} detail={'Endereço: '} value={orderData.rua_servico} /> 

              <DataValue my={1} detail={'Número: '} value={orderData.numcasa_servico} />

              <DataValue my={1} detail={'Bairro: '} value={orderData.bairro_servico} />
              
              <HStack>
                <DataValue my={1} detail={'Cidade: '} value={orderData.cidade_servico} />

                <DataValue my={1} mx={2} detail={'UF: '} value={orderData.uf_servico} />
              </HStack>

              <DataValue detail={'Complemento: '} value={orderData.complemento_servico} />

              <HStack alignItems={'center'} justifyContent={"space-between"} my={2}>
                <Button bg={'#00D66E'} color={'#FFF'} mt={0} mb={0} fs={'md'} w={24} h={10} title={'Finalizar'}></Button>
                <Button bg={'#D62B00'} color={'#FFF'} mt={0} mb={0} fs={'md'} w={24} h={10} title={'Cancelar'}></Button>
                <Button bg={'#4A4BCA'} color={'#FFF'} mt={0} mb={0} fs={'md'} w={24} h={10} title={'Chat'}></Button>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
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
    justifyContent: 'center',
    height: '100%'
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
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 18,
    paddingVertical: 10,
    borderRadius: 10,
    borderBottomWidth: 4,
    borderColor: '#00ABD5'
  },
  header:{
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 4
  },
  textData : {
    color: '#000',
    fontFamily: 'Inter_400Regular',
    fontWeight: 'bold',
    fontSize: 20
  }
})