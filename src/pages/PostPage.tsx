import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '~/hooks/useTypedSelector';
import {Container, Grid, Typography} from '@material-ui/core';
import { useActions } from '~/hooks/useActions';

export interface ParamTypes {
    id: string;
}

const PostPage = () => {
    const { fetchPost } = useActions();
    const { id } = useParams<ParamTypes>();
    const { post } = useTypedSelector((state) => state.posts);

    useEffect(() => {
        fetchPost(parseInt(id));
    }, []);

    return (
        <Container>
            {!!post && (
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h2">
                            Title: {post.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p">
                            Text: {post.body}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default PostPage;
