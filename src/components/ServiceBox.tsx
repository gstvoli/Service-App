import { VStack, Text, ITextProps } from "native-base";
import { Image, StyleSheet } from "react-native";

type Props = ITextProps & {
  title : string;
  path: string;
}

export function Service({title, path, ...rest} : Props){

  return(
    <VStack style={styles.box}>
      <VStack style={{width: 45, height: 45}}>
        <Image source={require('../imgs/Vector.png')} alt='Ícone do Serviço' style={{height: '100%', width: '100%', resizeMode: 'contain'}}/>
        {/* <Image source={`../imgs/${path}`} alt='Ícone do Serviço' /> */}
      </VStack>
      <Text color='#FFF' bold fontSize="md" mt={1}>{title}</Text>
    </VStack>
  )
}

const styles = StyleSheet.create({
  box : {
    width: 95,
    height: 95,
    backgroundColor : '#00ABD5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    shadowColor: '#000',
    // shadowOpacity: 0.9,
    elevation: 10,
    marginVertical: 4,
    marginHorizontal: 5
  }
})