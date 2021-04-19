import React from 'react';
import {Grid} from '@material-ui/core';
import Post from '~/components/Post';
import Pagination from '@material-ui/lab/Pagination';
import {useActions} from '~/hooks/useActions';
import {useTypedSelector} from '~/hooks/useTypedSelector';

const PostsList: React.FC = () => {
    const {posts, currentPage, pageLimit} = useTypedSelector(
      (state) => state.posts
    );
    const {setCurrentPage} = useActions();

    const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const count = Math.ceil(posts.length / pageLimit);
    const paginatedPosts = posts.slice(
      (currentPage - 1) * pageLimit,
      currentPage * pageLimit
    );

    return (
      <Grid container justify="center" spacing={2}>
          {paginatedPosts &&
          paginatedPosts.map((post) => <Post key={post.id} {...post} />)}
          <Grid container item xs={12} justify="center">
              <Pagination
                page={currentPage}
                count={count}
                onChange={onPageChange}
              />
          </Grid>
      </Grid>
    );
};

export default PostsList;
