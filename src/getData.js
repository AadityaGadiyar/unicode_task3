import axios from 'axios';

const getData = async()=>{
  return(
    axios("https://corona-virus-world-and-india-data.p.rapidapi.com/api",{
      method:"GET",
      headers:{
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": "7dce663157mshcc04410744235bbp14c956jsn8d2012bff7f2"
      }
    })
    .then(res=>{
      console.log(res);
      return res
    })
    .catch(err=>{console.log(err)})
  )
}

export default getData