import { Button as NBButton, IButtonProps, Heading } from 'native-base'

type Props = IButtonProps & {
  title: string;
  color: string;
  bgColor? : string;
  mt: number;
  mb: number;
  fs? : number;
}

export function Button({title, color, bgColor, mt, mb, fs,...rest}: Props){
  return(
    <NBButton
      bg="coolGray.300"
      h={54}
      w={210}
      rounded="full"
      _pressed={{ backgroundColor: "lightBlue.800"}}
      mt={mt}
      mb={mb}
      fontSize={fs}
      backgroundColor={bgColor}
      {...rest}
      
    >
      <Heading color={color} fontSize="2xl">{title}</Heading>
    </NBButton>
  )
}