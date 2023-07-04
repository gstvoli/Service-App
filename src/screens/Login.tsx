import { Checkbox, Text, HStack, Link } from "native-base";
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";

import { Input } from "../components/Input";

export default function Login(){
  return (
    <View style={styles.container}>
      <Input placeholder="Seu CPF" my={2}/>
      <Input placeholder="Sua senha" my={2}/>

      <HStack flex={1} justifyContent="space-between">
        <Checkbox value="test" mt={2}>
          <Text>Lembrar Login</Text>  

          <Link>
            <Text>Esqueceu sua senha?</Text>
          </Link>
        </Checkbox>
      </HStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 30
  }
})