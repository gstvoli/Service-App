import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
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
  const [formData, setFormData] = useState<CadastroData>({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
  });
  
  const handleFormChange = (key: keyof CadastroData, value: string) => {
    setFormData(prevData => ({ ...prevData, [key]: value }));
  };

  const goToNextStep = () => {
    if (step < 3){
      setStep(step + 1);
    } else{
      // Aqui vai enviar para o banco
      console.log('Dados para o banco de dados:', formData);      
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step){
      case 1:
        <SignIn data={formData} handleChange={handleFormChange} />
        break;
      
      case 2:
        <SignInTerms />
        break;

      case 3:
        <SignInCard />
        break;

      default: <SignInStart />
    }
  };
  
  return (
    <View style={styles.container}>
      <VStack alignItems="center">
        <Heading textAlign={'center'} color="#00ADB5" fontSize={'3xl'}>Crie sua conta!</Heading>
        <Text color="#000" my={10} bold fontSize={'lg'}>Preencha os dados para criar sua conta!</Text>

        
        <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={8} >
          <ArrowRight />
        </Button>

      <Text color="#000" fontSize="lg" bold mb={8}>Próximo</Text>
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

