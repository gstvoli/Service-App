import { StyleSheet } from 'react-native'
import { VStack, HStack, Text, Button } from "native-base";
import { SafeAreaView as View }from "react-native-safe-area-context";

import Stage3 from '../imgs/register3.svg'
import ArrowRight from '../imgs/arrowRight.svg'
import { CreditCard } from '@mui/icons-material';

export default function SignInCard(){
  return (
    <View style={styles.container}>
      <VStack alignItems="center">
      <Text color="#00ADB5" fontSize="xl" fontWeight="bold" mb={2}>Etapa 3/3</Text>
        <Stage3 />

      <HStack alignItems="center" mt={4}>
        <CreditCard  />
        <Text color="#00ADB5" fontSize="2xl" fontWeight="bold" mt={2} ml={2}>Criar conta</Text>
      </HStack>

      <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={10}>
        <ArrowRight />
      </Button>
      <Text color="#000" fontSize="lg" fontWeight="bold" >Próximo</Text>

      </VStack>
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