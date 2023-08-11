import React, { useState } from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Upercase is Clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("handleOnChange")
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = "Helloo" Wrong way to change state
    // setText("Hello"); Correct way change state


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick} >Convert to Upperase</button>
        </div>
    )
}
