import './App.css';
import CustomTable from "./components/Table";
import axios from "axios";
import {useEffect, useState} from "react";
import Button from "./components/Button";
import CustomModal from "./components/Modal";
import {Grid} from "@mui/material";

const API = "https://jsonplaceholder.typicode.com/users";

const getPosts = async ()=>{
    return await axios.get(API);
}


const columns = [
    {title: "Name", value: "name"},
    {title: "Username", value: "username"},
    {title: "Email", value: "email"},
    {title: "Actions", value: "actions"},
];

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const res = await getPosts();
        setPosts(res.data)
    }

    const openDialog = () => {
        console.log('open dialog');
        setIsOpen(true);
    }

    const closeDialog = () => {
        setIsOpen(false)
    }


    return (
        <Grid container sx={{padding: '40px'}}>
            <Grid item xs={12} sx={{paddingBottom: '10px'}}>
                <Button onClick={openDialog}>Add New</Button>
            </Grid>
            <Grid item>
                <CustomTable columns={columns} data={posts}>
                    {({row, col}) => (
                        <button>Edit</button>
                    )}
                </CustomTable>
            </Grid>

            <CustomModal open={isOpen} onClose={closeDialog} title='User Form'>
                Form
            </CustomModal>
        </Grid>
    );
}

export default App;
