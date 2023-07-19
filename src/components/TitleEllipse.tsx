import { SafeAreaView as View } from 'react-native-safe-area-context';
import Ellipse from "../imgs/ellipse2.svg";
import { Text } from 'native-base';
import { StyleSheet } from 'react-native';

type Props = {
  title : string;
}

export function TitleEllipse({title} : Props){
  return(
    <View style={styles.container}>
      <Ellipse />
      <Text mt={-16} fontSize="lg" bold color="#FFF">{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top : 0,
    alignItems : 'center'
  }
})