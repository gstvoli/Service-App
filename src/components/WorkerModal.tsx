import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Center, Modal, Input, FormControl, IModalProps } from 'native-base';

type Props = IModalProps & {
  opened : boolean;
}

export function WorkerModal({opened} : Props){
  const [showModal, setShowModal] = useState(opened);
  return(
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header textAlign="center"></Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    top : 0,
    alignItems : 'center'
  }
})