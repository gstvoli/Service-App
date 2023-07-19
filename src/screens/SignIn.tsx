import { useState } from "react";
import { StyleSheet } from "react-native";
import { VStack, Text, HStack, Button } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";

import Stage1 from '../imgs/register1.svg';
import UserLarge from '../imgs/user-large-solid.svg'
import ArrowRight from '../imgs/arrowRight.svg'

import { Input } from "../components/Input";


export default function SignIn(){

  const [value, setValue] = useState("");

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
        <Input placeholder="Seu nome completo" w="full" my={1} />
        <Input placeholder="Seu CPF" w="full" my={1} />

        <Input placeholder="Seu e-mail" w="full"  my={1} />
        
        <HStack alignItems="center" maxW="full" mt={0.5}>
          <Input placeholder="Seu telefone/whatsapp" w="60%" mr={2} keyboardType="numeric" my={1} />
          <Input placeholder="CEP" keyboardType="numeric" w="38%" />
        </HStack>

        <Input placeholder="Seu endereço" w="full" my={1} />

      <HStack alignItems="center" maxW="full" mt={1} mb={1.5}>
        <Input placeholder="Nº da casa/apto" w="45%" mr={2} />
        <Input placeholder="Seu bairro" w="53%" />
      </HStack>

      <HStack alignItems="center" maxW="full" mt={0.5} mb={1.5}>
        <Input placeholder="Cidade" w="75%" mr={2}/>
        <Input placeholder="UF" w="23%"/>
      </HStack>
      </VStack>

      <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={10}>
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