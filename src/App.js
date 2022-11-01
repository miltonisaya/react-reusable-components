import React from 'react';
import './App.css';
import MuiDataTable from './components/DataTable';
import MuiToolBar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <MuiToolBar />
      <MuiDataTable />
    </div>
  );
}

export default App;
