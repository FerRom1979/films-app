import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import usesStyles from "./style";

const SearchMovie = ({ callback, apiError }) => {
  const classes = usesStyles();
  const [nameMovie, setNameMovie] = useState("");
  const [checked, setChecked] = useState(false);

  /* get name movie*/
  const getMovie = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(nameMovie, checked);
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
            <Button type="submit" onClick={() => setChecked(true)}>
              <SearchIcon className={classes.icons} />
            </Button>
          </form>
        </Grid>
      </Grid>
      <div>
        {apiError && (
          <span
            className={classes.spanError}
          >{`No se han en contrado resultados para " ${nameMovie} "`}</span>
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
