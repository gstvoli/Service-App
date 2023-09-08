import { StyleSheet } from 'react-native';
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import { Button } from '../components/Button';

import  Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

export default function Service(){

  return(
    <View style={styles.container}>
      <VStack mb={16}>
        <Ellipse />
        <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>Job Name</Heading>
      </VStack>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Link>
      <VStack style={styles.hCard}>
        <HStack alignItems='center'>
          <VStack>
          <BigUser />

          </VStack>
          <VStack paddingX={5}>
            <Text fontSize='md' color='#FFF' fontWeight='medium'>Gustavo Oliveira Souza</Text>
            <Text fontSize='md' color='#FFF' fontWeight='medium'>Progamador Mobile/Web</Text>
            <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
            
            <HStack paddingY={2}>
              <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
              
              <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
              <Star />
            </HStack>
          
            <Button mt={0} mb={0} bgColor={'#FFC700'} color={'#000'} title={'Solicitar Serviço'} h={10} fs='lg' pbgColor='#FFF100'/>
          </VStack>
        </HStack>
      </VStack>
      </Link>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  card : {
    width: 140,
    height: 200,
    backgroundColor : '#00ADB5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginHorizontal: 5
  },
  hCard : {
    width: '90%',
    backgroundColor: '#00ABD5',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10
  }
})