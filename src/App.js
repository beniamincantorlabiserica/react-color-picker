import Square from "./Square";
import Input from "./Input";
import {useState} from "react";

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('')
  return (
    <div className="App">
      <h1>React Color Picker</h1>
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        />
      <Input 
        colorValue={colorValue} setColorValue={setColorValue}
        hexValue={hexValue} setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
