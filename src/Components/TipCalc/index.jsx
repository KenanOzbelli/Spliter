import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import IconDollar from '../Icon/IconDollar';
import IconPerson from '../Icon/IconPerson';
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
            boxShadow: "#9fe8df 0 0 0 0.2rem",
            borderRadius: ".2rem"
        },
        '&:active': {
            boxShadow: "#9fe8df 0 0 0 0.2rem",
            borderRadius: ".2rem"
        }
    },
    customInput: {
        fontWeight: "bold !important",
        padding: ".61rem !important",
        fontSize: "1.5rem",
        color: "#17494f",
        width: "100% !important",
        '&:focus': {
            boxShadow: "#9fe8df 0 0 0 0.2rem",
            borderRadius: ".2rem"
        },
        '&:active': {
            boxShadow: "#9fe8df 0 0 0 0.2rem",
            borderRadius: ".2rem"
        }
    },
    tipButtons: {
        background: "#00464b",
        color: "#ffff",
        width: "100%",
        fontSize:"1.3em",
        '&:hover': {
            color: "#00464b",
            background: "#26c1ad",
        }
    },
    buttonContainer: {
        margin: "10px 0"
    },
    error:{
        width: "100%",
        color: "#17494f",
        fontSize: "20px",
        fontWeight: "bold",
        boxShadow: "#ffb7a6 0 0 0 0.2rem",
        borderRadius: ".2rem"
    }
})

