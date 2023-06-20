import { useState } from "react";
import { StyleSheet } from "react-native";
import { VStack, Text, HStack, Button } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";

import Stage1 from '../imgs/register1.svg';
import UserLarge from '../imgs/user-large-solid.svg'
import ArrowRigh from '../imgs/arrowRight.svg'

import { Input } from "../components/Input";


export default function SignIn(){

  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <VStack alignItems="center">
        <Text color="#00ADB5" fontSize="xl" fontWeight="bold" mb={2}>Etapa 1/3</Text>
        <Stage1 />

        <HStack alignItems="center" mt={4}>
          <UserLarge />
          <Text color="#00ADB5" fontSize="2xl" fontWeight="bold" mt={2} ml={2}>Criar conta</Text>
        </HStack>


        <Text color="#000" fontSize="md" fontWeight="bold" my={3}>Informe seus dados pessoais abaixo</Text>

      </VStack>

      <Button h={16} w={16} rounded="full" bgColor="blue.500" mt={14}>
        <ArrowRigh />
      </Button>
      <Text color="#000" fontSize="lg" fontWeight="bold" >Próximo</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 30
  }
})