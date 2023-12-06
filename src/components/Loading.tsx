import { HStack, Heading, Spinner } from 'native-base';

export function Loading(){
  return (
      <HStack space={2} justifyContent="center" alignItems={"center"}>
        <Spinner color="cyan.500" size={'lg'} />
        <Heading color="primary.500" fontSize="md">
          Carregando
        </Heading>
      </HStack>
    )
}