import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = [
  "Wedding",
  "Birthday",
  "Christening",
  "Baby Shower",
  "Business",
];

export default function InputOptions({ label }) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}
