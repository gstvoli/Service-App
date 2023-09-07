import { useState } from "react";
import { Alert, Button as RNB, KeyboardAvoidingView, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { VStack, Text, HStack } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'; 

import { Input } from "../components/Input";
import { CadastroData } from "../@types/Tipos";

import Stage1 from '../imgs/register1.svg';
import UserLarge from '../imgs/user-large-solid.svg'
import { Button } from "../components/Button";

interface Etapa1Props {
  data: CadastroData;
  handleChange: (key: keyof CadastroData, value: string) => void;
  handleDate: (key: keyof CadastroData, value: Date) => void;
}

export default function SignIn({data, handleChange, handleDate} : Etapa1Props){
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    handleDate('aniversario', currentDate)
  };

  const showMode = () => {
    setShow(true)
  };

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
        <Input autoCorrect={false } placeholder="Seu nome completo" value={data.nome} onChangeText={nome => handleChange('nome', nome)} w="full" my={1} />

        <HStack alignItems="center" maxW="full" mt={0.5}>
          <Input placeholder="Seu nº de celular" value={data.telefone} onChangeText={telefone => handleChange('telefone', telefone)} w="50%" mr={2} keyboardType="numeric" my={1} />

          <Input placeholder="Seu CPF" value={data.cpf} onChangeText={cpf => handleChange('cpf', cpf)} keyboardType="numeric" w="47%" my={1} />
        </HStack>

        <HStack alignItems="center" maxW="full" mt={0.5}>

        <Button fs={"md"} backgroundColor={"#00ADB5"} h={10} w={"3/6"} color={"#fff"} title={"Data de nascimento"} onPress={showMode} mt={0} mb={0} />  
        {/* <RNB onPress={showMode} title="Data do aniversário" /> */}
        {show && (
          <DateTimePicker
          value={data.aniversario}
          mode="date"
          is24Hour={true}
          onChange={onChange}
          />
          )}

        <Input placeholder="Sua data de nascimento" value={data.aniversario.toLocaleDateString()} isReadOnly w="48%" my={1} ml={2}/>
          {/* <Input placeholder="Sua idade" value={data.idade.toString()} onChangeText={telefone => handleChange('telefone', telefone)} w="50%" mr={2} keyboardType="numeric" my={1} /> */}

        </HStack>

        <Input placeholder="Seu e-mail" value={data.email} onChangeText={email => handleChange('email', email)}keyboardType="email-address" mt={2} mb={1} />
        
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
