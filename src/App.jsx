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
      <Select fun={setValue}/>
      <Box color={val}/>
    </div>

  )
}

export default App
