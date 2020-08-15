import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.js'
import Home from './pages/home/Home'


function App() {

  let [loaded, setload] = useState(false);

  useEffect(() => {
    
   
  })

  return (
         
  
    <div className="App">
 <Header></Header>
<Home/>
    </div>

  );
}

export default App;
