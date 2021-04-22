import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { IUser } from '~/types/users';
import User from '~/components/User';
import { Pagination } from '@material-ui/lab';

interface UsersListProps {
    users: IUser[];
    currentPage: number;
    onPageChange: (e: React.ChangeEvent<unknown>, value: number) => void;
}

const UsersList: FC<UsersListProps> = ({
    users,
    currentPage,
    onPageChange,
}) => {
    return (
        <Grid container justify="center">
            {users.map((user: IUser) => (
                <Grid key={user.id} container item xs={8} justify="center">
                    <User {...user} />
                </Grid>
            ))}
            <Grid container item justify="center" xs={12}>
                <Pagination
                    page={currentPage}
                    onChange={onPageChange}
                    count={4}
                />
            </Grid>
        </Grid>
    );
};

export default UsersList;
