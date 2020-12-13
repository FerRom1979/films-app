import React from "react";
import { Card, CardActionArea, CardActions, Button } from "@material-ui/core";
import usesStyles from "./style";
import Skeleton from "react-loading-skeleton";
const Loading = () => {
  const classes = usesStyles();
  return (
    <div>
      <Card className={classes.cards}>
        <CardActionArea>
          <Skeleton variant="rect" className={classes.mediaModal} />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Skeleton />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Loading;
