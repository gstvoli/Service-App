import { Input as NBInput, IInputProps, Fade } from 'native-base'

export function Input({...rest}: IInputProps ){
  return(
    <NBInput 
      bg='yellow'
      h={14}
    />
  )
}