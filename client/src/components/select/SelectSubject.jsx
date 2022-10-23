import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ changeHandler, subject }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl color="secondary" margin="normal" required fullWidth>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          name="subject"
          value={subject}
          onChange={(e) => changeHandler(e)}
        >
          <MenuItem value={"Math"}>Math</MenuItem>
          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
          <MenuItem value={"Physics"}>Physics</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
