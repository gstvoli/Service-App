import { useState } from "react";
import { StyleSheet } from "react-native";
import { VStack, Text, HStack, Button } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";

import Stage1 from '../imgs/register1.svg';
import UserLarge from '../imgs/user-large-solid.svg'
import ArrowRight from '../imgs/arrowRight.svg'

import { Input } from "../components/Input";

import { useNavigation } from '@react-navigation/native'; 

export default function SignIn(){
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  // const [endereco, setEndereco] = useState('');
  // const [numero, setNumero] = useState('');
  // const [bairro, setBairro] = useState('');
  // const [cidade, setCidade] = useState('');
  // const [uf, setUf] = useState('');
  // const [cep, setCep] = useState('');
  const [idade, setIdade] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('signinterms')   
  }
  
  return (
    <View style={styles.container}>
      <VStack alignItems="center">
        <Text color="#00ADB5" fontSize="xl" bold mb={2}>Etapa 1/3</Text>
        <Stage1 />

        <HStack alignItems="center" mt={4}>
          <UserLarge />
          <Text color="#00ADB5" fontSize="2xl" bold mt={2} ml={2}>Criar conta</Text>
        </HStack>


        <Text color="#000" fontSize="md" bold my={3}>Informe seus dados pessoais abaixo</Text>
        <Input placeholder="Seu nome completo" value={nome} onChangeText={text => setNome(text)} w="full" my={1} />

        <HStack alignItems="center" maxW="full" mt={0.5}>
          <Input placeholder="Seu nº de celular" value={telefone} onChangeText={text => setTelefone(text)} w="50%" mr={2} keyboardType="numeric" my={1} />

          <Input placeholder="Seu CPF" value={cpf} onChangeText={text => setCpf(text)} keyboardType="numeric" w="47%" my={1} />
        </HStack>


        <Input placeholder="Seu e-mail" value={email} onChangeText={text => setEmail(text)} keyboardType="email-address" w="full" mt={4} mb={1} />
        
        <Input placeholder="Sua senha" value={senha} onChangeText={text => setSenha(text)} secureTextEntry my={1} />

        <Input placeholder="Confirme sua senha" secureTextEntry my={1} />

        {/* <Input placeholder="Seu endereço" value={} onChangeText={text => setEndereco(text)} w="full" my={1} /> */}
{/*
      <HStack alignItems="center" maxW="full" mt={1} mb={1.5}>
        <Input placeholder="Nº da casa/apto" value={numero} onChangeText={text => setNumero(text)} w="45%" mr={2} />
        <Input placeholder="Seu bairro" value={bairro} onChangeText={text => setBairro(text)} w="53%" />
      </HStack>

      <HStack alignItems="center" maxW="full" mt={0.5} mb={1.5}>
        <Input placeholder="Cidade" value={cidade} onChangeText={text => setCidade(text)} w="75%" mr={2}/>
        <Input placeholder="UF" value={uf} onChangeText={text => setUf(text)} maxLength={2} w="23%"/>
      </HStack> */}
      </VStack>

      <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={10} onPress={openScreen}>
        <ArrowRight />
      </Button>
      <Text color="#000" fontSize="lg" bold >Próximo</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: '#EEEEEE'
  }
})