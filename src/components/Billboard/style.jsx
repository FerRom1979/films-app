import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles((theme) => ({
  gridNorank: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchStart: {
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      marginLeft: 20,
      textAlign: "center",
    },
  },

  gridNoStart: {
    margin: "auto",
    textAlign: "center",
    width: "100%",
    height: "100vh",
  },

  noStart: {
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
    },
    color: "#ba000d",
  },
}));
export default usesStyles;
