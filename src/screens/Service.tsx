import { StyleSheet } from 'react-native';
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { ArrowForwardIcon, VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import  Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

export default function Service(){

  return(
    <View style={styles.container}>
      <VStack mb={10}>
        <Ellipse />
        <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>Job Name</Heading>
      </VStack>

      <Heading paddingY={2} color="#000">Workers</Heading>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Link>
        <VStack style={styles.hCard}>
          <HStack alignItems='center'>
            <VStack>
              <BigUser />
            </VStack>
            <VStack paddingX={3}>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Gustavo Oliveira Souza</Text>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
              
              <HStack paddingY={2}>
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                <Star />
              </HStack>
            </VStack>
            <VStack backgroundColor="red.100" borderRadius="full" padding={1}>
              <Link>
                <ArrowForwardIcon color="#000"/>
              </Link>
            </VStack>
          </HStack>
        </VStack>
        </Link>
        <Link>
        <VStack style={styles.hCard}>
          <HStack alignItems='center'>
            <VStack>
              <BigUser />
            </VStack>
            <VStack paddingX={3}>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Gustavo Oliveira Souza</Text>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
              
              <HStack paddingY={2}>
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                <Star />
              </HStack>
            </VStack>
            <VStack backgroundColor="red.100" borderRadius="full" padding={1}>
              <Link>
                <ArrowForwardIcon color="#000"/>
              </Link>
            </VStack>
          </HStack>
        </VStack>
        </Link>
        <Link>
        <VStack style={styles.hCard}>
          <HStack alignItems='center'>
            <VStack>
              <BigUser />
            </VStack>
            <VStack paddingX={3}>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Gustavo Oliveira Souza</Text>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
              
              <HStack paddingY={2}>
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                <Star />
              </HStack>
            </VStack>
            <VStack backgroundColor="red.100" borderRadius="full" padding={1}>
              <Link>
                <ArrowForwardIcon color="#000"/>
              </Link>
            </VStack>
          </HStack>
        </VStack>
        </Link>
        <Link>
        <VStack style={styles.hCard}>
          <HStack alignItems='center'>
            <VStack>
              <BigUser />
            </VStack>
            <VStack paddingX={3}>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Gustavo Oliveira Souza</Text>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
              
              <HStack paddingY={2}>
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                <Star />
              </HStack>
            </VStack>
            <VStack backgroundColor="red.100" borderRadius="full" padding={1}>
              <Link>
                <ArrowForwardIcon color="#000"/>
              </Link>
            </VStack>
          </HStack>
        </VStack>
        </Link>
        <Link>
        <VStack style={styles.hCard}>
          <HStack alignItems='center'>
            <VStack>
              <BigUser />
            </VStack>
            <VStack paddingX={3}>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Gustavo Oliveira Souza</Text>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
              
              <HStack paddingY={2}>
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                <Star />
              </HStack>
            </VStack>
            <VStack backgroundColor="red.100" borderRadius="full" padding={1}>
              <Link>
                <ArrowForwardIcon color="#000"/>
              </Link>
            </VStack>
          </HStack>
        </VStack>
        </Link>
        <Link>
        <VStack style={styles.hCard}>
          <HStack alignItems='center'>
            <VStack>
              <BigUser />
            </VStack>
            <VStack paddingX={3}>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Gustavo Oliveira Souza</Text>
              <Text fontSize='md' color='#FFF' fontWeight='medium'>Muriaé - MG</Text>
              
              <HStack paddingY={2}>
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={2}>Serviços feitos: 0</Text>
                
                <Text fontSize='sm' color='#FFF' fontWeight='medium' mr={1}>Avaliação: 5.0</Text>
                <Star />
              </HStack>
            </VStack>
            <VStack backgroundColor="red.100" borderRadius="full" padding={1}>
              <Link>
                <ArrowForwardIcon color="#000"/>
              </Link>
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
    justifyContent: 'center',
    height: '100%'
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
    backgroundColor: '#00ABD5',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 6,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 10
  }
})