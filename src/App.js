import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  console.log("1");
  useEffect(() => {

    fetch("http://localhost:3001/users")
      .then((d) => d.json())
      .then((res) => {
        setData(res);
        console.log("res:", res);
      });
    
  },[]);

  return (
    <div className="App">
      {data.map((e) => (
        <div>{e.name}</div>
      ))}
    </div>
  );
}



//mounting : after HTML id shown on browser
//updating : after state changed
//unmounting: after HTML id removed from UI(browser)
export default App;
