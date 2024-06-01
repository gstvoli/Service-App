import { useState } from "react";
import { StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import { VStack, Text, HStack, Button } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 

import { Input } from "../components/Input";
import { CadastroData } from "../@types/Tipos";

import Stage1 from '../imgs/register1.svg';
import UserLarge from '../imgs/user-large-solid.svg'
import ArrowRight from '../imgs/arrowRight.svg'

interface Etapa2Props {
  data: CadastroData;
  handleChange: (key: keyof CadastroData, value: string) => void;
  // handleChangeN: (key: keyof CadastroData, value: number) => void;
}

export default function SignIn({data, handleChange} : Etapa2Props){

  const navigation = useNavigation();

  function handleNextPage(){
    // if (!(nome || cpf || email || telefone || senha)){
    //   Alert.alert('Cadastro', 'Preencha todos os campos!');
    // } else {
    //   if ((senha != senhaConf) && (senhaConf != '')){
    //     Alert.alert('Cadastro', 'As senhas não coincidem!');
    //   }
    // }
    navigation.navigate('signinterms')
  }

  return (
    <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>

    <View>
      <VStack alignItems="center">
        <Text color="#00ABD5" fontSize="xl" bold mb={2}>Etapa 2/4</Text>
        <Stage1 />

        <HStack alignItems="center" mt={4}>
          <UserLarge />
          <Text color="#00ABD5" fontSize="2xl" bold mt={2} ml={2}>Criar conta</Text>
        </HStack>

        <Text color="#000" fontSize="md" bold my={3}>Informe seus dados complementares abaixo</Text>

        <HStack justifyContent={"flex-start"} maxW="full" mt={0.5} mb={1.5}>
          <Text fontSize={"md"} alignSelf={"center"} bold>Buscar CEP:</Text>
          <Input placeholder="Seu CEP" inputMode="numeric" value={(data.cep)} onChangeText={cep => handleChange('cep', cep)}  w="30%" mx={2} fontSize={"md"}/>
        </HStack>

        <Input placeholder="Seu endereço" value={data.endereco} onChangeText={endereco => handleChange('endereco', endereco)} w="full" my={1} />

      <HStack alignItems="center" maxW="full" mt={1} mb={1.5}>
        <Input placeholder="Nº da casa/apto" value={(data.numero.toString() == '0' ? '' : data.numero.toString()) } onChangeText={numero => handleChange('numero', numero)} w="45%" mr={2} />
        <Input placeholder="Seu bairro" value={data.bairro} onChangeText={bairro => handleChange('bairro', bairro)} w="53%" />
      </HStack>

      <HStack alignItems="center" maxW="full" mt={0.5} mb={1.5}>
        <Input placeholder="Cidade" value={data.cidade} onChangeText={cidade => handleChange('cidade', cidade)} w="75%" mr={2}/>
        <Input placeholder="UF" value={data.uf} onChangeText={uf => handleChange('uf', uf)}maxLength={2}  w="23%"/>
      </HStack>
      </VStack>
    </View>

    </KeyboardAvoidingView>    
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: '#EEEEEE'
  }
})
