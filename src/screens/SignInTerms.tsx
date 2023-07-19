import { useState } from "react";
import { StyleSheet } from "react-native";
import { VStack, Text, HStack, Button, ScrollView, Checkbox } from "native-base";
import { SafeAreaView as View} from "react-native-safe-area-context";

import Stage2 from '../imgs/register2.svg';
import Terms from '../imgs/terms.svg'
import ArrowRight from '../imgs/arrowRight.svg'

import { Input } from "../components/Input";


export default function SignIn(){

  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <VStack alignItems="center">
        <Text color="#00ADB5" fontSize="xl" bold mb={2}>Etapa 2/3</Text>
        <Stage2 />

        <HStack alignItems="center" mt={4}>
          <Terms />
          <Text color="#00ADB5" fontSize="2xl" bold  ml={2}>Termos e Condições</Text>
        </HStack>


        <Text color="#000" textAlign="center"fontSize="md" bold my={3}>Para completar seu cadastro, leia nossos termos e condições abaixo</Text>

      
      <ScrollView style={styles.termsBg}>
        <Text textAlign="justify" color="#000" fontWeight="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Lobortis feugiat vivamus at augue eget arcu dictum varius. Accumsan lacus vel facilisis volutpat est velit egestas dui. Diam sit amet nisl suscipit adipiscing bibendum. In mollis nunc sed id semper risus in hendrerit gravida. Tortor vitae purus faucibus ornare suspendisse. Mauris in aliquam sem fringilla ut morbi tincidunt. Gravida neque convallis a cras semper auctor neque vitae. Sagittis id consectetur purus ut faucibus pulvinar. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. In ornare quam viverra orci sagittis. Cras pulvinar mattis nunc sed. Ut tellus elementum sagittis vitae. Sagittis id consectetur purus ut faucibus. Dolor magna eget est lorem ipsum dolor sit. Quis viverra nibh cras pulvinar mattis. Eget nullam non m nibh. In ornare quam viverra orci sagittis. Cras pulvinar mattis nunc sed. Ut tellus elementum sagittis vitae. Sagittis id consectetur purus ut faucibus. Dolor magna eget est lorem ipsum dolor sit. Quis viverra nibh cras pulvinar mattis. Eget nullam non </Text>
      </ScrollView>

      <HStack paddingTop={2}>
        <Checkbox value="test" mt={2}>
          <Text fontSize="sm" bold>Li e concordo com os termos e condições</Text>
        </Checkbox>
      </HStack>

      <Button h={16} w={16} rounded="full" bgColor="#00ADB5" mt={8}>
        <ArrowRight />
      </Button>
      <Text color="#000" fontSize="lg" bold mb={8}>Próximo</Text>

      </VStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#EEEEEE'
  },
  termsBg: {
    backgroundColor: '#DFDFDF',
    borderColor: '#BAB5B5',
    borderWidth: 1,
    borderRadius: 6,
    padding: 15,
    maxHeight: 400
  }
})