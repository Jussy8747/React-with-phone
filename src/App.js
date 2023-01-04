import "./App.css"
import Name2 from "./Name2"
import Name from "./Name"
import { useState } from "react"
function App() {
  const [value, setValue] = useState("")
const [showcom, setShowcom]=useState(false)
  
  
  return (
    <div>
   < Name2  value={value} setValue={setValue}
    showcom={showcom} setShowcom={setShowcom}/>
    </div>
  );
}

export default App;
