import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';


function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);


  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#272829";
      document.body.style.color = "#FFF6E0";
      showAlert("Dark mode has been enabled" , "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled" , "success")
    }
  }

  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter the text to anlayze" showAlert={showAlert}  mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
