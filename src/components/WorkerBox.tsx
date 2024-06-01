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

export function Worker({name, job, jobCount, city, uf, rating, ...rest} : Props){
  return(
    <VStack style={styles.card}>
      <VStack paddingY={3}>
        <BigUser />
      </VStack>
      
      <VStack>
        <Text style={styles.dataText}>{name}</Text>
        <Text style={styles.dataText}>{job}</Text>
        <Text style={styles.dataText}>{city} - {uf}</Text>
        
        <HStack alignItems="center" alignSelf="center">
          <Text fontSize='md' color='#FFF' fontWeight='medium' mr={1}>{rating}</Text>
          <Star />
        </HStack>
      </VStack>
    </VStack>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    backgroundColor : '#00ABD5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginHorizontal: 5,
    alignContent: 'center'
  },
  dataText : {
    fontSize : 14,
    color: '#FFF',
    fontFamily: 'Inter_700Bold',
    textAlign: 'center'
  }
})

