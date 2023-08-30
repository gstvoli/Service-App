import { useEffect, useState } from 'react';
import { Alert, BackHandler, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { VStack, Text,  Button, ScrollView } from 'native-base';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import SignIn from './SignIn';
import SignInData from './SignInData';
import SignInTerms from './SignInTerms';
import SignInCard from './SignInCard';
import { CadastroData } from '../@types/Tipos';

import ArrowRight from '../imgs/arrowRight.svg'
import api from '../services/api';

export default function Register(){
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CadastroData>({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
    aniversario: '',
    accept: false
  });

  const handleChange = (key: keyof CadastroData, value: string) => {
    setData(prevData => ({...prevData, [key]: value, }));
  }; 

  // const handleChangeN = (key: keyof CadastroData, value: number) => {
  //   setData(prevData => ({...prevData, [key]: value, }));
  // };

  const handleClick = (key: keyof CadastroData, value: boolean) => {
    setData(prevData => ({...prevData, [key]: value, }));
  };

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      const response = await api.post('/register', data);

      console.log('Resposta do servidor:', response.data);
      setErrorMessage('');
      setIsLoading(false);

      navigation.navigate('signinfinish');
      
      console.log('Dados:', data);     
    } catch (error : any){
      if (error.response){
        setIsLoading(false);
        console.log('Resposta do servidor:', error.response.data);    
        setErrorMessage(error.response.data.error);    
        Alert.alert('Entrar', errorMessage);
  
      } else {
        console.error('Erro na requisição:', error.message);
        setErrorMessage('Ocorreu um erro ao realizar o login. Por favor, tente novamente mais tarde.');       
      }
    }
  }

  useEffect(() => {
    const backAction = () => {
      if (step > 1) {
        setStep(prevStep => prevStep - 1);
        return true;
      } 
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [step]);

  const goToNextStep = () => {
    if (step < 4){
      setStep(step + 1);
      console.log('Dados:', data); 
    }
  };

  const renderStep = () => {
    // console.log(step);
    if (step === 1){
      return (
        <SignIn data={data} handleChange={handleChange}/>
      )
    } 
    else if (step === 2){
      return (
        <SignInData data={data} handleChange={handleChange} />
      )
    }
    else if (step === 3){
      return (
        <SignInTerms data={data} handleClick={handleClick}/>
      )
    }
    else if (step === 4){
      return (
        <SignInCard />
      )
    }
  };
  
  return (
    <View style={styles.container}>
      {/* <VStack alignItems="center"> */}
      <ScrollView showsVerticalScrollIndicator={false}>


        {renderStep()}
        
      {/* </VStack> */}
      <VStack alignItems={"center"} mb={5}>

        <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={4} mb={1} onPress={goToNextStep} >
          <ArrowRight />
        </Button>

        <Text color="#000" fontSize="lg" bold >Próximo</Text>
      </VStack>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center'
  }
})

