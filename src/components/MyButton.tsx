import React from "react";
import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
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
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
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
      <Stack direction="row">
        <ButtonGroup variant="contained" size="medium" color="error">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MyButton;
