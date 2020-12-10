import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: "#3f51b5",
  },
  typography: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
  },
}));
export default usesStyles;
