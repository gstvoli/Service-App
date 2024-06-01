import { useEffect } from 'react';
import { BackHandler, StyleSheet } from "react-native";
import { VStack, Text, HStack, Link } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

import UsersIcon from '../imgs/users-solid.svg'
import RightToBracket from '../imgs/right-to-bracket.svg'

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from '@react-navigation/native'
import { Loading } from '../components/Loading';

export default function OrderFinish(){

  const userId = AsyncStorage.getItem('userId');
  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('login');
  }

  async function gotoMain(){
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId){
        const Id = parseInt(userId);
        navigation.navigate('main', {userId : Id});
      }
    } catch (error) {
      console.error('Error ao buscar dados do usuário:', error);
    }
  }

  async function gotoOrders(){
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId){
        const Id = parseInt(userId);
        navigation.navigate('orderlist');
      }      
    } catch (error) {
      console.error('Error ao buscar dados do pedido do usuário:', error);
    }
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
        colors={['#00ABD5', '#63DADF']}
        style={styles.container}
      >
        <VStack alignItems="center">
          <HStack alignItems="center">
            <Text textAlign="center" fontSize="3xl" bold color="#FFF" >Pedido Registrado!</Text> 
          </HStack>

          <VStack alignItems="center" my={3}>
            <Text style={styles.boldFont} my={2}>Seu pedido foi enviado para aceitação!</Text>
            <Text style={styles.boldFont} mb={12}>Aguarde o aceite, ou entre em contato com o trabalhador!</Text>

            <UsersIcon />

            <Link onPress={() => gotoOrders()} color="#fff" fontSize="2xl" fontWeight={"bold"} borderBottomWidth={4} borderBottomColor='#fff' pb={1.5} mt={12}>
              <Text style={styles.boldFont}>Visualize seus pedidos</Text>
            </Link>

            <Text color="#fff" bold fontSize="2xl" mt={2} mb={4}>ou</Text>

            <Link onPress={() => gotoMain()} color="#fff" fontSize="2xl" fontWeight={"bold"} borderBottomWidth={4} borderBottomColor='#fff' pb={1.5} textAlign="center">
              <Text style={styles.boldFont}>volte para o início</Text>
            </Link>
          </VStack>
        </VStack>
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