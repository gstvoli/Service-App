import { Text } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView as View } from 'react-native-safe-area-context';

import { ServiceBox } from '../components/ServiceBox';

export default function Services(){
  return (
    <View style={styles.container}>
      <Text>Bem vindo, Gustavo!</Text>
      <Text color="#000" fontWeight="bold" fontSize="2xl">Serviços</Text>

      <ScrollView horizontal={true}>
        <ServiceBox />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})