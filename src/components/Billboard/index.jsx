import React, { useState, useEffect } from "react";
import { Grid, Typography, ButtonGroup, Button } from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarIcon from "@material-ui/icons/Star";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import usesStyles from "./style";
import MoviePopular from "./moviePopular";
import SearchMovie from "./searchMovie";
import AverageMovie from "./averageMovie";

const Billboard = ({ moviePopular, infoMovie, nameMovie }) => {
  const classes = usesStyles();
  const [averageMovie, setAverageMovie] = useState(moviePopular);
  const [averaSearch, setAveraSearch] = useState(infoMovie);
  const [startNumber, setStartNumber] = useState(10);
  const [movilModal] = useState(infoMovie);

  const average = async () => {
    if (moviePopular) {
      const Movie = await moviePopular.filter((item) => {
        return item.vote_average <= startNumber;
      });
      setAverageMovie(Movie);
    }
    if (infoMovie) {
      const Movie = await infoMovie.filter((item) => {
        return item.vote_average <= startNumber;
      });
      setAveraSearch(Movie);
    }
  };
  useEffect(() => {
    average();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startNumber]);
  console.log(nameMovie);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Typography className={classes.searchStart}>
            Buscar por <StarIcon className={classes.iconsStart} />
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} className={classes.gridNorank}>
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
        {infoMovie && (
          <Grid item sm={12}>
            <Button
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={() => (window.location.href = "/")}
            >
              volver
            </Button>
            {infoMovie &&
              (nameMovie === nameMovie ? (
                <SearchMovie
                  averaSearch={averaSearch}
                  movilModal={movilModal}
                  infoMovie={averaSearch}
                />
              ) : (
                <SearchMovie
                  averaSearch={averaSearch}
                  movilModal={movilModal}
                  infoMovie={infoMovie}
                />
              ))}
          </Grid>
        )}
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.typography}>
            Lo más visto del 2020 <MovieFilterIcon className={classes.icons} />
          </Typography>
        </Grid>

        {averageMovie ? (
          averageMovie === undefined || averageMovie.length === 0 ? (
            <Grid item sm={12} className={classes.gridNoStart}>
              <Typography className={classes.noStart}>
                no se encuentra peliculas con ese rango de calificacion
              </Typography>
            </Grid>
          ) : (
            <Grid item sm={12}>
              <AverageMovie
                averageMovie={averageMovie}
                movilModal={movilModal}
                infoMovie={infoMovie}
              />
            </Grid>
          )
        ) : (
          moviePopular && (
            <Grid item sm={12}>
              <MoviePopular
                moviePopular={moviePopular}
                movilModal={movilModal}
                infoMovie={infoMovie}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};

export default Billboard;
