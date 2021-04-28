import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { Button, TextareaAutosize, TextField } from '@material-ui/core';

interface CreatePostModalProps {
    isOpen: boolean;
    handleClose: () => void;
    onSubmit: (title: string, descr: string) => void;
}

const CreatePostModal: FC<CreatePostModalProps> = ({
    isOpen,
    handleClose,
    onSubmit,
}) => {
    const [title, setTitle] = useState<string>('');
    const [descr, setDescr] = useState<string>('');

    return (
        <Modal isOpen={isOpen}>
            <Button onClick={handleClose}>Close</Button>
            <form>
                <TextField
                    variant="outlined"
                    label="Post title"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                    }
                />
                <TextareaAutosize
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setDescr(e.target.value)
                    }
                    value={descr}
                />
                <Button onClick={() => onSubmit(title, descr)}>
                    Create Post
                </Button>
            </form>
        </Modal>
    );
};

Modal.setAppElement('#root');

export default CreatePostModal;
