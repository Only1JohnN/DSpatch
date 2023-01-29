import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  wrapper: {
    // backgroundImage:
    //   'url("C:UsersHPDocumentsGitHubDspatchDSpatchsrcassetssvgs\bg_first_section.svg")',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100% 100%",
    // width: '100%',
    // marginTop: '25px',
  },

  jumbotron: {
    backgroundColor: "#092C4C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // '@media (min-width: 375px) and (max-width: 600px)': {
    //   height: '100vh',
    // }
  },

  phoneMockup: {
    height: "100%",
    width: "100%",
  },

  miniJumbo: {
    backgroundImage: 'url("../../assets/svgs/bg_first_section.svg")',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100% 100%",
  },

  store: {
    "@media (max-width: 600px)": {
      width: "35%",
    },
  },

  placeholders: {
    width: "100%",
    minHeight: "380px",
    backgroundColor: "#BDBDBD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },

  miniplaceholders: {
    width: "265px",
    minHeight: "380px",
    backgroundColor: "#BDBDBD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
}));
