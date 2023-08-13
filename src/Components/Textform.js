import React, { useState } from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Upercase is Clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }


    const handleDownClick = () => {
        // console.log("LowerCase is Clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () => {
        // console.log("Clear is Clicked")
        let newText = "";
        setText(newText);
        props.showAlert("Your text has been cleared!", "success")
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Audio Started!", "success")
    }

    const reverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText)
        props.showAlert("Text has been reversed!", "success")
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
        props.showAlert("Text has been Capitalized!", "success")
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
        props.showAlert("Extra Spaces has been removed!", "success")
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to your clipboard!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("handleOnChange")
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    // text = "Helloo" Wrong way to change state
    // setText("Hello"); Correct way change state


    return (
        <>
            {/* Dark Mode Only */}
            {/* <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'white', color: props.mode === 'dark' ? '#FFF6E0' : 'black' }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={handleUpClick} >to Uppercase</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={handleDownClick} >to Lowercase</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={handleCopy} >Copy</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={reverseText} >ReverseText</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={handleCapitalizeonClick} >Capitalization</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={handleSpeak} >to Speak</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.mode === 'dark' ? '#61677A' : 'black', color: props.mode === 'dark' ? '#FFF6E0' : 'white', border: 'none' }} onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{text.trim() === '' ? 0 : 0.008 * text.match(/\S+/g).length} Mintues Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
             */}


            {/* Themes here */}
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.BGColor, color: props.TextColor }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={handleUpClick} >to Uppercase</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={handleDownClick} >to Lowercase</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={handleCopy} >Copy</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={reverseText} >ReverseText</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={handleCapitalizeonClick} >Capitalization</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={handleSpeak} >to Speak</button>
                <button className="btn btn-dark mx-2" style={{ backgroundColor: props.BGColor, color: props.TextColor }} onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{text.trim() === '' ? 0 : 0.008 * text.match(/\S+/g).length} Mintues Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
