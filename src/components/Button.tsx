import { Button as NBButton, IButtonProps, Heading } from 'native-base'

type Props = IButtonProps & {
  title: string;
  color: string;
  bgColor? : string;
  pbgColor? : string;
  mt: number;
  mb: number;
  fs? : string;
}

export function Button({title, color, pbgColor, bgColor, mt, mb, fs,...rest}: Props){
  return(
    <NBButton
      bg="coolGray.300"
      h={54}
      w={210}
      rounded="full"
      _pressed={{ backgroundColor: pbgColor ? pbgColor : "lightBlue.800"}}
      mt={mt}
      mb={mb}
      backgroundColor={bgColor}
      {...rest}
      
    >
      <Heading color={color} fontSize={ fs ? fs : "2xl"}>{title}</Heading>
    </NBButton>
  )
}