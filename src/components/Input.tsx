import { Input as NBInput, IInputProps, Fade } from 'native-base'

type Props = IInputProps & {
  placeholder : string;
}

export function Input({placeholder, ...rest}: Props ){
  return(
    <NBInput 
      bg='yellow'
      placeholder={placeholder}
      fontSize="sm"
      borderRadius="2xl"
    />
  )
}