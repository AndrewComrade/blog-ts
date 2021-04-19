import React, { useEffect } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useActions } from '~/hooks/useActions';
import { useTypedSelector } from '~/hooks/useTypedSelector';
import PostsList from '~/components/PostsList';
import Typography from '@material-ui/core/Typography';

const HomePage: React.FC = () => {
    const classes = useStyles();

    const { fetchPosts } = useActions();
    const { loading, error } = useTypedSelector(
        (state) => state.posts
    );

    useEffect(() => {
        fetchPosts();
    }, []);



    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <Typography className={classes.title} component="h2" align="center">
                Posts
            </Typography>
            <PostsList />
        </Container>
    );
};

const useStyles = makeStyles({
    title: {
        marginTop: 50,
    },
});

export default HomePage;
