import React from "react";
import { Button } from "@mui/material";

export default function SubmitButton({ text, onNewCount }) {
  return (
    <div className="submitBtn">
      <Button
        type="submit"
        variant="contained"
        onClick={async () => {
          const res_delete = await fetch("/remove/1", {
            method: "DELETE",
          });

          const form = { text };
          const res_post = await fetch("/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
          if (res_delete && res_post.ok) {
            console.log("response ok");
            onNewCount();
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
}
