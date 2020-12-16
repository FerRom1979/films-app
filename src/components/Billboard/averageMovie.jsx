import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
  Typography,
} from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import BodyModal from "./bodyModal";
import usesStyles from "./style";

const AverageMovie = ({ averageMovie, infoMovie }) => {
  const classes = usesStyles();
  const [open, setOpen] = useState(false);
  const [movilModal, setMovilModal] = useState(infoMovie);
  const [modalStyle] = useState(getModalStyle);

  const openModal = (item) => {
    setMovilModal(item);
    handleOpen();
  };

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
        <BodyModal movilModal={movilModal} />
      </Grid>
    </div>
  );
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.typography}>
            Lo más visto del 2020 <MovieFilterIcon className={classes.icons} />
          </Typography>
        </Grid>
        {averageMovie &&
          averageMovie.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.cards}>
                <CardActionArea onClick={() => openModal(item)}>
                  <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </CardActionArea>
              </Card>
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
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default AverageMovie;
