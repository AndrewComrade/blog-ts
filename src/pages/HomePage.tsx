import React from 'react';
import {
    CircularProgress,
    Container,
    Grid,
    makeStyles,
} from '@material-ui/core';
import { useTypedSelector } from '~/hooks/useTypedSelector';
import { useActions } from '~/hooks/useActions';
import Typography from '@material-ui/core/Typography';
import UsersList from '~/components/UsersList';

const HomePage: React.FC = () => {
    const classes = useStyles();
    const { setUsersPage } = useActions();
    const { users, usersPage, loading, error } = useTypedSelector(
        (state) => state.users
    );

    const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setUsersPage(value);
    };

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
                <Typography>{error}</Typography>
            </Grid>
        );
    }

    return (
        <Container>
            <Typography
                className={classes.title}
                color="primary"
                component="h2"
                align="center"
            >
                Users
            </Typography>
            <UsersList
                users={users}
                currentPage={usersPage}
                onPageChange={onPageChange}
            />
        </Container>
    );
};

const useStyles = makeStyles({
    title: {
        marginTop: 50,
        fontWeight: 'bold',
    },
});

export default HomePage;
