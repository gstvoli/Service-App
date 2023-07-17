import { StyleSheet } from "react-native";
import { Text, VStack} from "native-base";

export function ServiceBox(){
  return (
    <VStack style={styles.container}>
      <Text>Alo</Text>
    </VStack>
    )
}

const styles = StyleSheet.create({
  container: {
    width: 95,
    height: 95,
    backgroundColor : '#00ADB5',
    borderRadius: 18
  }
});