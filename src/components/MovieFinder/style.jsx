import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles((theme) => ({
  cards: {
    margin: "auto",
    maxWidth: 400,
    minHeight: 550,
    maxHeight: 550,
  },
  media: {
    height: 550,
  },
  paper: {
    position: "absolute",
    width: 550,
    height: 550,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: "10px 5px 5px black",
    padding: theme.spacing(1, 1, 13),
  },
  cardAction: {
    textAlign: "center",
  },
}));
export default usesStyles;
