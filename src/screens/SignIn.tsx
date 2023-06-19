import { VStack, Text, HStack } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView as View} from "react-native-safe-area-context";

import { Input } from "../components/Input";
import { useState } from "react";

export default function SignIn(){

  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <VStack alignItems="center">
        <Text color="#00ADB5" fontSize="md" fontWeight="bold" mb={2}>Etapa 1/3</Text>
        <Text color="#00ADB5" fontSize="2xl" fontWeight="bold" >Criar conta</Text>
        <Text color="#000" fontSize="md" fontWeight="bold" my={3}>Informe seus dados pessoais abaixo</Text>
        <Input placeholder="Seu nome completo" w="full" my={1} borderColor={'#444'} color={'#908686'} />
        <Input placeholder="Seu CPF" w="full" my={1} borderColor={'#444'} color={'#908686'}/>

        <Input placeholder="Seu e-mail" w="full"  my={1} borderColor={'#444'} color={'#908686'}/>
        
        <HStack alignItems="center" maxW="full" mt={0.5}>
          <Input placeholder="Seu telefone/whatsapp" w="60%" mr={2} keyboardType="numeric" my={1}  borderColor={'#444'} color={'#908686'}/>
          <Input placeholder="CEP" keyboardType="numeric" w="38%"  borderColor={'#444'} color={'#908686'}/>
        </HStack>

        <Input placeholder="Seu endereço" w="full" my={1}  borderColor={'#444'} color={'#908686'}/>

      <HStack alignItems="center" maxW="full" mt={1} mb={1.5}>
        <Input placeholder="Nº da casa/apto" w="45%" mr={2} borderColor={'#444'} color={'#908686'}/>
        <Input placeholder="Seu bairro" w="53%" borderColor={'#444'} color={'#908686'}/>
      </HStack>

      <HStack alignItems="center" maxW="full" mt={0.5} mb={1.5}>
        <Input placeholder="Cidade" w="75%" mr={2} borderColor={'#444'} color={'#908686'}/>
        <Input placeholder="UF" w="23%" borderColor={'#444'} color={'#908686'}/>
      </HStack>
      </VStack>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal: 30
  }
})