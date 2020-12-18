import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import BodyModal from "../components/BodyModal";
import usesStyles from "../components/AverageMovie/style";
import { GetData } from "./getData";

export const Config = () => {
  const { infoMovie } = GetData();
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

  return {
    openModal,
    handleClose,
    body,
    open,
  };
};
