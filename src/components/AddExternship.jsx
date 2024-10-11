import React, { useEffect } from 'react';
import SurveyComponent from './SurveyComponent';
import { externshipSurveyJson } from '../json';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button
} from '@chakra-ui/react'
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { colors } from '../colors';


function AddExternship({ trigger, setTrigger, children }) {
  useEffect(() => {
    if (trigger) {
      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [trigger]); 

  if (!trigger) return null;

  const handleClose = () => {
    setTrigger(false);
  };

  const modalStyle = {
    backgroundColor: colors.background
  }

  const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

  const baseStyle = definePartsStyle({
  // define the part you're going to style
    overlay: {
    bg: 'blackAlpha.200', //change the background
  },
    dialog: {
    borderRadius: 'md',
    bg: `purple.100`,
  },
})
const modalTheme = defineMultiStyleConfig({
  baseStyle,
})



  return (
      <Modal size='4xl' isOpen={trigger} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent bg={colors.background}>
        <ModalHeader>Add a new externship opportunity to our database</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="scrollableContainer" style={{ maxHeight: '650px', overflowY: 'auto' }}>
            <SurveyComponent surveyJson={externshipSurveyJson} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button bg={colors.primary} mr={3}  _hover={{ bg: colors.primary+90 }} onClick={handleClose}>
            Cancel
          </Button>
          {children}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddExternship;


