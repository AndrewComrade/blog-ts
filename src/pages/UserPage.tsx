import React, { FC, useEffect, useState } from 'react';
import {
    Button,
    Container,
    Grid,
    List,
    ListItem,
    Typography,
} from '@material-ui/core';
import { useTypedSelector } from '~/hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { useActions } from '~/hooks/useActions';
import PostsList from '~/components/PostsList';
import CreatePostModal from '~/components/modals/CreatePostModal';

interface ParamTypes {
    id: string;
}

const UserPage: FC = () => {
    const { fetchUser, fetchPosts } = useActions();
    const { user } = useTypedSelector((state) => state.users);
    const { posts } = useTypedSelector((state) => state.posts);
    const { id } = useParams<ParamTypes>();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchUser(id);
        fetchPosts(id);
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Grid container spacing={2} justify="center">
                <Grid item xs={6}>
                    <Typography color="primary" align="center">
                        USER INFO:
                    </Typography>
                    {user && (
                        <List>
                            <ListItem>
                                <Typography>NAME: {user.name}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>EMAIL: {user.email}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>PHONE: {user.phone}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    CITY: {user.address.city}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    COMPANY NAME: {user.company.name}
                                </Typography>
                            </ListItem>
                        </List>
                    )}
                    <Button onClick={handleOpen} variant="contained">
                        ADD POST
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography color="primary" align="center">
                        USER POSTS:
                    </Typography>
                    <PostsList posts={posts} />
                </Grid>
            </Grid>
            <CreatePostModal isOpen={open} handleClose={handleClose} />
        </Container>
    );
};

export default UserPage;
