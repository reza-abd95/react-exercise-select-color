import { useState } from "react"
import Select from "./components/Select";
import Box from "./components/Box";




function App() {

  const [val , setVal] = useState("") ;
  const setValue = (e) => {
      setVal(e.target.value) 

  }

  return (
    <div>
      <Select fun={setValue}  val1 ="Red" val2 = "Green" val3 = "Yellow" val4 = "Blue"/>
      <Box color={val} />
    </div>

  )
}

export default App
