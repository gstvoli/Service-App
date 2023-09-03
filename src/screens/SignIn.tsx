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

interface Etapa1Props {
  data: CadastroData;
  handleChange: (key: keyof CadastroData, value: string) => void;
}

export default function SignIn({data, handleChange} : Etapa1Props){

  const [senhaConf, setSenhaConf] = useState('');
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

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
        <Text color="#00ADB5" fontSize="xl" bold mb={2}>Etapa 1/4</Text>
        <Stage1 />

        <HStack alignItems="center" mt={4}>
          <UserLarge />
          <Text color="#00ADB5" fontSize="2xl" bold mt={2} ml={2}>Criar conta</Text>
        </HStack>


        <Text color="#000" fontSize="md" bold my={3}>Informe os dados abaixo</Text>
        <Input placeholder="Seu nome completo" value={data.nome} onChangeText={nome => handleChange('nome', nome)} w="full" my={1} />

        <HStack alignItems="center" maxW="full" mt={0.5}>
          <Input placeholder="Seu nº de celular" value={data.telefone} onChangeText={telefone => handleChange('telefone', telefone)} w="50%" mr={2} keyboardType="numeric" my={1} />

          <Input placeholder="Seu CPF" value={data.cpf} onChangeText={cpf => handleChange('cpf', cpf)} keyboardType="numeric" w="47%" my={1} />
        </HStack>


        <Input placeholder="Seu e-mail" value={data.email} onChangeText={email => handleChange('email', email)}keyboardType="email-address" w="full" mt={2} mb={1} />
        
        <Input placeholder="Sua senha" value={data.senha} onChangeText={senha => handleChange('senha', senha)} secureTextEntry my={1} />

        <Input placeholder="Confirme sua senha" onChangeText={senhaConf => setSenhaConf(senhaConf)} secureTextEntry my={1} />

        {((data.senha != senhaConf) && (senhaConf != ''))? <Text color="error.700">As senhas não coincidem!</Text> : null}

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
