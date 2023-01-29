import { makeStyles } from "@mui/styles";
import { Banner } from "../../assets";

export default makeStyles((theme) => ({
  wrapper: {
    // width: '100%',
    // marginTop: '25px',
  },

  jumbotron: {
    backgroundColor: "#092C4C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  miniJumbo: {
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },

  store: {
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
}));
