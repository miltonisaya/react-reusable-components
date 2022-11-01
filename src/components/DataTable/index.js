import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function MuiDataTable(props) {
    const [rows] = useState(props.rows);
    const [columns] = useState(props.columns);
    const [pageSize] = useState(props.pageSize);
    const [rowsPerPageOptions] = useState(props.rowsPerPageOptions);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[rowsPerPageOptions]}
                checkboxSelection
            />
        </div>
    );
}

MuiDataTable.defaultProps = {
    pageSize: 10,
    rowsPerPageOptions: 10
}

export default MuiDataTable;
