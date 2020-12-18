import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
  Typography,
} from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import usesStyles from "./style";
import { Config } from "../../helpers/config";

const AverageMovie = ({ averageMovie, infoMovie, movilModal }) => {
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
        {averageMovie !== null || averageMovie.length !== 0 ? (
          averageMovie &&
          averageMovie.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.cards}>
                <CardActionArea onClick={() => openModal(item)}>
                  <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item sm={12}>
            <AverageMovie
              averageMovie={averageMovie}
              movilModal={movilModal}
              infoMovie={infoMovie}
            />
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

export default AverageMovie;
