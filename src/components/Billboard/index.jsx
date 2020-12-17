import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Container } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import usesStyles from "./style";
import MoviePopular from "../MoviePopular/index";
import SearchMovie from "../MovieFinder/index";
import AverageMovie from "../AverageMovie/index";
import ReactStars from "react-stars";

const Billboard = ({ moviePopular, infoMovie, nameMovie, newNameMovie }) => {
  const classes = usesStyles();

  const [averageMovie, setAverageMovie] = useState(moviePopular);
  const [averaSearch, setAveraSearch] = useState(infoMovie);
  const [startNumber, setStartNumber] = useState(10);
  const [movilModal] = useState(infoMovie);
  const ratingChanged = (newRating) => {
    setStartNumber(newRating * 2);
  };
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

  return (
    <div>
      <Container maxWidth="xl">
        {/* *********botones filtro estrellas*************** */}

        <Grid item sm={12} className={classes.gridNorank}>
          <Typography className={classes.searchStart}>Filtrar</Typography>

          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={28}
            color2={"#ffd700"}
          />
        </Grid>
        {/* ********* resultados de peliculas seleccionadas******* */}
        {infoMovie && (
          <Grid item sm={12}>
            <Button
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={() => (window.location.href = "/")}
            >
              volver
            </Button>
            {infoMovie && (
              <Grid item sm={12}>
                <SearchMovie
                  infoMovie={averaSearch}
                  movilModal={movilModal}
                  averaSearch={averaSearch}
                  nameMovie={nameMovie}
                />
              </Grid>
            )}
          </Grid>
        )}
        {/****************peliculas populares************** */}

        {averageMovie && infoMovie === undefined ? (
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
          infoMovie === undefined &&
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
      </Container>
    </div>
  );
};

export default Billboard;
