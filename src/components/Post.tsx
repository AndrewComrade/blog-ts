import React, { useState } from 'react';
import { IPost } from '~/types/posts';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { RouteNames } from '~/routes';
import { ArrowForward } from '@material-ui/icons';

interface PostProps extends IPost {}

const Post: React.FC<PostProps> = ({ id, title, body }) => {
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);
    let history = useHistory();

    const handleOpen = () => {
        setOpen(!open);
    };

    const onMoreClick = () => {
        history.push(RouteNames.POST_ROUTE + '/' + id);
    };

    return (
        <Grid item xs={7}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography
                                component="h4"
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                align="center"
                            >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {open && (
                                <Typography variant="body2" component="p">
                                    {body}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12} container justify="center">
                            <Button onClick={handleOpen}>
                                {open ? (
                                    <RemoveCircleIcon />
                                ) : (
                                    <AddCircleIcon />
                                )}
                            </Button>
                            <Button onClick={onMoreClick}>
                                <ArrowForward />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

const useStyles = makeStyles({
    title: {
        textTransform: 'uppercase',
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default Post;
