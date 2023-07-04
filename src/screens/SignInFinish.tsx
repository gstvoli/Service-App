
import { StyleSheet } from "react-native";
import { VStack, Text, HStack, Link } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";

import PartyPR from '../imgs/ptrumpr.svg'
import PartyPL from '../imgs/ptrumpl.svg'
import UsersIcon from '../imgs/users-solid.svg'
import RightToBracket from '../imgs/right-to-bracket.svg'

import { Input } from "../components/Input";
import { LinearGradient } from "expo-linear-gradient";

export default function SignInFinish(){
  return (
      <LinearGradient
        colors={['#00ADB5', '#63DADF']}
        style={styles.container}
      >
        <HStack alignItems='center'>
          <PartyPR />
          <Text fontSize="3xl" fontWeight="bold" color="#FFF" mx={3}>Parabéns!</Text>  
          <PartyPL />
        </HStack>

        <VStack alignItems="center" my={3}>
          <Text style={styles.boldFont} my={2}>Seu cadastro foi concluído com sucesso!</Text>
          <Text style={styles.boldFont} mb={6}>Ficamos felizes por fazer parte de nossa comunidade!</Text>
          <UsersIcon />
          <Text color="#fff" fontWeight="bold" fontSize="2xl" mt={6} mb={1}>Faça seu login para</Text>
          
          <Link>
            <Text color="#fff" fontWeight="bold" fontSize="2xl" borderBottomWidth={4} borderBottomColor='#fff' w={200} pb={1.5} textAlign="center">acessar o app!</Text>
          </Link>
        </VStack>

        <HStack my={4}>
          <Link>
            <RightToBracket />
            <Text color="#444" fontWeight="bold" fontSize="2xl" mt={1} ml={2}>Fazer login</Text>
          </Link>
          
        </HStack>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 15
  },
  boldFont: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFF",
    textAlign: 'center'
  }
})