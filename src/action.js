
import { ADDTASK, DONE, EDIT, REMOVE } from "./types"

export const addtask=(y)=>{

    return{type:ADDTASK,y}
}

export const done=(id)=>{

    return{type:DONE,id}
}

 export const remove=(id)=>{
     return{type:REMOVE,id}
 }

 export const edit=(id,text)=>{
     return{type:EDIT,id,text}
 }