import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CustomModal = ({ isOpen, title, children, onClose}) => {

    return (
        <div>
            <Dialog open={true} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default CustomModal;