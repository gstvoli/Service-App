import { Button as NBButton, IButtonProps, Heading } from 'native-base'

export function Button(){
  return(
    <NBButton
      bg="lightBlue.700"
      h={45}
      rounded="full"
      _pressed={{ bg: "lightBlue.800"}}
      
    >
      <Heading color="white" fontSize="sm">Entrar</Heading>
    </NBButton>
  )
}