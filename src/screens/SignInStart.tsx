import { StyleSheet } from 'react-native';
import { Heading, VStack, Text,  Button } from 'native-base';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native'

import ArrowRight from '../imgs/arrowRight.svg'

export default function SignInStart(){
  const navigation = useNavigation();

  function openRegister(){
    navigation.navigate('signin')
  }

  return (
    <View style={styles.container}>
      <VStack>
        <Heading textAlign={'center'} color="#00ADB5" fontSize={'3xl'}>Crie sua conta!</Heading>
        <Text color="#000" my={10} bold fontSize={'lg'}>Preenche os dados para criar sua conta!</Text>

        <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={8} onPress={openRegister}>
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