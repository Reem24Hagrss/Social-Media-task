import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Nav from '../Nav/Nav'
import Timeline from '../Timeline';

import './App.css';
function App() {
  const [data, setDate] = useState({});
  useEffect ( () => {
    axios.get('js/data.json').then( res =>{
      setDate(res.data);
    } )
  } , [] );
  console.log(data);
  return (
    <div className="App">
      <Nav data={data}/>
      <Timeline data={data} />
    </div>
  );
}

export default App;
