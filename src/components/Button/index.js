import React from "react";
import Button from '@mui/material/Button';

function MuiBasicButton(props) {
    return (
        <Button {...props}>{props.children}</Button>
    );
}

MuiBasicButton.defaultProps = {
    variant: "contained",
    color: "primary",
    size: "sx"
}

export default MuiBasicButton;