import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { minLengthValidator, passwordDoNotMatch } from "../../../utils/validators";

const ChangePasswordDialog = ({
    openDialog,
    onClose,
    onSave,
}) => {

    const [errors, setErrors] = useState({
        password: false,
        repeatPassword: false,
    });
    const [values, setValues] = useState({
        currentPassword: '',
        password: '',
        repeatPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { currentPassword, password } = values;
        onSave(currentPassword, password, setErrors);
    }
    const changeHandler = (e) => {
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

                            {errors.serverMsg && (
                                <p style={{ color: "red", margin: "1em 0" }}>{errors.serverMsg}</p>
                            )}

                            <TextField
                                id="currentPassword"
                                margin="dense"
                                required
                                autoFocus
                                fullWidth
                                label="Current Password"
                                name="currentPassword"
                                type="password"
                                color="secondary"
                                onChange={changeHandler}
                                value={values.currentPassword}
                            />

                            <TextField
                                id="password"
                                label="New Password"
                                type="password"
                                required
                                margin="dense"
                                name="password"
                                fullWidth
                                color="secondary"
                                onChange={changeHandler}
                                value={values.password}
                                onBlur={(e) => minLengthValidator(e, 8, setErrors, values)}
                                error={errors.password ? true : false}
                                helperText={
                                    errors.password ? "The new password must be at least 8 characters long" : ""
                                }
                            />
                            <TextField
                                id="repeatPassword"
                                type="password"
                                color="secondary"
                                margin="normal"
                                required
                                fullWidth
                                name="repeatPassword"
                                autoComplete="Re-Enter New Password"
                                label="Re-Enter New Password"
                                value={values.repeatPassword}
                                onChange={changeHandler}
                                onKeyUp={(e) => passwordDoNotMatch(values, setErrors)}
                                onBlur={(e) => passwordDoNotMatch(values, setErrors)}
                                error={errors.repeatPassword ? true : false}
                                helperText={errors.repeatPassword ? "The password do not match is not valid!" : ""}
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


export default ChangePasswordDialog;