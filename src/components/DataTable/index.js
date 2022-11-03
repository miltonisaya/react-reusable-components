import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function MuiDataTable(props) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                {...props}
                checkboxSelection
            />
        </div>
    );
}

MuiDataTable.defaultProps = {
    pageSize: 10,
    rowsPerPageOptions: [5,10,15,20,25,50,100,250,500,1000]
}

export default MuiDataTable;
