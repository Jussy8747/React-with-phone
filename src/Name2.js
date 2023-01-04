import {useState} from "react"
import Name from "./Name"
export default function Name2({value, setValue, handleSubmut, showcom , setShowcom }){
  
function handleSubmut(e){
  setShowcom(true) 
  setValue("")
  }
  
  return <div className="container bg1">
 <h2 className="p-5 text-center  text-success">LOVE CALCULATOR💞</h2>
    <div className="bg" >
     <div className="form-group pb-5">
     <label className="h3 text-light">Enter your name</label>
     <input className="text-success bg-dark form-control p-3 " type="text" 
     value={value} onChange={e=>{
       setValue(e.target.value)
     }}></input>
     <button onClick={handleSubmut} className="btn btn-light mt-2">Submit</button>
     </div>
     
     {showcom && <Name/>}
     
    </div>
    </div>
}