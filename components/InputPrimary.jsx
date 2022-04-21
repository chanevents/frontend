import TextField from "@mui/material/TextField";

export default function InputPrimary({ label }) {
  return (
    <div>
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </div>
  );
}
