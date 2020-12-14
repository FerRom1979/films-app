import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import usesStyles from "./style";
import StarIcon from "@material-ui/icons/Star";

const SearchMovie = ({ infoMovie, movilModal }) => {
  const classes = usesStyles();
  return (
    <div>
      <Grid item xs={12}>
        <Card className={classes.cardMain}>
          <CardActionArea>
            <CardMedia
              className={classes.mediaSearch}
              image={`https://image.tmdb.org/t/p/w200${infoMovie.backdropPath}`}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {infoMovie.originaTitle}
              </Typography>
              <Typography variant="body2" component="p">
                {infoMovie.overview}
              </Typography>
              <Grid container className={classes.infoCard}>
                <Grid item sm={4} xs={6}>
                  <Typography gutterBottom variant="h6">
                    <span className={classes.spanMain}>
                      Idioma: {movilModal.original_language}
                    </span>{" "}
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={6}>
                  <Typography gutterBottom variant="h6">
                    <span className={classes.spanMain}>
                      Estreno: {movilModal.release_date}
                    </span>{" "}
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={6}>
                  <Typography gutterBottom variant="h6">
                    <span className={classes.spanMain}>
                      {movilModal.vote_average}
                      <StarIcon className={classes.iconsStart} />
                    </span>
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <Typography gutterBottom variant="h6">
                    <span className={classes.spanMain}>
                      Vistas: {movilModal.popularity}
                    </span>{" "}
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <Typography gutterBottom variant="h6">
                    <span className={classes.spanMain}>
                      {movilModal.popularity === false
                        ? "solo para mayores"
                        : "apto todo publico"}
                    </span>{" "}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
};

export default SearchMovie;
