import { useState } from 'react';
import { StyleSheet } from 'react-native'
import { VStack, HStack, Text, Button, Checkbox, useNativeBase } from "native-base";
import { SafeAreaView as View }from "react-native-safe-area-context";

import { Input } from '../components/Input';

import Stage3 from '../imgs/register3.svg';
import CreditCard from '../imgs/creditcard.svg';
import CCVisa from '../imgs/cc-visa.svg';

import { useNavigation } from '@react-navigation/native'

export default function SignInCard(){
  const [checked, setChecked] = useState(false)
  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('signinfinish');
  }

  return (
    <View style={styles.container}>
      <VStack alignItems="center">
      <Text color="#00ADB5" fontSize="xl" bold mb={2}>Etapa 3/3</Text>
        <Stage3 />

      <HStack alignItems="center" mt={4}>
        <CreditCard  />
        <Text color="#00ADB5" fontSize="2xl" bold mt={2} ml={2}>Dados Financeiros</Text>
      </HStack>

      <Text color="#000" fontSize="md" bold my={3}>Informe seus dados financeiros abaixo.</Text>
      <Input placeholder="Nome no cartão" my={2}/>
      <Input placeholder="Nº do cartão (1234-5678-9101-1121)" />

      <HStack alignItems="center" my={2}>
        <CCVisa />
        <Text mx={2} fontSize="sm" fontWeight="semibold">Data de Validade:</Text>
        <Input placeholder='' w="15%"/>
        <Text mx={2} fontSize="sm" fontWeight="semibold">/</Text>
        <Input placeholder='' w="15%"/>
      </HStack>

      <HStack alignItems="center">
        <Text fontSize="md" fontWeight="semibold" mr={2}>Código de Verificação de Cartao:</Text>
        <Input placeholder='' w="25%"/> 
      </HStack>

      <HStack my={1.5} mr={5}>
        <Checkbox value="sameAddress" isChecked={checked} onChange={setChecked}>
          <Text>Utilizar endereço residencial para cobrança</Text>
        </Checkbox>
      </HStack>
      { !checked ?  
        <VStack>
          <Input placeholder="Endereço de Cobrança" my={2}/>
          <HStack alignItems="center" mt={1} mb={1.5}>
            <Input placeholder="Nº da casa/apto" w="40%" mr={2} />
            <Input placeholder="Bairro" w="58%" />
          </HStack>
          <HStack alignItems="center" mt={1}>
            <Input placeholder="Cidade" w="75%" mr={2}/>
            <Input placeholder="UF" w="23%"/>
          </HStack>
        </VStack>  
        : null
      }

      </VStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 30,
    backgroundColor: '#EEEEEE'
  }
})