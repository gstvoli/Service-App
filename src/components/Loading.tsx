import { Center, Spinner} from 'native-base';

export function Loading(){
  return (
      <Center flex={1} alignContent="center">
        <Spinner color="#00ABD5" size={'lg'}/>
      </Center>
    )
}