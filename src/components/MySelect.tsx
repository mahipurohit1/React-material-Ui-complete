import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const MySelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);
  const countyChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width={"200px"}>
      <TextField
        select
        label="select your country"
        fullWidth
        value={country}
        onChange={countyChangeHandler}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="In"> India</MenuItem>
        <MenuItem value="Us"> America</MenuItem>
        <MenuItem value="Au"> Austria</MenuItem>
        <MenuItem value="SA"> South Africa</MenuItem>
      </TextField>
    </Box>
  );
};

export default MySelect;
