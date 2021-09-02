import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '../Icon';
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
        padding: "0 1rem"
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
    textTitle: {
        margin: "0",
        fontSize: "13.5px",
        fontWeight: "bold"
    },
    textSubTitle: {
        margin: "5px 0 0 0",
        fontWeight: 500,
        fontSize: "12px",
        color: "#4f8285"
    },
    button: {
        width: "100%",
        color: "#00464b",
        fontWeight: "bold",
        background: "#26c1ad",
        '&:hover': {
            background: "#9fe8df"
        }
    },
    textField: {
        width: "100%",
        color: "#17494f",
        fontSize: "20px",
        fontWeight: "bold",
        '&:focus': {
            borderColor: "1px solid #9fe8df",
            boxShadow: "#9fe8df 0 0 0 0.2rem"
        }
    },
    Input: {
        fontWeight: "bold !important",
        padding: ".61rem !important",
        fontSize: "1.5rem",
        color: "#17494f",
        width:"100% !important",
        '&:focus': {
            borderColor: "1px solid #9fe8df",
            boxShadow: "#9fe8df 0 0 0 0.2rem"
        }
    },
    tipButtons: {
        background: "#00464b",
        color: "#ffff",
        width: "100%",
        '&:hover': {
            color: "#00464b",
            background: "#26c1ad",
        }
    },
    buttonContainer: {
        margin: "10px 0"
    }
})

const TipCalc = (props) => {
    const classes = useStyles();
    return (
        <Card className={(props.smView ? classes.smCard : classes.card)}>
            <CardContent>
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={12} md={6} className={classes.inputSection} style={props.smView ? { padding: "0" } : null}>
                        <Grid>
                            <h3 style={{ color: "#9c9c9b", margin: "0" }}>Bill</h3>
                        </Grid>
                        <Grid>
                            <Paper style={{ marginBottom: "1rem", position: "relative" }}>
                                <InputBase
                                    className={classes.textField}
                                    id="BillAmount"
                                    type="number"
                                    variant="filled"
                                    placeholder="142.55"
                                    inputProps={{ min: 0, className: classes.textField }}
                                    pattern="[0-9]*"
                                />
                                <span style={{ position: "absolute", top: "0", left: "12px", bottom: "0", display: "flex", alignItems: "center" }}>
                                    <Icon />
                                </span>
                            </Paper>
                        </Grid>
                        <Grid>
                            <h3 style={{ color: "#9c9c9b", margin: "1rem 0 .3rem 0" }}>Select a Tip %</h3>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button size="medium" className={classes.tipButtons} value={.10}>
                                            <h2 style={{ margin: "0 auto" }}>10%</h2>
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button size="medium" className={classes.tipButtons} value={.15}>
                                            <h2 style={{ margin: "0 auto" }}>15%</h2>
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button size="medium" className={classes.tipButtons} value={.2}>
                                            <h2 style={{ margin: "0 auto" }}>20%</h2>
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button size="medium" className={classes.tipButtons} value={.25}>
                                            <h2 style={{ margin: "0 auto" }}>25%</h2>
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button size="medium" className={classes.tipButtons} value={.5}>
                                            <h2 style={{ margin: "0 auto" }}>50%</h2>
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer} style={{width:"100%"}}>
                                        <InputBase type="number" inputProps={{ className: classes.Input }}
                                            placeholder="Custom"  pattern="[0-9]*"
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid>
                            <h3 style={{ color: "#9c9c9b", margin: "2rem 0 2px 0" }}>Number of People</h3>
                            <Paper style={{ marginBottom: "1rem", position: "relative" }}>
                                <InputBase
                                    className={classes.textField}
                                    id="numberPeople"
                                    type="number"
                                    variant="filled"
                                    placeholder="0"
                                    inputProps={{ min: 0, className: classes.textField }}
                                    pattern="[0-9]*"
                                />
                                <span style={{ position: "absolute", top: "0", left: "12px", bottom: "0", display: "flex", alignItems: "center" }}>
                                    <Icon />
                                </span>
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
                            <Button size="large" style={props.smView ? { marginTop: "2rem" } : { marginTop: "10rem" }} className={classes.button}>Reset</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TipCalc;