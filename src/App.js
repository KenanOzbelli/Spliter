import TipCalcCard from './Components/TipCalc';
import { makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  HeaderText: {
    textAlign: "center",
    color: "#00474b"
  },
  Container:{
    margin:"1rem"
  }
})

function App() {
  const mobile = useMediaQuery('(max-width:960px')
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.HeaderText}>SPLI<br />TER</h1>
      <div className={mobile?null:classes.Container}>
        <TipCalcCard smView={mobile}/>
      </div>
    </div>
  );
}

export default App;
