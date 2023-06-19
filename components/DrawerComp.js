import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";

const DrawerComp = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { btnOpen } = useRef();

  return (
    <>
      <Button ref={btnOpen} colorScheme="teal" onClick={onOpen}>
        Ver Más
      </Button>
      <Drawer
        finalFocusRef={btnOpen}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{props.local.nombre}</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComp;
