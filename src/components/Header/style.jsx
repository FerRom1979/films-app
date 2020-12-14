import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#2c3872",
  },
  gridHeader: {
    dixplax: "flex",
  },
  typography: {
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 70,
    },
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconVideo: {
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 70,
    },
    marginLeft: 10,
  },
}));
export default usesStyles;
