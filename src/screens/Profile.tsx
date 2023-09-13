import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native"
import { Heading, VStack, HStack, Text, Link } from 'native-base';
import { useRoute } from '@react-navigation/native'
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

type ParamsProps = {
  userId: number;
}

export default function Profile(){
const [ userData, setUserData ] = useState<CadastroData | null>(null);

useEffect(() => {
    async function getUserData(){
      try {
        const userId = await AsyncStorage.getItem('userId');

        if (userId !== null){

          const id = parseInt(userId);
          const response = await api.get(`/users/${id}`);
          const dados = response.data[0];
          console.log(userId);
          console.log(dados);
          setUserData(dados);
        }
      } catch (error) {
        console.error('Error ao buscar dados do usuário:', error);
      }
    }

  getUserData();
}, []);

  return (
    <View style={styles.container}>
      { userData !== null ? 
      <VStack>
        <VStack>
          <Ellipse />
          <Heading pt={2} mt={"-3.5rem"} fontSize="3xl" color='#FFF' textAlign='center'></Heading>
        </VStack>

        <VStack backgroundColor="#777" w={180} h={180} borderRadius={'full'} justifyItems="center"alignItems="center" mt={6}>
          <VStack mt={6}>
            <BigUser />
          </VStack>
        </VStack>

        <VStack mt={6} width="80%" >
          <Heading textAlign='center'>{userData.idade}</Heading>
          <Heading textAlign='center' fontSize='xl' pb={4} mb={4} borderBottomWidth={3} borderBottomColor="#000">{userData.cidade} - {userData.uf}</Heading>
          
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
        
          <HStack justifyContent="center" mt={5}>
            <Link>
              <SMEditPen />
              <Text ml={2} fontSize='lg' color="#00ADB5" bold>Editar Perfil</Text>
            </Link>
          </HStack>
        </VStack>
      </VStack>
      : <Heading>Carregando dados do usuário...</Heading> }
    </View>

  )
}

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center',
  }
})