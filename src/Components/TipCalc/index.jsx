import React from 'react';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/styles';
import { CardContent, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 1200,
        margin:"0 auto",
        borderRadius:"2rem"
    },
    smCard:{
        maxWidth: 1200,
        margin:"0 auto",
        borderRadius:"2rem 2rem 0 0"
    },
    container:{
        padding:"1rem"
    },
    inputSection:{
        textAlign:"center"
    },
    outputSection:{
        background:"#00464b",
        color:"#ffff",
        padding:"2rem 1rem"
    },
    OutputRightSection:{
        textAlign:"right"
    }
})

const TipCalc = (props) => {
    const classes = useStyles();
    return (
        <Card className={props.smView?classes.smCard:classes.card}>
            <CardContent>
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={12} md={6} className={classes.inputSection}>
                        Hello
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <Paper className={classes.outputSection}>
                        <Grid container>
                        <Grid item xs={6} style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
                           <div>
                               <p style={{margin:"0"}}>Tip Amount</p>
                               <p style={{margin:"5px 0 0 0", fontWeight:100,fontSize:"12px"}}><span style={{marginRight:"6px"}}>/</span> Person</p>
                           </div>
                        </Grid>
                        <Grid item xs={6} className={classes.OutputRightSection}>
                            <h2 id="TipAmount">$0.00</h2>
                        </Grid>
                        </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TipCalc;