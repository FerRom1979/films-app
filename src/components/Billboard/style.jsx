import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles(() => ({
  root: {
    paddingTop: 10,
  },
  icons: {
    fontSize: 30,
  },
  typography: {
    textAlign: "left",
    fontWeight: "bold",
    borderBottom: "black",
  },
  cards: {
    margin: "auto",
    maxWidth: 400,
    minHeight: 500,
    maxHeight: 500,
  },
  cardMain: {
    textAlign: "center",
    maxWidth: 600,
    minHeight: 400,
    maxHeight: 500,
    margin: "auto",
  },
  media: {
    height: 150,
  },
  spanMain: {
    padding: 10,
    color: "#b2102f",
  },
  spanSection: {
    padding: 1,
    fontSize: 14,
    color: "#ff6333",
  },
  iconsStart: {
    color: "#ffef62",
    fontSize: 30,
  },
  title: {
    fontWeight: "bold",
    color: "green",
  },
}));
export default usesStyles;
