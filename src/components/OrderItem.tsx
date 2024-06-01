import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { VStack, HStack, Text, ITextProps, IPressableProps } from "native-base";

import BigUser from '../imgs/bigUser.svg';

export type OrderProps = ITextProps & {
  id: number;
  worker: string;
  service: string;
  status: number;
} 

type Props = IPressableProps & {
  data: OrderProps; 
}

export function OrderItem({ data, ...rest } : Props){
  return (
    <Pressable>
      {/* <Link mx={2} key={data.id}> */}
          <VStack style={styles.hCard}>
          <HStack alignItems='center'>
            <VStack px={4}>
              <BigUser />
            </VStack>
            <VStack paddingX={3}>
              <Text style={styles.BoldText} color='#00ABD5'>Ordem Nº:{data.id}</Text>
              <Text style={styles.mediumText} color='#333'>Responsável: {data.worker}</Text>
              <Text style={styles.mediumText} color='#333' mr={2}>Data: {data.service}</Text>
              <Text style={styles.mediumText} color='#333'>
                Status:                       
              {data.status === 0 ? 
                <Text style={styles.BoldText} color="#00D672">Em andamento</Text> 
                :
                <Text style={styles.BoldText} color='#00D6B8'>Concluído</Text>
              }
              </Text>

            </VStack>
            <VStack backgroundColor="#00ABD5" borderRadius="full" padding={2} ml={4}>
              {/* <Link onPress={() => {data.id ? openDetails(data.id) : null}}>
                <ArrowForwardIcon color="#FFF"/>
              </Link> */}
            </VStack>
          </HStack>
        </VStack>
    </Pressable>
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
    backgroundColor : '#00ABD5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginHorizontal: 5
  },
  hCard : {
    borderColor: '#00ABD5',
    borderWidth: 2,
    marginVertical: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    width: '100%'
  },
  BoldText: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold'
  },
  mediumText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium'
  }
})