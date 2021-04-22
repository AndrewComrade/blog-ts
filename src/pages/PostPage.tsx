import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '~/hooks/useTypedSelector';
import {
    CircularProgress,
    Container,
    Grid,
    Typography,
} from '@material-ui/core';
import { useActions } from '~/hooks/useActions';

interface ParamTypes {
    id: string;
}

const PostPage = () => {
    const { fetchPost } = useActions();
    const { id } = useParams<ParamTypes>();
    const { post, error, loading } = useTypedSelector((state) => state.posts);

    useEffect(() => {
        fetchPost(id);
    }, []);

    if (loading) {
        return (
            <Grid container justify="center">
                <CircularProgress />
            </Grid>
        );
    }

    if (error) {
        return (
            <Grid container justify="center">
                {error}
            </Grid>
        );
    }

    return (
        <Container>
            {!!post && (
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h2">
                            User ID: {post.userId}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h2">ID: {post.id}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h2">
                            Title: {post.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p">Text: {post.body}</Typography>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default PostPage;
