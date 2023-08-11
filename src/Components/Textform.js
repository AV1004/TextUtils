import React, { useState } from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Upercase is Clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }


    const handleDownClick = () => {
        // console.log("LowerCase is Clicked")
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        // console.log("Clear is Clicked")
        let newText = "";
        setText(newText);
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const reverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("handleOnChange")
        setText(event.target.value);
    }

    const handleCapitalizeonClick = () => {
        let camelCaseText = text
            .split(' ')
            .map(function (word, index) {
                // First character upper case else lower case
                return word.charAt(0)
                    .toUpperCase() + word.slice(1)
                        .toLowerCase();
            })
            .join(' ');
        setText(camelCaseText);
    }

    const handleExtraSpaces = () => {
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem) => {
            if (elem[0] !== undefined) {
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState("");
    // text = "Helloo" Wrong way to change state
    // setText("Hello"); Correct way change state


    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-dark mx-2" onClick={handleUpClick} >to Uppercase</button>
                <button className="btn btn-dark mx-2" onClick={handleDownClick} >to Lowercase</button>
                <button className="btn btn-dark mx-2" onClick={handleDownClick} >to Lowercase</button>
                <button className="btn btn-dark mx-2" onClick={handleCopy} >Copy</button>
                <button className="btn btn-dark mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button className="btn btn-dark mx-2" onClick={reverseText} >ReverseText</button>
                <button className="btn btn-dark mx-2" onClick={handleSpeak} >to Speak</button>
                <button className="btn btn-dark mx-2" onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Mintues Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
