import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Checkbox, Text, VStack, HStack, Link, Heading } from "native-base";
import { SafeAreaView as View } from 'react-native-safe-area-context';

import Ellipse from '../imgs/ellipse.svg';

import { Input } from "../components/Input";
import { Button as CButton } from "../components/Button";

import api from "../services/api";
import { Roboto_100Thin_Italic, Roboto_500Medium, Roboto_900Black } from "@expo-google-fonts/roboto";

export default function Login(){
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  useEffect(() => { 
    async function getStorage(){
      try {
        const uEmail = await AsyncStorage.getItem('userEmail');
        const uPass  = await AsyncStorage.getItem('userPass');
      } catch (error) {
        console.log('Não existem dados salvos!');
      }
    }
    
    getStorage();
    },[])

  const handleLogin = async () => {
    if (!email || !senha){
      return Alert.alert('Entrar', 'Informe o e-mail e senha!');
    }

    setIsLoading(true);
    try{
      
      const response = await api.post('/login', { email, senha });

      if (checked == true) {
        AsyncStorage.setItem('userEmail', email);
        AsyncStorage.setItem('userPass', senha);  
      }
      
      AsyncStorage.setItem('userId', response.data.id.toString());
      console.log('Resposta do servidor:', response.data);

      setErrorMessage('');
      setIsLoading(false);

      navigation.navigate('main', { userId: response.data.id})
    
    } catch (error : any){
      if (error.response){
        setIsLoading(false);
        console.log('Resposta do servidor:', error.response.data);    
        setErrorMessage(error.response.data.error);    
        Alert.alert('Entrar', errorMessage);
  
      } else {
        setIsLoading(false);
        console.error('Erro na requisição:', error.message);
        setErrorMessage('Ocorreu um erro ao realizar o login. Por favor, tente novamente mais tarde.');   
        Alert.alert('Erro', errorMessage.toString());
      }
    }
  }

  function handleClick(){
    const newValue = !checked;
    setChecked(newValue);
  }

  function openRegister(){
    navigation.navigate('signinstart')
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <View style={styles.container}>
      {/*  <View colors={['#00ADB5', '#FFF']} locations={[0 , 0.41]} style={styles.container}> */}
        <VStack mb={20}>
          <Ellipse />
          <Text style={styles.menuText} pt={2} mt={-20} color='#FFF' textAlign='center' fontSize={28}>Faça seu login!</Text>
        </VStack>

        {/* <Text mb={20} bold fontSize="3xl" color="#444" px={5}>a</Text> */}

        <Input placeholder="Seu e-mail" value={email} onChangeText={text => setEmail(text)} keyboardType="email-address" my={2}/>
        <Input placeholder="Sua senha" value={senha} onChangeText={text => setSenha(text)} secureTextEntry={true} my={2}/>

        <HStack>
          <Checkbox value="login" mt={2} onChange={handleClick}>
            <Text style={styles.menuText}>Lembrar Login</Text>  

            <Link ml={12}>
              <Text style={styles.menuText}>Esqueceu sua senha?</Text>
            </Link>
          </Checkbox>
        </HStack>

        <CButton mt={6} mb={6} color={"#FFF"} bgColor={"#00ADB5"} title={"Entrar"} w="full" onPress={handleLogin}/>

        {/* <Text bold fontSize="md" >ou</Text>
        
        <HStack mt={3}>
          <Button borderRadius="full" w={120}>
            <Text bold color="#FFF">Google Play</Text>
          </Button>

          <Button borderRadius="full" w={120}>
            <Text bold color="#FFF">Apple ID</Text>
          </Button>
        </HStack> */}
        
        <Text style={styles.menuText} color="#444" fontSize="lg" my={1}>Ainda não tem uma conta?</Text>

        <Link onPress={openRegister}>
          <Text style={styles.menuText} color="#00ADB5" fontSize="lg" borderBottomWidth={4} borderBottomColor='#00ADB5' my={1} px={4} pb={1}>Cadastre-se agora!</Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  menuText:{
    fontFamily: 'Inter_700Bold'
  }
})