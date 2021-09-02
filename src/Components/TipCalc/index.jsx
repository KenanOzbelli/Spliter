import React from 'react';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/styles';
import { CardContent, Grid, Paper, Button, InputBase } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 1000,
        margin: "0 auto",
        borderRadius: "2rem"
    },
    smCard: {
        margin: "0 auto",
        borderRadius: "2rem 2rem 0 0"
    },
    container: {
        padding: "1rem"
    },
    inputSection: {
        textAlign: "left",
        padding:"0 1rem"
    },
    outputSection: {
        background: "#00464b",
        padding: "2rem 1.5rem",
        color: "#FFFF",
        borderRadius: "1rem",
    },
    OutputRightSection: {
        textAlign: "right",
        color: "#26c2ad"
    },
    textTitle:{
        margin: "0",
        fontSize:"13.5px",
        fontWeight:"bold" 
    },
    textSubTitle:{
        margin: "5px 0 0 0", 
        fontWeight: 500, 
        fontSize: "12px",
        color:"#4f8285"
    },
    button:{
        width:"100%",
        color: "#00464b",
        fontWeight:"bold",
        background:"#26c1ad",
        '&:hover':{
            background:"#9fe8df"
        }
    },
    textField:{
        width:"100%",
        padding:"0px !important",
        color:"#17494f",
        fontSize:"20px",
        fontWeight:"bold",
    }
})

const TipCalc = (props) => {
    const classes = useStyles();
    return (
        <Card className={props.smView ? classes.smCard : classes.card}>
            <CardContent>
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={12} md={6} className={classes.inputSection} style={props.smView? {padding:"0"}: null}>
                        <Grid>
                            <h3 style={{color:"#9c9c9b", margin:"0"}}>Bill</h3>
                        </Grid>
                        <Grid>
                            <Paper style={{marginBottom:"1rem"}}>
                            <InputBase
                                id="BillAmount"
                                type="number"
                                variant="filled"
                                placeholder="142.55"
                                className={classes.textField}
                            />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={classes.outputSection}>
                            <Grid container>
                                <Grid item xs={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div>
                                        <p className={classes.textTitle}>Tip Amount</p>
                                        <p className={classes.textSubTitle}><span style={{ marginRight: "6px" }}>/</span> Person</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} className={classes.OutputRightSection}>
                                    <h2 id="TipAmount">$0.00</h2>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div>
                                        <p className={classes.textTitle}>Total</p>
                                        <p className={classes.textSubTitle}><span style={{ marginRight: "6px" }}>/</span> Person</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} className={classes.OutputRightSection}>
                                    <h2 id="TotalAmount">$0.00</h2>
                                </Grid>
                            </Grid>
                            <Button size="large" style={props.smView? null: {marginTop:"5rem"}} className={classes.button}>Reset</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TipCalc;