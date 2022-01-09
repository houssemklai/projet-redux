
 import { Button } from "react-bootstrap"
 import React,{ useState } from "react"
 import { useDispatch } from "react-redux"
 import { addtask } from "./action"
 
 
 function Add() {
 const dispatch=useDispatch()
 const [ajouter,setajouter]=useState("")
 
 
 
     return(
         <div className="center">
 <input placeholder="add a new task"  onChange={(e)=>setajouter(e.target.value)} /> 
 
 <Button onClick={()=>dispatch(addtask({id:Math.random(),task:ajouter,done:false}))} variant="outline-primary">Add</Button>{' '}
 
     
     
 
         </div>
     )
 }
 export default Add