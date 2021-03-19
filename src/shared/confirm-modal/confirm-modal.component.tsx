import './confirm-modal.scss';
import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

interface IConfirmModalComponent {
    open: boolean;
    text: string;
    onConfirm: () => void;
    onClose: () => void;
}

const ConfirmModalComponent: React.FC<IConfirmModalComponent> = ({
                                                                     open,
                                                                     text,
                                                                     onConfirm,
                                                                     onClose
                                                                 }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmModalComponent;