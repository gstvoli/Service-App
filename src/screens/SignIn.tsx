import { VStack, Text } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView as View} from "react-native-safe-area-context";

import { Input } from "../components/Input";

export default function SignIn(){
  return (
    <View style={styles.container}>
      <VStack alignItems="center">
        <Text color="#00ADB5">Etapa 1/3</Text>
        <Text color="#00ADB5">Criar conta</Text>
        <Text color="#000">Informe seus dados pessoais abaixo</Text>
        <Input placeholder="Seu nome completo" w="full" h={6} />
      </VStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40
  },
})