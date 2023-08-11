import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor="#272829";
      document.body.style.color="#FFF6E0";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }

  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter the text to anlayze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