const TipCalc = (props) => {
    const classes = useStyles();
    const [BillAmount, SetBillAmount] = useState("");
    const [BillError, SetBillError] = useState(false);
    const [CustomTip, SetCustomTip] = useState("");
    const [Tip, SetTip] = useState("");
    const [numberPeople, SetNumberPeople] = useState("");
    const [numberPeopleError, SetNumberPeopleError] = useState(false);
    const [tipAmount, SetTipAmount] = useState("0.00");
    const [totalAmount, SetTotalAmount] = useState("0.00");

    const handleChange = (event) => {
        const { name, value } = event.target;

        const checkValue = (value) => {
            if (value > 0 && value !== "[^0-9]") {
                return true
            } else {
                return false
            }
        }

        switch (name) {
            case "BillAmount":
                if (checkValue(value)) {
                    SetBillAmount(value)
                    SetBillError(false)
                } else {
                    SetBillAmount("")
                    SetBillError(true)
                    SetTotalAmount("0.00")
                    SetTipAmount("0.00")
                }
                break;
            case "customTip":
                document.querySelectorAll(".TipButtonBackground").forEach(button => {button.style =""})
                if (checkValue(value)) {
                    SetCustomTip(value)
                    SetTip("");
                } else {
                    SetCustomTip("")
                    SetTip("")
                }
                break;
            case "numberPeople":
                if (checkValue(value) && value % 1 === 0 ) {
                    SetNumberPeople(value)
                    SetNumberPeopleError(false)
                } else {
                    SetNumberPeople("")
                    SetNumberPeopleError(true)
                    SetTotalAmount("0.00")
                    SetTipAmount("0.00")
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (numberPeople >= 1 ||  BillAmount >= 1) {
            const timeoutId = setTimeout(() => { calcAmount() }, 500);
            return () => clearTimeout(timeoutId);
        }
    });

    const setTipAmount = (amount) => {
        document.querySelectorAll(".TipButtonBackground").forEach(button => {button.style =""})
        document.querySelector(`#TipButton${amount}`).style="color:#00464b; background:#26c1ad;";
        SetTip(amount)
        SetCustomTip("")
    }

    const calcAmount = () => {
        BillAmount<= 0?SetBillError(true):SetBillError(false)
        numberPeople<= 0?SetNumberPeopleError(true):SetNumberPeopleError(false);

        if(BillAmount >= 1 && numberPeople >= 1){
            if(Tip >= 1){
               let tipVal = (JSON.parse(BillAmount) * (JSON.parse(Tip) / 100));

               SetTipAmount((tipVal / JSON.parse(numberPeople)).toFixed(2))
               SetTotalAmount(((tipVal + JSON.parse(BillAmount)) / JSON.parse(numberPeople)).toFixed(2))
            }else if(CustomTip >=1){
                let tipVal = (JSON.parse(BillAmount) * (JSON.parse(CustomTip) / 100));

                SetTipAmount((tipVal / JSON.parse(numberPeople)).toFixed(2))
                SetTotalAmount(((tipVal + JSON.parse(BillAmount)) / JSON.parse(numberPeople)).toFixed(2))
            }else{
                SetTotalAmount((JSON.parse(BillAmount) / JSON.parse(numberPeople)).toFixed(2))
         
                SetTipAmount("0.00")
            }
        }

    }

    const resetCalc = () => {
        SetBillAmount("");
        SetBillError(false);
        SetCustomTip("");
        SetTip("");
        SetNumberPeople("")
        SetNumberPeopleError(false);
        SetTipAmount("0.00");
        SetTotalAmount("0.00");
        document.querySelectorAll(".TipButtonBackground").forEach(button => {button.style =""})
    }

    return (
        <Card className={props.smView ? classes.smCard : classes.card}>
            <CardContent>
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={12} md={6} className={classes.inputSection} style={props.smView ? { padding: "0" } : null}>
                    <Grid style={{ position: "relative", margin:"0" }}>
                        <h4 style={{ color: "#9c9c9b", margin: " 0 0 5px 0", }}>Bill</h4>
                        <h4 style={{ color: "#ffb7a6", margin: "0", position: "absolute", top: "0", right: "0", display:`${BillError? "Block": "None"}` }}>Can't Be Zero</h4>
                    </Grid>
                        <Grid>
                            <Paper style={{marginBottom: "1rem", position: "relative"}}>
                                <InputBase
                                    className={`${BillError? classes.error : classes.textField }`}
                                    type="number"
                                    name="BillAmount"
                                    value={BillAmount}
                                    onChange={handleChange}
                                    variant="filled"
                                    placeholder="0"
                                    pattern="[0-9]*"
                                    inputProps={{ min: 0, className: `${BillError? classes.error : classes.textField}` }}
                                />
                                <span style={{ position: "absolute", top: "0", left: "12px", bottom: "0", display: "flex", alignItems: "center" }}>
                                    <IconDollar />
                                </span>
                            </Paper>
                        </Grid>
                        <Grid>
                            <h3 style={{ color: "#9c9c9b", margin: "1rem 0 .3rem 0" }}>Select Tip %</h3>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button id="TipButton10" size="medium" className={`${classes.tipButtons} TipButtonBackground`} onClick={() => setTipAmount(10)}>
                                           10%
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button id="TipButton15" size="medium" className={`${classes.tipButtons} TipButtonBackground`} onClick={() => {setTipAmount(15)}}>
                                            15%
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button id="TipButton20" size="medium" className={`${classes.tipButtons} TipButtonBackground`} onClick={() => {setTipAmount(20)}}>
                                            20%
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button id="TipButton25" size="medium" className={`${classes.tipButtons} TipButtonBackground`} onClick={() => {setTipAmount(25)}}>
                                            25%
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer}>
                                        <Button id="TipButton50" size="medium" className={`${classes.tipButtons} TipButtonBackground`} onClick={() => {setTipAmount(50)}}>
                                            50%
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4} style={{ margin: "0 auto" }}>
                                    <div className={classes.buttonContainer} style={{ width: "100%" }}>
                                        <InputBase id="customTip" type="number" inputProps={{ className: classes.customInput }}
                                            placeholder="Custom" pattern="[0-9]*" name="customTip" onChange={handleChange} value={CustomTip}
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid style={{ position: "relative" }}>
                            <h5 style={{ color: "#9c9c9b", margin: "2rem 0 2px 0" }}>Number of People</h5>
                            <h5 style={{ color: "#ffb7a6", margin: "0", position: "absolute", top: "0", right: "0", display:`${numberPeopleError? "Block": "None"}` }}>Can't Be Zero</h5>
                            <Paper style={{ marginBottom: "1rem", position: "relative" }}>
                                <InputBase
                                    className= {`${numberPeopleError? classes.error : classes.textField }`}
                                    id="numberPeople"
                                    type="number"
                                    name="numberPeople"
                                    variant="filled"
                                    placeholder="0"
                                    inputProps={{ min: 0, className: `${numberPeopleError? classes.error : classes.textField }`}}
                                    pattern="[0-9]*"
                                    onChange={handleChange}
                                    value={numberPeople}
                                />
                                <span style={{ position: "absolute", top: "0", left: "12px", bottom: "0", display: "flex", alignItems: "center" }}>
                                    <IconPerson />
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
                                    <h2 id="TipAmount">${tipAmount}</h2>
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
                                    <h2 id="TotalAmount">${totalAmount}</h2>
                                </Grid>
                            </Grid>
                            <Button size="large" style={props.smView ? { marginTop: "2rem" } : { marginTop: "10rem" }} className={classes.button} onClick={() => {resetCalc()}}>Reset</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TipCalc;