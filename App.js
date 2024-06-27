import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const App = () => {
  const [show, setShow] = useState(false);
  const [colour, setColour] = useState("yellow");
  const [box, setBox] = useState([]);

  const handleClick = () => {
    setShow(true);
  };

  const handleChange = (event) => {
    setColour(event.target.value);
  };

  const handleBox = () => {
    setBox([...box, { colorvalue: colour }]);
  };


  
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap:10 }}>
        <div
          style={{
            backgroundColor: show ? colour : "white",
            height: "100px",
            width: "100px",
          }}
        ></div>
        {box.map((box) => (
          <div
            style={{
              backgroundColor: box.colorvalue,
              height: "100px",
              width: "100px",
            }}
          ></div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p>Enter a color:</p>
        <TextField label="color" variant="outlined" onChange={handleChange} />
        <Button variant="contained" onClick={handleClick}>
          Show
        </Button>

        <Button variant="contained" onClick={handleBox} >
          Add
        </Button>
      </div>
    </div>
  );
};

export default App;
