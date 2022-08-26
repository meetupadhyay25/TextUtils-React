// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] =  useState('light'); //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Success Dark mode has been" , "sucess")
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}
    
    
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
