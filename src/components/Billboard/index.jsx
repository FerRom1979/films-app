import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarIcon from "@material-ui/icons/Star";
import usesStyles from "./style";

const Billboard = ({ moviePopular, infoMovie, nameMovie }) => {
  const classes = usesStyles();

  return (
    <div>
      <Grid container spacing={3}>
        {infoMovie.originaTitle !== "" && (
          <Grid item xs={12}>
            <Card className={classes.cardMain}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
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
                  <Typography gutterBottom variant="h6">
                    <span className={classes.spanMain}>
                      Idioma: {infoMovie.originalLanguage}
                    </span>{" "}
                    <span className={classes.spanMain}>
                      Estreno: {infoMovie.releaseDate}
                    </span>{" "}
                    <span className={classes.spanMain}>
                      <StarIcon className={classes.iconsStart} />
                      {infoMovie.voteAverage}
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )}

        <Grid item xs={12}>
          <Typography variant="h5" className={classes.typography}>
            Lo Más Visto del 2020 <MovieFilterIcon className={classes.icons} />
          </Typography>
        </Grid>
        {moviePopular ? (
          moviePopular.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.cards}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.title}
                    >
                      {item.original_title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {item.overview}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                      <span className={classes.spanSection}>
                        Idioma: {item.original_language}
                      </span>{" "}
                      <span className={classes.spanSection}>
                        Estreno: {item.release_date}
                      </span>{" "}
                      <span className={classes.spanSection}>
                        <StarIcon className={classes.iconsStart} />
                        {item.vote_average}
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={3}>
            <h1>cargando....</h1>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Billboard;
