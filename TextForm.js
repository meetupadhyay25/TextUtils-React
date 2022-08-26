import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }


    const handleLoClick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        console.log("clear was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyClick = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied to clipboard", "success");
    }
    


    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value); 
    }



    const [text, setText] = useState('')
  return (
    <>
    <div className="container" style={{Color:props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white',Color:props.mode==='dark'? 'white':'#042743' }} id="myBox" rows="8"></textarea>
      </div>
      
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
      
    

    </div>
    <div className="container my-3" style={{Color:props.mode==='dark'? 'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to previwe it"}</p>
    </div>
    </>
  )
}
