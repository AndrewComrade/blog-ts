import React, { FC } from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';

interface CreatePostModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

const CreatePostModal: FC<CreatePostModalProps> = ({ isOpen, handleClose }) => {
    return (
        <Modal isOpen={isOpen}>
            <Button onClick={handleClose}>Close</Button>
            <form></form>
        </Modal>
    );
};

Modal.setAppElement('#root');

export default CreatePostModal;
