import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles((theme) => ({
  icons: {
    fontSize: 30,
  },

  typography: {
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
      marginLeft: 20,
      textAlign: "left",
    },

    fontWeight: "bold",
    color: "white",
  },
  cards: {
    margin: "auto",
    maxWidth: 400,
    minHeight: 550,
    maxHeight: 550,
  },

  media: {
    height: 550,
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
}));
export default usesStyles;
