import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView as View } from 'react-native-safe-area-context';
import { ArrowForwardIcon, VStack, HStack, Heading, Text, ScrollView, Link } from 'native-base';

import  Ellipse from '../imgs/ellipse3.svg';
import BigUser from '../imgs/bigUser.svg';
import Star from '../imgs/star.svg';

import api from '../services/api';
import { ServiceData } from '../@types/Tipos';

type ParamsProps = {
  serviceId: number;
}
export default function Services(){

  const route = useRoute();
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);

  useEffect(() => { 
    async function getServicesData() {
      try {
        const { serviceId } = route.params as ParamsProps;
        const response = await api.get(`/service/${serviceId}`);
        const dados = response.data[0];
        setServiceData(dados);
        console.log('Dados', serviceData);
      } catch (error) {
        console.log('Erro ao buscar dados dos servios:', error);
      }
    }

    getServicesData();
  }, [])

  return(
    <View >
      { serviceData !== null ?
      <VStack style={styles.container}>
        <VStack mb={10}>
          <Ellipse />
          <Heading mt={-16} color='#fff' textAlign='center' fontSize={28}>{serviceData.titulo}</Heading>
        </VStack>

        <Heading paddingY={2} color="#000">Trabalhadores</Heading>

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
      </VStack>
        : <Heading>Carregando dados do usuário...</Heading>
      }
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