import React from 'react';
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardActions,
    Modal,
    Typography,
    Button,
} from '@material-ui/core';
import Loading from '../Skeleton/index';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import usesStyles from './style';
import { Config } from '../../helpers/config';

const SearchMovie = ({ infoMovie }) => {
    const classes = usesStyles();
    const { openModal, handleClose, body, open } = Config();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Button
                        size="large"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => (window.location.href = '/')}
                    >
                        volver
                    </Button>
                </Grid>
                {infoMovie && infoMovie.length !== 0 ? (
                    infoMovie.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                            {item ? (
                                <Card className={classes.cards}>
                                    <CardActionArea onClick={() => openModal(item)}>
                                        <CardMedia
                                            className={classes.media}
                                            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        />
                                    </CardActionArea>
                                    <CardActions className={classes.cardAction}></CardActions>
                                </Card>
                            ) : (
                                <Loading />
                            )}
                        </Grid>
                    ))
                ) : (
                    <Grid item sm={12} className={classes.gridNoStart}>
                        <Typography className={classes.noStart}>
                            no se encuentra más peliculas por favor retroceda o realice una nueva
                            busqueda
                        </Typography>
                    </Grid>
                )}
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                </div>
            </Grid>
        </div>
    );
};

export default SearchMovie;
