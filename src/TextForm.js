import React from 'react'
import { useState } from 'react';
// import{BrowserRouter as Router }
function TextForm(props) {
    const[text,Settext]=useState("ENTER THE TEXT");
    const handleUpClick=()=>{
        let txt=text.toUpperCase();
        Settext(txt);
        console.log("UPPERCASE");
        props.showAlert("Converted to Uppercase","Success");
        
    }
    const a=text.split(" ");
    const[count,setcount]=useState(3);
    const countword=(text)=>{
        let count=0;
        for(let i=0;i<text.split(" ").length;i++)
        {
            if(text.length===0)
            {
                setcount(0);
            }
            else if(a[i]==="" || a[i]===" ")
            {
                break;

            }
            else{
                count++;
                setcount(count);
            }
        }
        
    }
    const handleonChange=(event)=>{
            Settext(event.target.value)
            console.log(text)
            console.log("LOWERCASE");
            const a=text.split(" ");
            console.log(a);
            let count=0;
        for(let i=0;i<text.split(" ").length;i++)
        {
            if(text.length===0)
            {
                setcount(0);
            }
           else if(a[i]==="")
            {
                break;

            }   
            else{
                count++;
                setcount(count);
            }
        }
            // props.showAlert("Converted to Lowercase","Success");
    }
    const handleClearClick=()=>{
        Settext("");
    }
    return(
        <>
        <div className='container' style={{color:props.favcolor==="#13466e"?"white":"#13466e"}}>
        < div class="mb-3" style={{color:props.mode==="#13466e"?"white":"black"}}>
        <label style={{fontWeight:'bold',fontSize:"50 px"}} htmlFor="exampleFormControlTextarea1" class="form-label">{props.heading}</label>
    <textarea value={text} onChange={handleonChange} style={{color:props.mode==="#13466e"?"white":"dark"}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    
    <div >
    <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-3' onClick={handleClearClick}>ClearText</button>
    </div>
    <div className='container my-3' style={{color:props.favcolor==="#13466e"?"black":"black"}}>
        <h1>Your paragraph summary</h1>
        <p>Your words are {count} and number of characters are {text.length}</p>
        <p>{0.008 * text.split(" ").length} minute read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </div>
    </div>
    </>
    );
}
export default TextForm;