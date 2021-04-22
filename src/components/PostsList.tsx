import React from 'react';
import Post from '~/components/Post';
import { IPost } from '~/types/posts';
import { Grid } from '@material-ui/core';

interface PostsListProps {
    posts: IPost[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
    return (
        <Grid container justify="center" spacing={2}>
            {posts && posts.map((post) => <Post key={post.id} {...post} />)}
        </Grid>
    );
};

export default PostsList;
