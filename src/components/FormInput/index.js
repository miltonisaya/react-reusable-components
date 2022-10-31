import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function MuiBasicTextFields(props) {
    const [variant] = useState(props.label);
    const [label] = useState(props.variant);
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
        console.log("Input Value =>", inputValue)
        if (props.onChange) props.onChange(inputValue)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                onChange={handleChange}
                id="outlined-basic"
                label={label}
                variant={variant}
            />
        </Box>
    );
}

export default MuiBasicTextFields;
