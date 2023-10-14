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

export function Input({name, job, jobCount, city, uf, rating} : Props){
  return(
    <VStack alignItems='center'>
      <VStack paddingY={4}>
        <BigUser />
      </VStack>
      
      <VStack paddingX={6}>
        <Text style={styles.dataText}>{name}</Text>
        <Text style={styles.dataText}>{job}</Text>
        <Text style={styles.dataText}>{city} - {uf}</Text>
        
        <HStack paddingY={2}>
          <Text fontSize='md' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: {jobCount}</Text>
          <Text fontSize='md' color='#FFF' fontWeight='medium' mr={1}>Avaliação: {rating}</Text>
          <Star />
        </HStack>

        <VStack alignItems={"center"}>
          <Button mt={0} mb={1} bgColor={'#FFC700'} color={'#000'} title={'Solicitar Serviço'} h={10} fs='lg' pbgColor='#FFF100'/>
        </VStack>
      </VStack>
    </VStack>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    backgroundColor : '#00ADB5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginHorizontal: 5
  },
  dataText : {
    fontSize : 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

