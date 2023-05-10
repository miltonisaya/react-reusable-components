import React from "react";
import './App.css';
import CustomTable from "./components/Table";
import axios from "axios";
import {useEffect, useState} from "react";
import Button from "./components/Button";
import CustomModal from "./components/Modal";
import {Grid} from "@mui/material";
import {ErrorMessage, Field, Form, Formik} from "formik";


const API = "https://jsonplaceholder.typicode.com/users";

const getPosts = async () => {
    return await axios.get(API);
}


const columns = [{title: "Name", value: "name"}, {title: "Username", value: "username"}, {
    title: "Email", value: "email"
}, {title: "Actions", value: "actions"},];

const App = () => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await getPosts();
        setPosts(res.data)
    }

    const openDialog = () => {
        setDialogIsOpen(true);
    }

    const closeDialog = () => {
        setDialogIsOpen(false);
    }

    const formikInitialValues = {
        fullname: "",
        email: "",
        password: ""
    }
    return (<Grid container sx={{padding: '40px'}}>
        <pre>{JSON.stringify(dialogIsOpen)}</pre>
        <Grid item xs={12} sx={{paddingBottom: '10px'}}>
            <Button onClick={() => openDialog()}>Add New</Button>
        </Grid>
        <Grid item>
            <CustomTable columns={columns} data={posts}>
                {({row, col}) => (<button>Edit</button>)}
            </CustomTable>
        </Grid>

        <CustomModal open={dialogIsOpen} onClose={closeDialog} title='User Registration Form'>
            <Formik initialValues={formikInitialValues}>
                {({isSubmitting}) => (
                    <Form>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
                            <Grid item xs={6}>
                                <Field
                                    variant="outlined"
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter your first name"/>
                                <ErrorMessage name="firstname" component="div"/>
                            </Grid>

                            <Grid item xs={6}>
                                <Field
                                    type="text"
                                    name="middlename"
                                    placeholder="Enter your middle name"/>
                                <ErrorMessage name="middlename" component="div"/>
                            </Grid>
                        </Grid>

                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                            <Grid item xs={6}>
                                <Field
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter your last name"/>
                                <ErrorMessage name="lastname" component="div"/>
                            </Grid>


                            <Grid item xs={6}>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"/>
                                <ErrorMessage name="email" component="div"/>
                            </Grid>


                            <Grid item xs={12}>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"/>
                                <ErrorMessage name="password" component="div"/>
                            </Grid>

                            <Grid item xs={12}>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </CustomModal>
    </Grid>);
}

export default App;
