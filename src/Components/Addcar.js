import { Button} from '@mui/material';
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Addcar ({addCar}) {
    // viittaa painikkeeseen, joka avaa ikkunan
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: '',
    });

    const handleOnChange = () => {
        setOpen(true);
    }

    const handleClose = () => {
        addCar(car);
        setOpen(false);
    }

    const handleCancel = () => {
        console.log("cancel funktio");
        setOpen(false);
    }

    const inputChanged = (event) => {
        console.log("tallennetaan arvo");
        setCar({...car, [event.target.name] : event.target.value})
    }
    
    return (
        <div>
            <Button variant="outlined" onClick={handleOnChange}>Add</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField
                        name="brand"
                        value={car.brand}
                        autoFocus
                        margin="dense"
                        label="Brand"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="model"
                        value={car.model}
                        autoFocus
                        margin="dense"
                        label="Model"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="color"
                        value={car.color}
                        autoFocus
                        margin="dense"
                        label="Color"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="fuel"
                        value={car.fuel}
                        autoFocus
                        margin="dense"
                        label="Fuel"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="year"
                        value={car.year}
                        autoFocus
                        margin="dense"
                        label="Year"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                    <TextField
                        name="price"
                        value={car.price}
                        autoFocus
                        margin="dense"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={inputChanged}
                    />
                </DialogContent>
                <DialogActions>
                <Button variant="contained" onClick={handleClose}>Save</Button>
                <Button variant="contained" onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Addcar;