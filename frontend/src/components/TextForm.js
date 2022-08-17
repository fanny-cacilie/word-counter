import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

import SubmitButton from "./submitButton";

export default function TextForm() {
  const [text, setText] = useState("");

  return (
    <div className="text-form">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "50ch" },
        }}
      >
        <TextField
          id="text"
          name="text"
          value={text}
          multiline
          rows={20}
          placeholder="Type or paste your text here."
          autoFocus
          onChange={(event) => setText(event.target.value)}
        />
      </Box>

     <SubmitButton text={text}/>
      
    </div>
  );
}
