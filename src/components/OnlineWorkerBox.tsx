import { StyleSheet } from 'react-native'
import { Button as NBButton, VStack, HStack, Text, ITextProps } from 'native-base'

import { Button } from './Button';

type Props = ITextProps & {
  name : string;
  job : string;
  jobCount: number;
  city : string;
  uf : string;
  rating : number;
}

import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

export function OnlineWorkerBox({name, job, jobCount, city, uf, rating, ...rest} : Props){
  return(
    <VStack alignItems='center'>          
    <VStack style={styles.hCard}>
      <HStack alignItems='center'>
        <VStack>
        <BigUser />

        </VStack>
        <VStack paddingX={5}>
          <Text style={styles.dataText}>Gustavo Oliveira Souza</Text>
          <Text style={styles.dataText}>Progamador Mobile/Web</Text>
          <Text style={styles.dataText}>Muriaé - MG</Text>
          
          <HStack paddingY={2}>
            <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
            
            <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
            <Star />
          </HStack>
        
          <Button mt={0} mb={0} bgColor={'#FFC700'} color={'#000'} title={'Solicitar Serviço'} h={10} fs='lg' pbgColor='#FFF100'/>
        </VStack>
      </HStack>
    </VStack>
  </VStack>  
  )
}

const styles = StyleSheet.create({
  hCard: {
    width: '90%',
    backgroundColor: '#00ABD5',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10
  },
  dataText : {
    fontSize : 14,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

