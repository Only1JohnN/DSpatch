import { makeStyles } from "@mui/styles";

export default makeStyles( (theme) => ({
  wrapper: {
    // width: '100%',
    // marginTop: '25px',
  },

  jumbotron: {
    backgroundColor: '#092C4C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    // '@media (min-width: 375px) and (max-width: 600px)': {
    //   height: '100vh',
    // }
  },

  phoneMockup: {
    height: '100%',
    width: '100%',
  },

  miniJumbo: {
    backgroundImage: 'url("https://media.istockphoto.com/id/492489876/photo/manhattan-from-the-roof-top.jpg?s=612x612&w=0&k=20&c=HI4x4RHskzeV-5DFkyNU98Z8QTukwe5n4PQ185NJJOI=")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },

  store: {
    '@media (max-width: 600px)': {
      width: '35%',
    }
  },

  placeholders: {
    width: '100%',
    backgroundColor: '#BDBDBD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  }
}));