import Result from "./Result"
import { useState } from "react"
export default function Name(){
  const [input, setInput]=useState("")
  const [res, setres]= useState(false)
  const result = Math.random()*100+1
 const result1 = Math.round(result) 
  function handleSubmit(){
    setInput("")
    setres(true)
  }
        return    <div className="form-group">
     <label className="h2 text-light">Enter your crush name</label>
     <input className=" text-success bg-dark form-control p-3 dg1" type="text" value={input} onChange={e=>{
       setInput(e.target.value)
     }}></input>
     <button onClick={handleSubmit} className="btn btn-light mt-2">Submit</button>
     {res && <Result result={result1}/>}
     </div>
}