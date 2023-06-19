import { Input as NBInput, IInputProps, Fade } from 'native-base'

type Props = IInputProps & {
  placeholder : string;
  type? : string;
  borderColor : string;
  color : string;
  my? : number;
}

export function Input({placeholder, my, borderColor, color, type, ...rest}: Props ){
  return(
    <NBInput 
      
      placeholder={placeholder}
      my={my}
      fontSize="md"
      fontWeight="bold"
      borderRadius="2xl"
      borderColor={borderColor}
      color={color}
      type={type}
      {...rest}
      
    />
  )
}