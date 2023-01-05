
import { useState } from "react"
export default function Name({value}){
  const [input, setInput]=useState("")
  const [res, setres]= useState(false)
  const result = Math.random()*100+1
 const result1 = Math.round(result) 
  function handleSubmit(e){
    e.preventDefault()
    setInput("")
    if(result1 >= 90){
      alert(`You and ${input} have ${result1}% chance of dating. I think you should ask them out.💞`)
    }else if(result1 >=80){
     alert(`You and ${input} have ${result1}% chance of dating. I think you should ask them out.💞`) 
    }else if(result1 >= 70){
alert(`You and ${input} have ${result1}% chance of dating. I think you should ask them out.💞`)
    }else if(result1 >= 60){
alert(`You and ${input} have ${result1}% chance of dating. I think you should ask them out.💞`)
    }else if(result1 >= 50){
alert(`You and ${input} have ${result1}% chance of dating. I think you shouldn't ask them out yet, wait and check if they hv at least little interest in you.💞`)
    }else if (result1 >= 30){
alert(`You and ${input} have ${result1}% chance of dating. don't ask dem out unless u want to chop breakfast 🤣🤣`)
    }else if(result1 <30){
alert(`You and ${input} have ${result1}% chance of dating💔💔💔💔💔.`)
    }
  }
        return    <div className="form-group">
     <label className="h2 text-light">Enter your crush name</label>
     <input className=" text-success bg-dark form-control p-3 dg1" type="text" value={input} onChange={e=>{
       setInput(e.target.value)
     }}></input>
     <button onClick={handleSubmit} className="btn btn-light mt-2">Submit</button>
     
     </div>
}