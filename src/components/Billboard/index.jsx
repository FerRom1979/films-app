import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  ButtonGroup,
  Button,
  CardActions,
  Modal,
} from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarIcon from "@material-ui/icons/Star";
import VisibilityIcon from "@material-ui/icons/Visibility";
import usesStyles from "./style";
import Loading from "../Skeleton/index";

const Billboard = ({ moviePopular, infoMovie, nameMovie }) => {
  const classes = usesStyles();
  const [averageMovie, setAverageMovie] = useState(moviePopular);
  const [startNumber, setStartNumber] = useState(10);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
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
  /* modal */
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  const handleOpen = () => {
    setOpen(true);
  };
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid item xs={12}>
        <Card className={classes.cardMain}>
          <CardActionArea>
            <CardMedia
              className={classes.mediaModal}
              image={`https://image.tmdb.org/t/p/w200${movilModal.backdrop_path}`}
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
              <Grid container /* className={classes.infoCard} */>
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
                      {movilModal.vote_average}
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
      </Grid>
    </div>
  );
  const openModal = (item) => {
    handleOpen();
    setMovilModal(item);
  };
  return (
    <div>
      <Grid container spacing={3}>
        {infoMovie.originaTitle !== "" && (
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
          <div>
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
          </div>
        </Grid>
        {averageMovie ? (
          (averageMovie === undefined || averageMovie.length === 0 ? (
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
                      image={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    />
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
                        <StarIcon className={classes.onsStart} />
                        {item.vote_average}
                      </span>
                    </div>
                    <div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        {body}
                      </Modal>
                    </div>
                  </CardActionArea>
                  <CardActions>
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
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        {body}
                      </Modal>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) /*: (
            <div>
              <h1>no hay</h1>
            </div>
          ) */)
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
                  <CardActions>
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
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        {body}
                      </Modal>
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
