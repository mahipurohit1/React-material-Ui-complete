import React from "react";
import { Typography } from "@mui/material";
const MyTypography: React.FC = () => {
  return (
    <div>
      <Typography variant="h1"> h1</Typography>
      <Typography variant="h2"> h2</Typography>
      <Typography variant="h3"> h3</Typography>
      <Typography variant="h4"> h4</Typography>
      <Typography variant="h5"> h5</Typography>
      <Typography variant="h6"> h6</Typography>

      {/* this 2 are alternative of h6 */}
      <Typography variant="subtitle1"> subtitle1</Typography>
      <Typography variant="subtitle2"> subtitle2</Typography>

      {/* this is 2 is for body text  simply p tag variation */}
      <Typography variant="body1"> body1</Typography>
      <Typography variant="body2"> body2</Typography>

      {/* by  default is body1 */}
      <Typography> body1 by default</Typography>

      {/* h4 as h1 tag with margin-bottom */}
      <Typography variant="h4" component="h1" gutterBottom>
        h4 -- convert to -- h1
      </Typography>
    </div>
  );
};

export default MyTypography;
