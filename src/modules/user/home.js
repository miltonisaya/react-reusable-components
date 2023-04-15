import MuiToolBar from "../../components/Toolbar";
import {Grid} from "@mui/material";
import MuiBasicButton from "../../components/Button";
import MuiDataTable from "../../components/DataTable";
import React from "react";

const UserComponent =(props) =>{
    return (
        <div className="App">
            <MuiToolBar>LiftPesa</MuiToolBar>
            <Grid
                container
                spacing={2}
                justifyContent='space-between end'
            >
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'end', margin: '5px'}}>
                    <MuiBasicButton>
                        Add New
                    </MuiBasicButton>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <MuiDataTable {...props}>{props.children}</MuiDataTable>
                </Grid>
            </Grid>
        </div>
    );
}

export default UserComponent;