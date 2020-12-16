import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Modal,
} from "@material-ui/core";
import BodyModal from "./bodyModal";
import usesStyles from "./style";

const SearchMovie = ({ infoMovie, averaSearch, nameMovie }) => {
  const classes = usesStyles();
  const [movilModal, setMovilModal] = useState(infoMovie);
  const [open, setOpen] = useState(false);
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
      <Grid container spacing={3}>
        {infoMovie &&
          infoMovie.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Card className={classes.cards}>
                <CardActionArea onClick={() => openModal(item)}>
                  <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </CardActionArea>
                <CardActions className={classes.cardAction}></CardActions>
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

export default SearchMovie;
