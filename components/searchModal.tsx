import React, {Component, PropsWithChildren, ReactNode} from 'react';
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Button, useDisclosure} from "@chakra-ui/react";

function ModalFooter(props: { children: ReactNode }) {
    return null;
}

class SearchModal extends Component {

    constructor(props:PropsWithChildren) {
        super(props);
    }
    render() {
        const {isOpen,onOpen,onClose} = useDisclosure();
        return (
            <Modal onClose={onClose} size={'lg'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    }
}

export default SearchModal;