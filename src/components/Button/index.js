import React, { useState } from "react";
import Button from '@mui/material/Button';

function MuiBasicButton(props) {
    const [size] = useState(props.size);
    const [variant] = useState(props.variant);
    const [color] = useState(props.color);

    return (
        <Button variant={variant} size={size} color={color}>{props.children}</Button>
    );
}

MuiBasicButton.defaultProps = {
    variant: "contained",
    color: "primary",
    size: "sx"
}

export default MuiBasicButton;