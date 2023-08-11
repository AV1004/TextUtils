import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the text to anlayze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
