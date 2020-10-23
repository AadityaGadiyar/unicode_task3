import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {BsGraphUp,BsGraphDown} from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import './World.css';
import WorldChart from './WorldChart';
import Table from './Table'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding:"10px",
    textAlign:"center"
  },
  control: {
    padding: theme.spacing(2),
  },
  icons:{
    fontWeight:1000,
    fontSize:'10rem',
    margin:'20px'
  }
}));

function World({data}) {

  const classes = useStyles();

  console.log(data);

  const active=Number(data.data.world_total.active_cases.replace(/,/g,""));
  const deaths=Number(data.data.world_total.total_deaths.replace(/,/g,""));
  const recovered=Number(data.data.world_total.total_recovered.replace(/,/g,""));

  console.log(active,deaths,recovered)
    
  return (
    <div style={{ paddingTop: "30px", backgroundColor: "#e4f9f5" }}>
      <Grid container justify="center" className={classes.root} spacing={0}>
        <Grid item xs={12} sm={4} spacing={3}>
          <Paper
            variant="outlined"
            className={`${classes.paper} active`}
            id="page"
          >
            <Typography
              variant="h4"
              style={{ color: "blue", fontWeight: 600, fontFamily: "Roboto" }}
            >
              ACTIVE
            </Typography>
            <Typography
              style={{ color: "blue", textAlign: "center", margin: "10px" }}
              variant="h2"
            >
              {active}
            </Typography>
            <BsGraphUp color="blue" className={classes.icons} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} spacing={3}>
          <Paper
            variant="outlined"
            className={`${classes.paper} deaths`}
            id="page"
          >
            <Typography
              variant="h4"
              style={{ color: "red", fontWeight: 600, fontFamily: "Roboto" }}
            >
              DEATHS
            </Typography>
            <Typography
              style={{ color: "red", textAlign: "center", margin: "10px" }}
              variant="h2"
            >
              {deaths}
            </Typography>
            <BsGraphDown color="red" className={classes.icons} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} spacing={3}>
          <Paper
            variant="outlined"
            className={`${classes.paper} recovered`}
            id="page"
          >
            <Typography
              variant="h4"
              style={{ color: "green", fontWeight: 600, fontFamily: "Roboto" }}
            >
              RECOVERED
            </Typography>
            <Typography
              style={{ color: "green", textAlign: "center", margin: "10px" }}
              variant="h2"
            >
              {recovered}
            </Typography>
            <GoGraph color="green" className={classes.icons} />
          </Paper>
        </Grid>

        <Grid item xs={9} style={{ padding: "20px" }}>
          <WorldChart active={active} deaths={deaths} recovered={recovered} />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Table
          active={active}
          deaths={deaths}
          recovered={recovered}
          data={data}
        />
      </Grid>
    </div>
  );
}

export default World
