import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  ButtonGroup,
  Button,
  CardActions,
} from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarIcon from "@material-ui/icons/Star";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import usesStyles from "./style";
import Loading from "../Skeleton/index";
import SearchMovie from "./searchMovie";

const Billboard = ({ moviePopular, infoMovie, nameMovie }) => {
  const classes = usesStyles();
  const [averageMovie, setAverageMovie] = useState(moviePopular);
  const [startNumber, setStartNumber] = useState(10);
  const [movilModal, setMovilModal] = useState(infoMovie);

  const average = async () => {
    if (moviePopular) {
      const Movie = await moviePopular.filter((item) => {
        return item.vote_average <= startNumber;
      });
      setAverageMovie(Movie);
    }
  };
  useEffect(() => {
    average();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startNumber]);

  const openModal = (item) => {
    setMovilModal(item);
  };
  return (
    <div>
      <Grid container spacing={3}>
        {infoMovie && (
          <Grid item sm={12}>
            <Button
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={() => console.log("funciona")}
            >
              volver
            </Button>
            <SearchMovie infoMovie={infoMovie} movilModal={movilModal} />
          </Grid>
        )}
        <Grid item sm={12} md={4}>
          <Typography variant="h5" className={classes.typography}>
            Lo más visto del 2020 <MovieFilterIcon className={classes.icons} />
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography className={classes.searchStart}>
            Buscar por <StarIcon className={classes.iconsStart} />
          </Typography>
        </Grid>
        <Grid item sm={12} md={4} className={classes.gridNorank}>
          <ButtonGroup
            size="small"
            aria-label="small outlined button group"
            color="secondary"
            className={classes.buttongroup}
          >
            <Button onClick={() => setStartNumber(2)}>UNO</Button>
            <Button onClick={() => setStartNumber(4)}>DOS</Button>
            <Button onClick={() => setStartNumber(6)}>TRES</Button>
            <Button onClick={() => setStartNumber(8)}>CUATRO</Button>
            <Button onClick={() => setStartNumber(10)}>CINCO</Button>
          </ButtonGroup>
        </Grid>
        {averageMovie ? (
          averageMovie === undefined || averageMovie.length === 0 ? (
            <Grid item sm={12} className={classes.gridNoStart}>
              <Typography className={classes.noStart}>
                no se encuentra peliculas con ese rango de calificacion
              </Typography>
            </Grid>
          ) : (
            averageMovie.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.cards}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                  </CardActionArea>
                  <CardActions className={classes.cardAction}>
                    <div>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => openModal(item)}
                      >
                        ver más
                      </Button>
                    </div>
                    <div>
                      <span className={classes.spanSection}>
                        <StarIcon className={classes.iconsStart} />
                        {item.vote_average}
                      </span>
                    </div>
                    <div>
                      {/* <ModalComponent movilModal={movilModal} /> */}
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )
        ) : (
          moviePopular &&
          moviePopular.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {item ? (
                <Card className={classes.cards}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    />
                  </CardActionArea>
                  <CardActions className={classes.cardAction}>
                    <div>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => openModal(item)}
                      >
                        ver más
                      </Button>
                    </div>
                    <div>
                      <span className={classes.spanSection}>
                        <StarIcon className={classes.iconsStart} />
                        {item.vote_average}
                      </span>
                    </div>
                    <div>
                      {/* <ModalComponent movilModal={movilModal} /> */}
                    </div>
                  </CardActions>
                </Card>
              ) : (
                <Loading />
              )}
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Billboard;
