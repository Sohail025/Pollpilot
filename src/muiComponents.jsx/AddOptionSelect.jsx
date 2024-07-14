import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function BasicSelect({ setCorrectOption }) {
  const [value, setValue] = useState(1);
  setCorrectOption(value);
  return (
    <Box sx={{ width: 100 }}>
      <FormControl fullWidth>
        <InputLabel className="text-[0.1rem]" id="demo-simple-select-label">
          Cr
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value={1}>No Option</MenuItem>
          <MenuItem value={2}>Option1</MenuItem>
          <MenuItem value={3}>Option2</MenuItem>
          <MenuItem value={4}>Option3</MenuItem>
          <MenuItem value={5}>Option4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
