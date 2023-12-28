import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Input as NBInput, IInputProps, Fade } from 'native-base'

type Props = IInputProps & {
  placeholder : string;
  align? : string;
  type? : string;
  my? : number;
}

export function Input({placeholder, align, my, type, ...rest}: Props ){
  return(
    <NBInput 
      placeholder={placeholder}
      my={my}
      fontSize="md"
      fontWeight="bold"
      borderRadius="2xl"
      borderColor="rgb(68,68,68)"
      color="rgb(144,134,134)"
      type={type}
      {...rest}
      
    />
  )
}