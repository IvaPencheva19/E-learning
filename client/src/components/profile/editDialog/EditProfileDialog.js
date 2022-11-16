import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { minLengthValidator, emailValidator } from "../../../utils/validators";

const EditProfileDialog = ({
    user,
    openDialog,
    onClose,
    onSave,
}) => {
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        imageUrl: false,
    });
    const [values, setValues] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        imageUrl: user.imageUrl,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { ...userData } = values;
        userData._id = user._id;
        onSave(userData);
    }

    const changeHandler = (e) => {
        console.log(errors);
        setErrors((errors) => ({
            ...errors,
            serverMsg: "",
        }));

        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="dialog">
                <Dialog open={openDialog} onClose={onClose}>
                    <DialogTitle>Edit profile</DialogTitle>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <DialogContent>
                            <DialogContentText></DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                type="text"
                                fullWidth
                                color="secondary"
                                onChange={changeHandler}
                                value={values.firstName}
                                onKeyUp={(e) => minLengthValidator(e, 2, setErrors, values)}
                                error={errors.firstName ? true : false}
                                helperText={
                                    errors.firstName ? "First name must be at least 2 characters" : ""
                                }
                            />

                            <TextField
                                autoFocus
                                margin="dense"
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                fullWidth
                                color="secondary"
                                onChange={changeHandler}
                                value={values.lastName}
                                onKeyUp={(e) => minLengthValidator(e, 2, setErrors, values)}
                                error={errors.lastName ? true : false}
                                helperText={
                                    errors.lastName ? "Last name must be at least 2 characters" : ""
                                }
                            />

                            <TextField
                                color="secondary"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={values.email}
                                onChange={changeHandler}
                                onKeyUp={(e) => emailValidator(e, setErrors)}
                                onBlur={(e) => emailValidator(e, setErrors)}
                                error={errors.email ? true : false}
                                helperText={errors.email ? "Email is not valid!" : ""}
                            />

                            <TextField
                                color="secondary"
                                margin="normal"
                                required
                                fullWidth
                                id="imageUrl"
                                label="Image url"
                                name="imageUrl"
                                autoComplete="text"
                                value={values.imageUrl}
                                onChange={changeHandler}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button type="submit">Edit</Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

export default EditProfileDialog;