import { StyleSheet } from "react-native";
import { LinearGradient as View} from "expo-linear-gradient";
import { Checkbox, Text, HStack, Link } from "native-base";
// import { SafeAreaView as View } from 'react-native-safe-area-context';

import { Input } from "../components/Input";
import { Button as CButton } from "../components/Button";
import { TitleEllipse } from "../components/TitleEllipse";

export default function Login(){
  return (
    <View colors={['#00ADB5', '#FFF']} locations={[0 , 0.41]} style={styles.container}>
      {/* <TitleEllipse title="Entrar"/> */}
      <Text mb={20} fontWeight="bold" fontSize="3xl" color="#444" px={5}>Faça seu login!</Text>

      <Input placeholder="Seu CPF" my={2}/>
      <Input placeholder="Sua senha" my={2}/>

      <HStack>
        <Checkbox value="test" mt={2}>
          <Text fontWeight="bold">Lembrar Login</Text>  

          <Link ml={12}>
            <Text fontWeight="bold">Esqueceu sua senha?</Text>
          </Link>
        </Checkbox>
      </HStack>

      <CButton mt={6} mb={6} color={"#FFF"} bgColor={"#00ADB5"} title={"Entrar"} w="full"/>

      {/* <Text fontWeight="bold" fontSize="md" >ou</Text>
      
      <HStack mt={3}>
        <Button borderRadius="full" w={120}>
          <Text fontWeight="bold" color="#FFF">Google Play</Text>
        </Button>

        <Button borderRadius="full" w={120}>
          <Text fontWeight="bold" color="#FFF">Apple ID</Text>
        </Button>
      </HStack> */}
      
      <Text color="#444" fontWeight="bold" fontSize="lg" my={1}>Ainda não tem uma conta?</Text>

      <Link>
        <Text color="#00ADB5" fontWeight="bold" fontSize="lg" borderBottomWidth={4} borderBottomColor='#00ADB5' my={1} px={4} pb={1}>Cadastre-se agora!</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  }
})