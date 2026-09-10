import { useState } from "react";
import { Button } from "./components/Button";
import { Welcome } from "./components/Welcome";
import { Card } from "./components/Card";



function App(){
  let [count, setCount] = useState(0)
  function counter(){
    setCount(count = count + 1)
    console.log(count);
  }

  return <div>
    {/* <button className="text-green-500" onClick={counter}>click</button>
    <div>
      counter {count}
    </div> */}
    <Card></Card>
  </div>

}

export default App;
