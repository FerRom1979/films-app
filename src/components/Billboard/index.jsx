import ReactStars from "react-stars";
import React, { useState, useEffect } from "react";
import { Grid, Typography, Container } from "@material-ui/core";

import usesStyles from "./style";
import MoviePopular from "../MoviePopular/index";
import SearchMovie from "../MovieFinder/index";
import AverageMovie from "../AverageMovie/index";

const Billboard = ({ moviePopular, infoMovie, nameMovie }) => {
  const classes = usesStyles();

  const [averageMovie, setAverageMovie] = useState(moviePopular);
  const [averageSearch, setAverageSearch] = useState(infoMovie);
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
      setAverageSearch(Movie);
    }
  };
  useEffect(() => {
    average();
    setAverageSearch(infoMovie);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startNumber, infoMovie]);

  return (
    <div>
      <Container maxWidth="xl">
        {/* *********botones filtro estrellas*************** */}

        <Grid item sm={12} className={classes.gridNorank}>
          <Typography className={classes.searchStart}>Filtrar</Typography>

          <ReactStars count={5} onChange={ratingChanged} size={24} />
        </Grid>
        {/* ********* resultados de peliculas seleccionadas******* */}
        {infoMovie ? (
          <Grid item sm={12}>
            <SearchMovie infoMovie={averageSearch} />
          </Grid>
        ) : averageMovie && infoMovie === null ? (
          <Grid item sm={12}>
            <AverageMovie
              averageMovie={averageMovie}
              movilModal={movilModal}
              infoMovie={infoMovie}
            />
          </Grid>
        ) : (
          infoMovie === null &&
          moviePopular && (
            <Grid item sm={12}>
              <MoviePopular moviePopular={moviePopular} />
            </Grid>
          )
        )}
      </Container>
    </div>
  );
};

export default Billboard;
