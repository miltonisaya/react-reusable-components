import React from 'react';
import './App.css';
import MuiBasicButton from './components/Button';
import MuiFormInput from './components/FormInput';
import MuiToolBar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <MuiToolBar />
      <MuiFormInput />
      <MuiBasicButton variant="contained" color="primary" size={"sm"} >Click Me!</MuiBasicButton>
    </div>
  );
}

export default App;
