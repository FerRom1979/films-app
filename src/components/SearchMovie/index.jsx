import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import usesStyles from "./style";

const SearchMovie = ({ callback, apiError }) => {
  const classes = usesStyles();
  const [nameMovie, setNameMovie] = useState("");

  /* get name movie*/
  const getMovie = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(nameMovie);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.search}>
          <form onSubmit={getMovie}>
            <TextField
              label="Busca tu Peli"
              onChange={(e) => setNameMovie(e.target.value)}
            />
            <Button type="submit">
              <LocalMoviesIcon className={classes.icons} />
            </Button>
          </form>
        </Grid>
      </Grid>
      <div>
        {apiError !== false ? (
          <span className={classes.spanError}>este es un error</span>
        ) : (
          console.log("falso")
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
