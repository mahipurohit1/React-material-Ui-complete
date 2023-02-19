import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MyButton: React.FC = () => {
  // const [formats, setFormats] = useState<string[]>([]);
  const [formats, setFormats] = useState<string | null>(null);

  console.log(formats);
  const formatHandler = (
    _event: React.MouseEvent<HTMLElement>,
    // updatedFormats : string[]
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
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
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="medium"
          color="success"
          orientation="vertical"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={formatHandler}
          size="large"
          // orientation="vertical"
          exclusive
          color="info"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon></FormatUnderlinedIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MyButton;
