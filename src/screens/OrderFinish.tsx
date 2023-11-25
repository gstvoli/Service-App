import { useEffect } from 'react';
import { BackHandler, StyleSheet } from "react-native";
import { VStack, Text, HStack, Link } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";

import UsersIcon from '../imgs/users-solid.svg'
import RightToBracket from '../imgs/right-to-bracket.svg'

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from '@react-navigation/native'

export default function OrderFinish(){

  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('login');
  }

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('login');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);


  return (
      <LinearGradient
        colors={['#00ADB5', '#63DADF']}
        style={styles.container}
      >
        <HStack alignItems='center'>
          <Text fontSize="3xl" bold color="#FFF" mx={3}>Pedido Registrado!</Text> 
        </HStack>

        <VStack alignItems="center" my={3}>
          <Text style={styles.boldFont} my={2}>Seu pedido foi enviado para aceitação!</Text>
          <Text style={styles.boldFont} mb={12}>Aguarde o responsável aceitá-lo, ou entre em contato com o mesmo!</Text>
          <UsersIcon />
          <Text color="#fff" bold fontSize="2xl" mt={12} mb={1}>Faça seu login para</Text>
          <Text color="#fff" bold fontSize="2xl" borderBottomWidth={4} borderBottomColor='#fff' w={200} pb={1.5} textAlign="center">acessar o app!</Text>

        </VStack>

        <HStack my={4}>
          <Link onPress={openScreen}>
            <RightToBracket />
            <Text color="#444" bold fontSize="2xl" mt={1} ml={2}>Fazer login</Text>
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