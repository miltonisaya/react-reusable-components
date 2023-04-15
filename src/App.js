import React from 'react';
import './App.css';
import UserComponent from "./modules/user/home";

function App() {
    const columns = [
        {field:'id', headerName: 'Id'},
        {field:'firstName', headerName: 'First Name'},
        {field:'lastName', headerName: 'Last Name'},
        {field:'fullName', headerName: 'Full Name', type: 'number'},
        {field:'role', headerName: 'Role'}
    ];

    const rows = [];
    return (
        <UserComponent columns={columns} rows={rows}/>
    );
}

export default App;
