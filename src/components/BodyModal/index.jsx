import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
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

const BodyModal = ({ movilModal }) => {
  const classes = usesStyles();
  return (
    <div>
      <Card className={classes.cardMain}>
        <CardActionArea>
          <CardMedia
            className={classes.mediaModal}
            image={`https://image.tmdb.org/t/p/w500${movilModal.backdrop_path}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {movilModal.original_title}
            </Typography>
            <Typography variant="body2" component="p">
              {movilModal.overview}
            </Typography>
            <Grid item sm={12}>
              <Typography gutterBottom variant="h6">
                <span className={classes.spanMain}>
                  Estreno: {movilModal.release_date}
                </span>{" "}
              </Typography>
            </Grid>
            <Grid container className={classes.infoCard}>
              <Grid item sm={4}>
                <Typography gutterBottom variant="h6">
                  <span className={classes.spanMain}>
                    Idioma:{" "}
                    {movilModal.original_language === "en"
                      ? "ingles"
                      : "español"}
                  </span>{" "}
                </Typography>
              </Grid>

              <Grid item sm={4}>
                <Typography gutterBottom variant="h6">
                  <span className={classes.spanMain}>
                    {Math.round(movilModal.vote_average / 2)}
                    <StarIcon className={classes.iconsStart} />
                  </span>
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography gutterBottom variant="h6">
                  <span className={classes.spanMain}>
                    {movilModal.popularity}
                    <VisibilityIcon className={classes.iconsEye} />{" "}
                  </span>{" "}
                </Typography>
              </Grid>
              <Grid item sm={12}>
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
    </div>
  );
};

export default BodyModal;
