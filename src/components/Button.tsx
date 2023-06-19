import { Button as NBButton, IButtonProps, Heading } from 'native-base'

type Props = IButtonProps & {
  title: string;
  color: string;
  mt: number;
  mb: number;
}

export function Button({title, color, mt, mb,...rest}: Props){
  return(
    <NBButton
      bg="coolGray.300"
      h={54}
      w={210}
      rounded="full"
      _pressed={{ bg: "lightBlue.800"}}
      mt={mt}
      mb={mb}
      {...rest}
      
    >
      <Heading color={color} fontSize="2xl">{title}</Heading>
    </NBButton>
  )
}