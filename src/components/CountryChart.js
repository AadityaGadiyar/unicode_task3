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
        '#5156ff',
        '#64e016',
        '#ed7c6f'
      ],
      borderWidth: 1.5,
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
      <h3>{value}</h3>
      <Typography style={{fontWeight:1000,marginBottom:"10px",fontFamily:"Roboto",fontSize:"30px"}}>ACTIVE: {active}</Typography>
      <Typography style={{ fontWeight: 1000, marginBottom: "10px", fontFamily: "Roboto", fontSize: "30px"}}>RECOVERED : {recovered}</Typography>
      <Typography style={{ fontWeight: 1000, fontFamily: "Roboto", fontSize: "30px"}}>DEATHS : {deaths}</Typography>
      <Pie data={data} options={options}/>
    </div>
  )
}

export default CountryChart
