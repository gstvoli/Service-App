import { useEffect, useState } from 'react';
import { StyleSheet } from "react-native"
import { Heading, VStack, HStack, Text, Link } from 'native-base';
import { useRoute } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';

import Ellipse from '../imgs/ellipse2.svg';
import BigUser from '../imgs/bg-user-solid.svg';
import SMAdCard from '../imgs/ad-card-sm.svg';
import SMLocateDot from '../imgs/location-dot-sm.svg';
import SMWhatsapp from '../imgs/wpp-sm.svg';
import SMEnvelope from '../imgs/envelope-sm.svg';
import SMBCake from '../imgs/bcake-sm.svg';
import SMHandshake from '../imgs/handshake-sm.svg';
import SMEditPen from '../imgs/edit-pen-sm.svg';

import api from "../services/api";
import { CadastroData } from '../@types/Tipos';

type ParamsProps = {
  userId: number;
}

export default function Profile(){
const route = useRoute();
const [ userData, setUserData ] = useState<CadastroData | null>(null);



  return (
    <View style={styles.container}>
        <VStack>
          <Ellipse />
          <Heading pt={2} mt={"-3.5rem"} fontSize="3xl" color='#FFF' textAlign='center'>Gustavo Oliveira Souza</Heading>
        </VStack>

        <VStack backgroundColor="#777" w={180} h={180} borderRadius={'full'} justifyItems="center"alignItems="center" mt={6}>
          <VStack mt={6}>
            <BigUser />
          </VStack>
        </VStack>

        <VStack mt={6} width="80%" >
          <Heading textAlign='center'>22 anos</Heading>
          <Heading textAlign='center' fontSize='xl' pb={4} mb={4} borderBottomWidth={3} borderBottomColor="#000">Muriaé - MG</Heading>
          
          <HStack my={2} alignItems="center">
            <SMAdCard />
            <Text ml={2} fontSize='lg' color="#000" bold>123.456.789-10</Text>
          </HStack>

          <HStack my={2} alignItems="center">
            <SMLocateDot />
            <Text ml={2} fontSize='lg' color="#000" bold>Lorem ipsum dolor sit amet</Text>
          </HStack>

          <HStack my={2} alignItems="center">
            <SMWhatsapp />
            <Text ml={2} fontSize='lg' color="#000" bold>(32)98709-9174</Text>
          </HStack>

          <HStack my={2} alignItems="center">
            <SMEnvelope />
            <Text ml={2} fontSize='lg' color="#000" bold>guga.oli.1357@gmail.com</Text>
          </HStack>

          <HStack my={2} alignItems="center">
            <SMBCake />
            <Text ml={2} fontSize='lg' color="#000" bold>06 de Dezembro de 2000</Text>
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
    </View>

  )
}

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center',
  }
})