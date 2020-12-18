import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import usesStyles from "./style";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const SearchMovie = ({ callback, apiError }) => {
  const classes = usesStyles();
  const [nameMovie, setNameMovie] = useState("");
  const [page, setPage] = useState(1);

  /* get name movie*/
  const getMovie = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(nameMovie, page);
  };
  useEffect(() => {
    setPage(page);
  }, [page]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.search}>
          <form onSubmit={getMovie}>
            <TextField
              label="Busca tu Peli"
              onChange={(e) => setNameMovie(e.target.value)}
            />
            <Button type="submit">
              <SearchIcon className={classes.icons} />
            </Button>
            <Button type="submit" onClick={() => setPage(page + 1)}>
              <AddCircleOutlineIcon className={classes.iconsAdd} />
            </Button>
            <Button
              type="submit"
              onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))}
            >
              <RemoveCircleOutlineIcon className={classes.iconsAdd} />
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
