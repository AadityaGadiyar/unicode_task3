import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts';
import Compare from './components/Compare';
import Navbar from './components/Navbar';
import World from './components/World';
import getData from './getData';

function App() {

  const [data,setData] = useState(null);

  useEffect(()=>{
    getData().then(data=>{
      setData(data);
    })
  },[])


  return (
    <Router>
      <div className="App">
        {data?
          <header className="App-header" style={{ paddingTop: "20px", backgroundColor:"#F7CB15"}}>
          <h1 style={{textAlign:"center"}}>COVID 19 TRACKER</h1>
          <Navbar />
          <Switch>
            <Route path="/" exact component={()=><World data={data}/>}/>
            <Route path="/charts" exact component={()=><Charts data={data}/>}/>
            <Route path="/compare" exact component={()=><Compare data={data}/>}/>
          </Switch>
        </header>:null}
      </div>
    </Router>
  );
}

export default App;
