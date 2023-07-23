import { StyleSheet } from "react-native"
import { Heading, VStack, Text } from 'native-base';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import Ellipse from '../imgs/ellipse2.svg';
import BigUser from '../imgs/bg-user-solid.svg';

export default function Profile(){
  return (
    <View style={styles.container}>
        <VStack>
          <Ellipse />
          <Heading pt={2} mt={"-3.5rem"} fontSize="3xl" color='#FFF' textAlign='center'>Gustavo Oliveira Souza</Heading>
        </VStack>

        <VStack backgroundColor="#777" p={6} w={180} h={180} borderRadius={'full'} justifyItems="center" mt={50}>
          <VStack ml={3.5}>
            <BigUser />
          </VStack>

          <VStack mt={60} justifyItems='center'>
            <Text textAlign='center'>22 anos</Text>
            <Text textAlign='center'>Muriaé - MG</Text>
          </VStack>
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