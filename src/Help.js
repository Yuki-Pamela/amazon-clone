import React from "react";
import "./Help.css";
import TextField from "@material-ui/core/TextField";

function Help() {
  return (
    <div className="Help">
      <span>How can I help you?</span>
      <br />
      <form noValidate autoComplete="off">
        <div className="textarea">
          <TextField fullWidth id="outlined-basic" variant="outlined" />
        </div>
        <br />
        <button type="submit">Send</button>
      </form>
      <br />
      <img
        src="https://www.rspcasa.org.au/wp-content/uploads/2019/01/Adopt-a-cat-or-kitten-from-RSPCA.jpg"
        alt="help image"
      />
    </div>
  );
}

export default Help;
