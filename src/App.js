import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

  // Dark Mode
  // const [mode, setMode] = useState('light')

  // Alert
  const [alert, setAlert] = useState(null);

  // Themes

  // Particular Elements For setting themes Color 
  const [NavbarBG, setNavbarBG] = useState("#393E46");
  const [NavbarText, setNavbarText] = useState("#EEEEEE");
  const [BGColor, setBGColor] = useState("#EEEEEE");
  const [TextColor, setTextColor] = useState("#222831");
  // F6F6F6
  let ChangeTheme = (themeName) => {

    console.log(themeName)
    switch (themeName) {
      case "Pastel":
        document.body.style.backgroundColor = "#316B83";
        document.body.style.color = "#D5BFBF";
        setNavbarBG("#6D8299");
        setNavbarText("#D5BFBF");
        setBGColor("#D5BFBF");
        setTextColor("#316B83");
        break;

      case "Vintage":
        document.body.style.backgroundColor = "#F5EFE7";
        document.body.style.color = "#213555";
        setNavbarBG("#D8C4B6");
        setNavbarText("#213555");
        setBGColor("#213555");
        setTextColor("#F5EFE7");
        break;

      case "Neon":
        document.body.style.backgroundColor = "#7579E7";
        document.body.style.color = "#B9FFFC";
        setNavbarBG("#9AB3F5");
        setNavbarText("#B9FFFC");
        setBGColor("#B9FFFC");
        setTextColor("#7579E7");
        break;

      case "Light":
        document.body.style.backgroundColor = "#AD8B73";
        document.body.style.color = "#FFFBE9";
        setNavbarBG("#CEAB93");
        setNavbarText("#FFFBE9");
        setBGColor("#FFFBE9");
        setTextColor("#AD8B73");
        break;

      case "Dark":
        document.body.style.backgroundColor = "#1B262C";
        document.body.style.color = "#BBE1FA";
        setNavbarBG("#0F4C75");
        setNavbarText("#BBE1FA");
        setBGColor("#BBE1FA");
        setTextColor("#1B262C");
        break;

      case "Earth":
        document.body.style.backgroundColor = "#557153";
        document.body.style.color = "#E6E5A3";
        setNavbarBG("#7D8F69");
        setNavbarText("#E6E5A3");
        setBGColor("#E6E5A3");
        setTextColor("#557153");
        break;

      case "Cold":
        document.body.style.backgroundColor = "#CFF5E7";
        document.body.style.color = "#0D4C92";
        setNavbarBG("#A0E4CB");
        setNavbarText("#0D4C92");
        setBGColor("#0D4C92");
        setTextColor("#CFF5E7");
        break;

      case "Space":
        document.body.style.backgroundColor = "#F67280";
        document.body.style.color = "#355C7D";
        setNavbarBG("#C06C84");
        setNavbarText("#355C7D");
        setBGColor("#355C7D");
        setTextColor("#F67280");
        break;

      default:
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        setNavbarBG("#393E46");
        setNavbarText("#EEEEEE");
        setBGColor("#EEEEEE");
        setTextColor("#222831");
        break;
    }
  }



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // DarkModeOnly
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#272829";
  //     document.body.style.color = "#FFF6E0";
  //     showAlert("Dark mode has been enabled" , "success")
  //   }
  //   else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     showAlert("Light mode has been enabled" , "success")
  //   }
  // }



  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="Textutils" aboutText="About Textutils" /> */}
      {/* <Navbar/> */}

      {/* DarkModeOnly */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}

      {/* Themes */}
      <Navbar title="TextUtils" aboutText="About" ChangeTheme={ChangeTheme} NavbarBG={NavbarBG} NavbarText={NavbarText} BGColor={BGColor} TextColor={TextColor} />

      <Alert alert={alert} />

      <div className="container my-3">

        {/* Dark Mode Only */}
        {/* <Textform heading="Enter the text to anlayze" showAlert={showAlert} mode={mode} /> */}

        {/* Themes Here! */}
        <Textform heading="Enter the text to anlayze" showAlert={showAlert} ChangeTheme={ChangeTheme} BGColor={BGColor} TextColor={TextColor} />
        {/* <About /> */}

        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform heading="Enter the text to anlayze" showAlert={showAlert} ChangeTheme={ChangeTheme} BGColor={BGColor} TextColor={TextColor} />} />

          </Routes> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
