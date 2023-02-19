import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function MyTextField() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="small secondary"
          color="secondary"
          size="small"
          variant="outlined"
          required
          // error
        />
        <TextField
          label="password"
          type={"password"}
          helperText="don't share with anyone"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                <VisibilityOffIcon></VisibilityOffIcon>
              </InputAdornment>
            ),
          }}
        />
        <TextField label="read only" inputProps={{ readOnly: true }} />
        <TextField label="disabled" disabled />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"> $</InputAdornment>
            ),
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MyTextField;
