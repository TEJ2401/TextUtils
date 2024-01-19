import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Navbar from './Navbar';
import Alert from './Alert';
import TextForm from './TextForm';
import About from './About';
import { useState } from 'react';
function App() {
  const[dark,setmode]=useState('light');
  const[alert,showalert]=useState(null);
  const showAll=(message,type)=>{
       showalert( {msg:message,
        type:type})
      
  }
  const removeclass=()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-blue");
    document.body.classList.remove("bg-green");
    document.body.classList.remove("bg-red");
  }
  const[choice,setchoice]=useState(null);
    const togglecolor=(color)=>{
        if(color==="Dark")
        {
          removeclass();
          document.body.classList.add("bg"+"#13466e");
          setchoice("#13466e");
        }
        else if(color==="Light")
        {
          removeclass();
          setchoice("white");
        }
        else if(color==="Blue")
        {
            setchoice("blue");
        }
        else if(color==="Green")
        {
            setchoice("green")
        }
        else if(color==="Red")
        {
            setchoice("red")
        }
    }
  const togglebutton=()=>{
    if(dark==='light')
    {
      setmode('dark');
      showAll("Dark mode","Success");
      document.title="TextUtils-DarkMode";
      setTimeout(()=>{document.title="TextUtils";
      },3000);
      setInterval(()=>{
        document.title="Install Text-Utils";
      },3000)
    }
    else
    {
      setmode('light')
      showAll("Light mode","Success");
      document.title="TextUtils-LightMode"
      setTimeout(()=>{
        document.title="TextUtils"
      },3000);
      setInterval(()=>{
        document.title="Install Text-Utils";
      },3000)
    }
  }
  return (
    <div >
     
     <Navbar title="TextUtils" togglebutton={togglebutton} mode={dark} togglecolor={togglecolor}/>
     <Alert alert={alert}/>
     
      <TextForm heading="TextUtils-Word Counter,Character Counter" mode={dark}  showAlert={showAll} favcolor={choice}/>
       
      
    
    </div>
  );
}

export default App;
