import React from 'react'
import { Pie } from 'react-chartjs-2';

function WorldChart({active,deaths,recovered}) {

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
      display:true,
      text:`World Stats`,
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
  return <Pie data={data} options={options}/>
}

export default WorldChart
