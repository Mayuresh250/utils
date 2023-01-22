import React,{useState} from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';
/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/


function App(){
  
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null)

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#253c5e"
      showAlert("Dark mode enabled.","Success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode enabled.","Success")
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
    type:type,
    msg:message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
  <>
    {/* <Router>
      <Routes>
      <Route path="/">
      </Route>
      </Route>
      </Routes>
      <Route path="/about">
    </Router>*/}

    <Navbar title="Utils" showAlert={showAlert} toggleMode={toggleMode} mode={mode} home="Home" about="About"/>
    <Alert alert={alert}/>
    <div>
              <Text mode={mode} showAlert={showAlert}/>
              <About mode={mode}/>
    </div>
  </>
   
  );
}

export default App;
