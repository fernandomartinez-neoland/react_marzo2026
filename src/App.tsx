import "./App.css";
import { useState } from "react";

function App() {
  const [variable, setVariable] = useState<string>("Fernando");
  const alumno = "pardo";
  const alumnos = ["mario", "pardo", "neuza", "yisus", "melina"];
  const [contador, setContador]=useState<number>(0)
  const handleVariable = () => {
    setVariable("Mario");
  };
  return (
    <>
      <p>{variable}</p>
      <button onClick={handleVariable}>Enviar</button>
      <h2>
        Contador
      </h2>
      <p>{contador}</p>
      <p>{contador}</p>
      <p>{contador}</p>
      <button onClick={()=>setContador(contador+1)}>+1</button>
      <button onClick={()=>setContador(0)}>reset</button>


      <p>{alumno}</p>
      <h1>Alumnos</h1>
      <p>{alumnos.map((nombre, index) => (
        <li key={index}>
          {nombre} - {index}
        </li>
      ))}</p>

    </>
  );
}

export default App;
