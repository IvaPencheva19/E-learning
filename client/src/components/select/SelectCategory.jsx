import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ changeHandler, category }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl color="secondary" margin="normal" required fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          name="category"
          value={category}
          onChange={(e) => changeHandler(e)}
        >
          <MenuItem value={"Category1"}>Category 1</MenuItem>
          <MenuItem value={"Category2"}>Category 2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
