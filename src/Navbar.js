import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props)
{
    
    return(
        
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <a className="nav-link" href="/">TextUtils</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        {/* <button onClick={props.togglecolor} type="button" value={"Blue"} class="btn btn-primary">Blue</button> */}
        {/* <button type="button" class="btn btn-secondary">Secondary</button> */}
        {/* <button onClick={props.togglecolor} value={"Green"} type="button" class="btn btn-success">Green</button> */}
        {/* <button  onClick={props.togglecolor} value={"Red"} type="button" class="btn btn-danger">Red</button> */}
        <div className='d-flex'>
          <div className='bg-primary rounded mx-2 '  onClick={()=>{props.togglecolor("Blue")
          }} style={{height:'30px',width:"30px",cursor:"pointer"}}></div>
          <div className='bg-success rounded mx-2 '  onClick={()=>{props.togglecolor("Green")
          }} style={{height:'30px',width:"30px",cursor:"pointer"}}></div>
          <div  className='bg-danger rounded mx-2 '  onClick={()=>{props.togglecolor("Red")
          }} style={{height:'30px',width:"30px",cursor:"pointer"}}></div>
          <div className='bg-light rounded mx-2 '  onClick={()=>{props.togglecolor("Light")
          }} style={{height:'30px',width:"30px",cursor:"pointer"}} ></div>
          <div className='bg-dark rounded mx-2 '  onClick={()=>{props.togglecolor("Dark")
          }} style={{height:'30px',width:"30px",cursor:"pointer"}} ></div>
        </div>
        
   
      </div>
    </div>
  </nav>
      
    );
}
export default Navbar;