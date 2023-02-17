import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MyButton: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">text</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>

        {/* anchor tag */}
        <Button variant="text" href="https://google.com">
          google
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>{" "}
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction="row">
        <Button variant="contained" size="small">
          contained
        </Button>
        <Button variant="contained" size="medium">
          contained
        </Button>
        <Button variant="contained" size="large">
          contained
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon></SendIcon>}
          disableElevation
        >
          start
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          End
        </Button>
        <IconButton aria-label="send" size="medium" color="secondary">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MyButton;
