import React,{useState} from 'react'
import GoogleLogin from 'react-google-login';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import CompareCharts from './CompareCharts';

function Compare({data}) {

  const country=[];
  const original=[]
  const info=data.data.countries_stat;

  info.forEach(item=>{
    country.push(item.country_name);
    original.push(item.country_name);
  })

  const [login,setLogin] = useState(true);

  const [value,setValue] = useState(country[0]);
  const [value1,setValue1] = useState(country[1]);
  const [value2,setValue2] = useState(country[2]);
  const [value3,setValue3] = useState(country[3]);

  const [active,setActive] = useState(Number(info[0].active_cases.replace(/,/g,"")));
  const [deaths,setDeaths] = useState(Number(info[0].deaths.replace(/,/g,"")));
  const [recovered,setRecovered] = useState(Number(info[0].total_recovered.replace(/,/g,"")));

  const [active1,setActive1] = useState(Number(info[1].active_cases.replace(/,/g,"")));
  const [deaths1,setDeaths1] = useState(Number(info[1].deaths.replace(/,/g,"")));
  const [recovered1,setRecovered1] = useState(Number(info[1].total_recovered.replace(/,/g,"")));

  const [active2,setActive2] = useState(Number(info[2].active_cases.replace(/,/g,"")));
  const [deaths2,setDeaths2] = useState(Number(info[2].deaths.replace(/,/g,"")));
  const [recovered2,setRecovered2] = useState(Number(info[2].total_recovered.replace(/,/g,"")));

  const [active3,setActive3] = useState(Number(info[3].active_cases.replace(/,/g,"")));
  const [deaths3,setDeaths3] = useState(Number(info[3].deaths.replace(/,/g,"")));
  const [recovered3,setRecovered3] = useState(Number(info[3].total_recovered.replace(/,/g,"")));

  const responseGoogle = (response)=>{
    console.log(response);
    setLogin(false);
  }

  const handleChange = (e)=>{
    setValue(e.target.value);
  }

  const handleChange1 = (e)=>{
    setValue1(e.target.value);
  }

  const handleChange2 = (e)=>{
    setValue2(e.target.value);
  }

  const handleChange3 = (e)=>{
    setValue3(e.target.value);
  }

  const handleClick = (e)=>{

    var index = original.indexOf(value);
    var index1 = original.indexOf(value1);
    var index2 = original.indexOf(value2);
    var index3 = original.indexOf(value3);

    setActive(Number(info[index].active_cases.replace(/,/g,"")));
    setDeaths(Number(info[index].deaths.replace(/,/g,"")));
    setRecovered(Number(info[index].total_recovered.replace(/,/g,"")));

    setActive1(Number(info[index1].active_cases.replace(/,/g,"")));
    setDeaths1(Number(info[index1].deaths.replace(/,/g,"")));
    setRecovered1(Number(info[index1].total_recovered.replace(/,/g,"")));

    setActive2(Number(info[index2].active_cases.replace(/,/g,"")));
    setDeaths2(Number(info[index2].deaths.replace(/,/g,"")));
    setRecovered2(Number(info[index2].total_recovered.replace(/,/g,"")));

    setActive3(Number(info[index3].active_cases.replace(/,/g,"")));
    setDeaths3(Number(info[index3].deaths.replace(/,/g,"")));
    setRecovered3(Number(info[index3].total_recovered.replace(/,/g,"")));

    console.log(value);
    console.log(deaths);
    console.log(active);
    console.log(recovered);

    console.log(value1);
    console.log(deaths1);
    console.log(active1);
    console.log(recovered1);

  }

  return (
    <div style={{padding:'20px',textAlign:"center",backgroundColor:"white"}}>
      {login?<GoogleLogin
        clientId="452471405601-5blk3co9do51dm7m3tg5ea8dut8vdega.apps.googleusercontent.com"
        style={{fontSize:"20px",fontWeight:"600"}}
        buttonText="Sign in With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      :
      <div>
        <h2 style={{paddingBottom:"20px"}}>Comparing Stats</h2>
        <Grid container justify="center" spacing={4}>
          <Grid container xs={4} justify="flex-end">
            <Grid item>
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
            </Grid>
          </Grid>

          <Grid container xs={4} justify="flex-start">
            <Grid item>
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={value1 }
                onChange={handleChange1}
                helperText="Please select a country"
                variant="filled"
              >
                {country.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

        <Grid container justify="center" spacing={4}>
          <Grid container xs={5} justify="flex-end">
            <Grid item>
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={value2}
                onChange={handleChange2}
                helperText="Please select a country"
                variant="filled"
              >
                {country.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>

          <Grid container xs={5} justify="flex-start">
            <Grid item>
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={value3}
                onChange={handleChange3}
                helperText="Please select a country"
                variant="filled"
              >
                {country.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          </Grid>

          

          <Grid item xs={12}>
            <div>
              <Button variant="contained" size="large" onClick={handleClick}>SEARCH</Button>
            </div>
          </Grid>
        <CompareCharts
          active={active}
          deaths={deaths}
          recovered={recovered}
          value={value}

          active1={active1}
          deaths1={deaths1}
          recovered1={recovered1}
          value1={value1}

          active2={active2}
          deaths2={deaths2}
          recovered2={recovered2}
          value2={value2}

          active3={active3}
          deaths3={deaths3}
          recovered3={recovered3}
          value3={value3}
        />
      </div>
      }
    </div>
  )
}

export default Compare
