import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
  },
  icons: {
    fontSize: 50,
  },
  iconsAdd: {
    fontSize: 40,
  },
  search: {
    maxWidth: 500,
    maxHeight: 200,
    margin: "auto",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 70,
  },
  spanError: {
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
    },
    color: "#b22a00",
  },
}));
export default usesStyles;
