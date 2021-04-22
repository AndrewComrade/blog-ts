import React, { FC } from 'react';
import { IUser } from '~/types/users';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    List,
    ListItem,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '~/routes';

type UserProps = IUser;

const User: FC<UserProps> = ({ id, name, email, company, phone }) => {
    const classes = useStyles();
    const history = useHistory();

    const onMoreClick = () => {
        history.push(RouteNames.USER_ROUTE + '/' + id);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.pos} color="primary">
                    {name}
                </Typography>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {email}
                </Typography>
                <Typography variant="body2" component="p">
                    <List>
                        <ListItem>
                            <Typography color="textSecondary">
                                Phone: {phone}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography color="textSecondary">
                                Company: {company.name}
                            </Typography>
                        </ListItem>
                    </List>
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onMoreClick} size="small">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

const useStyles = makeStyles({
    root: {
        minWidth: 320,
        marginBottom: 25,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default User;
