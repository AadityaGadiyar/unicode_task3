import React from 'react'
import { Bar } from 'react-chartjs-2';

function CompareCharts({
  active,
  deaths,
  recovered,
  value,

  active1,
  deaths1,
  recovered1,
  value1,

  active2,
  deaths2,
  recovered2,
  value2,

  active3,
  deaths3,
  recovered3,
  value3,
}) {

  const data={
    labels:[value,value1,value2,value3],
    datasets:[
    {
      type:'bar',
      label: `Deaths`,
      data: [
        deaths,
        deaths1,
        deaths2,
        deaths3
      ],
      backgroundColor:'red',
      borderWidth: 0.5,
      borderColor: '#000',
      hoverBorderWidth:4,
      hoverBorderColor:'#000'
    },
    {
      type:'bar',
      label: 'Active',
      data: [
        active,
        active1,
        active2,
        active3
      ],
      backgroundColor:'blue',
      borderWidth: 0.5,
      borderColor: '#000',
      hoverBorderWidth:4,
      hoverBorderColor:'#000'
    },
    {
      type:'bar',
      label: `Recovered`,
      data: [
        recovered,
        recovered1,
        recovered2,
        recovered3
      ],
      backgroundColor:'#28a745',
      borderWidth: 0.5,
      borderColor: '#000',
      hoverBorderWidth:4,
      hoverBorderColor:'#000'
    },
  ]
  }

  const options = {

    scales:{
      xAxes:[{
        stacked:true
      }],
      yAxes:[{
        stacked:true
      }]
    },
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
    },
    animation:{
      duration:2000,
      easing:"linear"
    }
  }

  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default CompareCharts
