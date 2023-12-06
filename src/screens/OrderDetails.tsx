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

export default function OrderDetails(){
  return (
    <View>
    {(serviceData != null) ? 
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