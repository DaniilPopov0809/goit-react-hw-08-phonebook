import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { GiHamburgerMenu } from 'react-icons/gi';

export const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Button onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
           
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Navigation onClose={onClose}/>
            <AuthNav onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
