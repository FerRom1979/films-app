import { makeStyles } from "@material-ui/core/styles";
const usesStyles = makeStyles((theme) => ({
  cardMain: {
    textAlign: "center",
    maxWidth: 650,
    minHeight: 650,
    maxHeight: 650,
    margin: "auto",
  },

  mediaModal: {
    height: 300,
  },

  spanMain: {
    fontSize: 18,
    color: "#b2102f",
  },

  iconsStart: {
    color: "#ffef62",
    fontSize: 30,
  },
  iconsEye: {
    color: "#757de8",
    fontSize: 30,
  },
  title: {
    fontWeight: "bold",
    color: "green",
  },
}));
export default usesStyles;
