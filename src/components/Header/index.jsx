import React from "react";
import { Typography, Grid } from "@material-ui/core";
import MissedVideoCallIcon from "@material-ui/icons/MissedVideoCall";
import usesStyles from "./style";

const Header = () => {
  const classes = usesStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.gridheader}>
          <Typography
            variant="h3"
            component="h4"
            className={classes.typography}
          >
            El cine de tu Barrio
            <MissedVideoCallIcon className={classes.iconVideo} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
