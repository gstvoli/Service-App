import { useEffect, useState } from 'react';
import { Alert, BackHandler, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { VStack, HStack, Text,  Button, Checkbox, ScrollView } from 'native-base';
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
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CadastroData>({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    endereco: '',
    numero: 0,
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
    idade: 0,
    aniversario: new Date('1990-01-01')
  });

  const handleChange = (key: keyof CadastroData, value: string) => {
    setData(prevData => ({...prevData,
      [key]: key === 'numero' ? parseInt(value) :
            value,
    }));
  }; 
  const handleDate = (key: keyof CadastroData, value: Date) => {
    setData(prevData => ({...prevData, [key]: value, }));
  }; 

  const handleClick = () => {
    const newValue = !checked;
    setChecked(newValue);
  }

  const handleRegister = async () => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await api.post('/register', data);

      console.log('Resposta do servidor:', response.data);
      setErrorMessage('');
      setIsLoading(false);
      setStep(1);
      handleDefault;

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

  const handleDefault = () => {
    setData({
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      senha: '',
      endereco: '',
      numero: 0,
      bairro: '',
      cidade: '',
      uf: '',
      idade: 0,
      cep: '',
      aniversario: new Date('1990-01-01'),
    })
    return;
  }

  useEffect(() => {
    const backAction = () => {
      if (step === 1){
        handleDefault;
      } else
      if (step > 1) {
        setStep(prevStep => prevStep - 1);
        return true;
      } 
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [step]);

  const goToNextStep = () => {
    if (step === 3){
      {(checked === true) ? setStep(step + 1) : Alert.alert('Confirmação', 'Aceite os termos para prosseguir!')}
    } else 
    if (step < 4){
      setStep(step + 1);
      console.log('Dados:', data); 
    } else
    if (step === 4){
      try {
        handleRegister();
        console.log('foi');
      } catch (error : any) {
        console.log('Retorno do cadastro:', error.response.data)        
        console.log('Retorno do cadastro:', error.message)        
      }
    }
  };

  const renderStep = () => {
    if (step === 1){
      return (
        <SignIn data={data} handleChange={handleChange} handleDate={handleDate}/>
      )
    } 
    else if (step === 2){
      return (
        <SignInData data={data} handleChange={handleChange} />
      )
    }
    else if (step === 3){
      return (
        <VStack alignItems={"center"}>  
        <SignInTerms />
          <HStack paddingTop={2}>
          <Checkbox mt={2} value={''} onChange={handleClick}>
            <Text fontSize="sm" bold>Li e concordo com os termos e condições</Text>
          </Checkbox>
        </HStack>
        </VStack>
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

