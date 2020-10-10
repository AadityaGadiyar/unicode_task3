import { Typography } from '@material-ui/core';
import React from 'react';
import { Pie } from 'react-chartjs-2';

function CountryChart({active,deaths,recovered,value}) {

  console.log(active,deaths,recovered)

  const data={
    labels:['Active', 'Recovered', 'Deceased'],
    datasets:[{
      label: `World Stats`,
      data: [
        active,
        recovered,
        deaths
      ],
      backgroundColor:[
        'blue',
        '#28a745',
        'red'
      ],
      borderWidth: 0.5,
      borderColor: '#000',
      hoverBorderWidth:4,
      hoverBorderColor:'#000'
    }]
  }

  const options = {
    title:{
      display:false,
      text:`${value}`,
      fontSize:20,
      fontWeight:1000
    },
    layout:{
      padding:{
        left:20,
        right:20,
        bottom:20,
        top:20
      }
    },
    tooltips:{
      enabled:true
    }
  }
  return (
    <div style={{textAlign:"center"}}>
      <h4>{value}</h4>
      <Typography style={{fontWeight:1000}}>ACTIVE : {active}</Typography>
      <Typography style={{fontWeight:1000}}>RECOVERED : {recovered}</Typography>
      <Typography style={{fontWeight:1000}}>DEATHS : {deaths}</Typography>
      <Pie data={data} options={options}/>
    </div>
  )
}

export default CountryChart
