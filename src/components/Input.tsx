import { Input as NBInput, IInputProps, Fade } from 'native-base'

type Props = IInputProps & {
  placeholder : string;
  type? : string;
  my? : number;
}

export function Input({placeholder, my, type, ...rest}: Props ){
  return(
    <NBInput 
      placeholder={placeholder}
      textAlign="center"
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