import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
  },
  icons: {
    fontSize: 30,
  },
  typography: {
    marginLeft: 20,
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    borderBottom: "black",
    color: "white",
  },
  cards: {
    margin: "auto",
    maxWidth: 400,
    minHeight: 600,
    maxHeight: 600,
  },
  cardMain: {
    textAlign: "center",
    maxWidth: 600,
    minHeight: 600,
    maxHeight: 600,
    margin: "auto",
  },
  media: {
    height: 550,
  },
  mediaModal: {
    height: 300,
  },
  mediaSearch: {
    height: 300,
  },
  spanMain: {
    fontSize: 18,
    color: "#b2102f",
  },
  spanSection: {
    padding: 1,
    fontSize: 14,
    color: "#ff6333",
  },
  infoCard: {
    dispaly: "flex",
    justifyContent: "center",
    justifyItems: "center",
    justifySelf: "center",
    alignItems: "baseline",
  },
  buttongroup: {
    paddingRight: 20,
  },
  iconsStart: {
    color: "#ffef62",
    fontSize: 30,
  },
  title: {
    fontWeight: "bold",
    color: "green",
  },
  noRank: {
    textAlign: "center",
    width: "100vh",
    height: "100vh",
    color: "#ba000d",
    fontSize: 30,
  },
  average: {
    display: "flex",
  },
  gridNorank: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default usesStyles;
