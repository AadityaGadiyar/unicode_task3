import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import CountryChart from './CountryChart';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Charts({data}) {

  const classes = useStyles();

  const country=[];
  const original=[]
  const info=data.data.countries_stat;

  console.log(info);

  info.forEach(item=>{
    country.push(item.country_name);
    original.push(item.country_name);
  })

  country.sort();

  const [value,setValue] = useState(country[0]);
  const [active,setActive] = useState(Number(info[0].active_cases.replace(/,/g,"")));
  const [deaths,setDeaths] = useState(Number(info[0].deaths.replace(/,/g,"")));
  const [recovered,setRecovered] = useState(Number(info[0].total_recovered.replace(/,/g,"")));

  const handleChange = (e)=>{
    setValue(e.target.value);

    var index = original.indexOf(e.target.value);

    setActive(Number(info[index].active_cases.replace(/,/g,"")));
    setDeaths(Number(info[index].deaths.replace(/,/g,"")));
    setRecovered(Number(info[index].total_recovered.replace(/,/g,"")));
    
  }

  return (
    <div style={{backgroundColor:"white",textAlign:"center"}}>
      <form className={classes.root} noValidate autoComplete="off" style={{textAlign:"center",paddingTop:"20px"}}>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={value}
            onChange={handleChange}
            helperText="Please select a country"
            variant="filled"
          >
            {country.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
      <Grid container justify="center">
        <Grid item xs={9}>
          <CountryChart active={active} deaths={deaths} recovered={recovered} value={value}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Charts
