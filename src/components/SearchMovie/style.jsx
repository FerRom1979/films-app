import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles(() => ({
  root: {
    paddingTop: 10,
  },
  icons: {
    fontSize: 50,
  },
  search: {
    maxWidth: 300,
    maxHeight: 200,
    margin: "auto",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 70,
  },
  spanError: {
    fontSize: 30,
    color: "#b22a00",
  },
}));
export default usesStyles;
