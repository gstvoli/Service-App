import { StyleSheet } from "react-native";
import { HStack, Text, ITextProps } from "native-base";

type Props = ITextProps & {
  detail: string;
  dColor?: string;
  vColor?: string;
  value: any;
  my?: number;
  mx?: number;
}

export function DataValue({detail, dColor, vColor, value, my, mx} : Props){
  return(
    <HStack alignItems={'center'} my={my} mx={mx}>
      <Text style={styles.detail} color={dColor ? dColor : '#000'} >{detail}</Text>
      <Text style={styles.value} color={vColor? vColor : '#111'}>{value}</Text>
    </HStack>
  )
}

const styles = StyleSheet.create({
  detail: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18
  },
  value: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18
  }
})