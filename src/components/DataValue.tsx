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
      <Text bold fontSize={20} color={dColor ? dColor : '#000'} >{detail}</Text>
      <Text bold fontSize={'lg'} color={vColor? vColor : '#111'}>{value}</Text>
    </HStack>
  )
}