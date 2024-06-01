import { useEffect, useState } from 'react';
import { Alert, BackHandler, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { ScrollView, Heading, VStack, HStack, Text, Link } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import api from "../services/api";
import { CadastroData } from '../@types/Tipos';

import Ellipse from '../imgs/ellipse2.svg';
import BigUser from '../imgs/bg-user-solid.svg';
import SMAdCard from '../imgs/ad-card-sm.svg';
import SMLocateDot from '../imgs/location-dot-sm.svg';
import SMWhatsapp from '../imgs/wpp-sm.svg';
import SMEnvelope from '../imgs/envelope-sm.svg';
import SMBCake from '../imgs/bcake-sm.svg';
import SMHandshake from '../imgs/handshake-sm.svg';
import SMEditPen from '../imgs/edit-pen-sm.svg';

export default function Profile(){
  const [ idade, setIdade ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ userData, setUserData ] = useState<CadastroData | null>(null);

  useEffect(() => {
    async function getUserData(){
      try {
        const userId = await AsyncStorage.getItem('userId');

        if (userId !== null && !isNaN(parseInt(userId, 10))){
          const teste = userId;
          const id = parseInt(teste, 10);

          await api.get(`/users/${id}`).then(response => {
            setUserData(response.data[0])
          }).catch(err => {
            console.log(err)
          })
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error ao buscar dados do usuário:', error);
      } 
    }

  getUserData();
  const today = new Date();
  if (userData) {
    if (userData.aniversario) {
      setIdade(today.getFullYear()- userData.aniversario.getFullYear());
    } 
  }
}, [userData]);

  return (
    <View style={styles.container}>
      { ((userData) !== null) && !(isLoading)? 
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack alignItems="center">

            <VStack>
              <Ellipse />
              <Heading pt={2} mt={"-3.5rem"} fontSize="3xl" color='#FFF' textAlign='center'>{userData.nome}</Heading>
            </VStack>

            <VStack backgroundColor="#777" w={180} h={180} borderRadius={'full'} justifyItems="center"alignItems="center" mt={6}>
              <VStack mt={6}>
                <BigUser />
              </VStack>
            </VStack>

            <VStack mt={6} width="80%">
              <Heading textAlign='center'>{idade} anos</Heading>
              <Heading textAlign='center' fontSize='xl' pb={4} mb={4} borderBottomWidth={3} borderBottomColor="#000">{userData.cidade} - {userData.uf}</Heading>
            </VStack>

          </VStack>

          <VStack>
            <VStack marginX={8}>  
              <HStack my={2} alignItems="center">
                <SMAdCard />
                <Text ml={2} fontSize='lg' color="#000" bold>{userData.cpf}</Text>
              </HStack>

              <HStack my={2} alignItems="center">
                <SMLocateDot />
                <Text ml={2} fontSize='lg' color="#000" bold>{userData.endereco}</Text>
              </HStack>

              <HStack my={2} alignItems="center">
                <SMWhatsapp />
                <Text ml={2} fontSize='lg' color="#000" bold>{userData.telefone}</Text>
              </HStack>

              <HStack my={2} alignItems="center">
                <SMEnvelope />
                <Text ml={2} fontSize='lg' color="#000" bold>{userData.email}</Text>
              </HStack>

              <HStack my={2} alignItems="center">
                <SMBCake />
                <Text ml={2} fontSize='lg' color="#000" bold>{userData.aniversario.toLocaleDateString()}</Text>
              </HStack>

              <HStack my={2} alignItems="center">
                <SMHandshake />
                <Text ml={2} fontSize='lg' color="#000" bold>0 solicitações feitas</Text>
              </HStack>
            
              <HStack justifyContent="center" mt={5} mb={4}>
                <Link>
                  <SMEditPen />
                  <Text ml={2} fontSize='lg' color="#00ABD5" bold>Editar Perfil</Text>
                </Link>
              </HStack>
            </VStack>
          </VStack>
        </ScrollView>
      : null
      }
    </View>

  )
}

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center'
  }
})