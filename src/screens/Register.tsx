import { useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Alert, BackHandler, StyleSheet } from 'react-native';
import { Heading, VStack, Text,  Button, useSafeArea } from 'native-base';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import SignIn from './SignIn';
import SignInTerms from './SignInTerms';
import SignInCard from './SignInCard';
import { CadastroData } from '../@types/Tipos';

import ArrowRight from '../imgs/arrowRight.svg'
import SignInStart from './SignInStart';

export default function Register(){
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CadastroData>({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    accept: false
  });

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => goToPreviousStep()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return;
  }, []);

  const handleChange = (key: keyof CadastroData, value: string) => {
    setData(prevData => ({...prevData, [key]: value, }));
  };

  const handleCheck = (key: keyof CadastroData, value: boolean) => {
    setData(prevData => ({...prevData, [key]: value, }));
  }; 

  const goToNextStep = () => {
    if (step < 3){
      setStep(step + 1);
      console.log('Dados para o banco de dados:', data); 
    } else{
      // Aqui vai enviar para o banco
      console.log('Dados para o banco de dados:', data);      
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    console.log(step);
    if (step === 1){
      return (
        <SignIn data={data} handleChange={handleChange}/>
      )
    } else 
    if (step === 2){
      return (
        <SignInTerms data={data} handleChange={handleCheck}/>
      )
    } else {
      <SignInCard />
    }
  };
  
  return (
    <View style={styles.container}>
      <VStack alignItems="center">

        {renderStep()}
        
        <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={8} onPress={goToNextStep} >
          <ArrowRight />
        </Button>

      <Text color="#000" fontSize="lg" bold mb={8} >Próximo</Text>
      </VStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
})

