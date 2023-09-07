import { HStack, Heading, Link, Text, VStack } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import { Button } from '../components/Button';

import Painter from '../imgs/pintor.svg';
import Wrench from '../imgs/wrench.svg';
import Hammer from '../imgs/hammer.svg';
import Trowel from '../imgs/trowel.svg';
import CircleRight from '../imgs/circle-right.svg';
import BigUser from '../imgs/bigUser.svg';
import UserGroup from '../imgs/user-group.svg';
import Ellipse from '../imgs/ellipse.svg';
import Star from '../imgs/star.svg';

export default function Services(){
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack alignItems='center'>

        <VStack mt={-12}>
          <Ellipse />
          <Heading pt={2} mt={-16} mb={12} color='#FFF' textAlign='center'>Bem vindo, Gustavo!</Heading>
        </VStack>
      
        <Heading color='#393E46' mb={3}>Serviços</Heading>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <VStack style={styles.box}>
            <Painter />
            <Text color='#FFF' bold fontSize="md">Pintor</Text>
          </VStack>
          <VStack style={styles.box}>
            <Trowel />
            <Text color='#FFF' bold fontSize="md">Pedreiro</Text>
          </VStack>
          <VStack style={styles.box}>
            <Hammer />
            <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
          </VStack>
          <VStack style={styles.box}>
            <Wrench />
            <Text color='#FFF' bold fontSize="md">Mecânico</Text>
          </VStack>
          <VStack style={styles.box}>
            <Painter />
            <Text color='#FFF' bold fontSize="md">Pintor</Text>
          </VStack>
        </ScrollView> 

        <Link mt={3}>
          <Text color='#1A82E2' fontSize='lg' fontWeight='bold' mr={1} mt={-2}>Todos os serviços</Text>
          <CircleRight />
        </Link>

        <Heading color='#393E46' my={4}>Melhores colaboradores</Heading>

        <Heading fontSize="lg" mb={4}>Marcenaria</Heading>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
        </ScrollView>

        <Link mt={6}>
          <Text color='#1A82E2' fontSize='lg' bold mr={1} mt={-2} mb={3}>Lista de Marceneiros(as)</Text>
          <CircleRight />
        </Link>
        
        <Heading fontSize="lg" mb={4}>Pintores</Heading>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
          <Link>
            <VStack style={styles.card}>
              <BigUser />
              <Text color='#FFF' bold fontSize="md" textAlign='center' my={1}>Gustavo Oliveira Souza</Text>
              <Text color='#FFF' bold fontSize="md">Marceneiro</Text>
              <HStack mt={2}>
                <Star />
                <Text color="#FFF" fontSize='md' bold mt={-0.5} ml={1}>5.0</Text>
              </HStack>
            </VStack>
          </Link>
        </ScrollView>

          <Link mt={6}>
            <Text color='#1A82E2' fontSize='lg' bold mr={1} mt={-2} mb={3}>Lista de Pintores(as)</Text>
            <CircleRight />
          </Link>
        </VStack>

        <Heading textAlign='center' fontSize="lg">Disponíveis no momento</Heading>

        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack alignItems='center'>          
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
          </VStack>            
        </ScrollView>

        <Link mt={6} justifyContent='center' alignItems='center'>
          <Text color='#1A82E2' fontSize='lg' bold  mr={1} mt={-2} mb={3}>Ver todos os colaboradores</Text>
          <UserGroup />
        </Link>

        <VStack alignItems={'center'}>
          <Button mt={5} mb={0} color="#000" bgColor={'#FFC700'} pbgColor={'#FFF100'} title={'Crie uma solicitação'} w={260} />
        </VStack>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center'
  },
  box : {
    width: 95,
    height: 95,
    backgroundColor : '#00ADB5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    elevation: 10,
    marginVertical: 10,
    marginHorizontal: 5
  },
  card : {
    width: 150,
    height: 220,
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