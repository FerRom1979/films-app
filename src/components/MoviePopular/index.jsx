import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, Modal, Typography } from '@material-ui/core';

import usesStyles from './style';
import Loading from '../Skeleton/index';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { Config } from '../../helpers/config';

const MoviePopular = ({ moviePopular }) => {
    const classes = usesStyles();
    const { openModal, handleClose, body, open } = Config();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Typography variant="h5" className={classes.typography}>
                        Lo más visto del 2020 <MovieFilterIcon className={classes.icons} />
                    </Typography>
                </Grid>
                {moviePopular ? (
                    moviePopular.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            {item ? (
                                <Card className={classes.cards}>
                                    <CardActionArea onClick={() => openModal(item)}>
                                        <CardMedia
                                            className={classes.media}
                                            image={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                        />
                                    </CardActionArea>
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

export default MoviePopular;
