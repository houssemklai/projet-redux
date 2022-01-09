import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { done, remove } from "../redux/action"
import Edit from "./edit"
function Carta(){
    const dispatch=useDispatch()
    const task=useSelector(state=>state.todos)
const [filter,setfilter]=useState(false)
const [x,setx]=useState(false)

    return( <div>
        <Button onClick={()=>{setfilter(true);setx(true)}}>Done</Button>
        <br/>
        <br/>
        <Button onClick={()=>{setfilter(false);setx(true)}}>Undone</Button>
        <br/>
        <br/>
        <Button onClick={()=>setx(false)}>All</Button>
{filter&&x?task.filter(el=>el.done).map(el=><div key={el.id}><h3 style={{textDecoration:el.done?"line-through":null}}>{el.task}</h3>
<Button onClick={()=>dispatch(remove(el.id))} variant="outline-danger">Delete</Button>{' '}
<Button onClick={()=>dispatch(done(el.id))} variant="outline-success">{el.done?"not done":"done"}</Button>{' '}  
<Edit el={el}></Edit>
</div>):!filter&&x?task.filter(el=>!el.done).map(el=><div key={el.id}><h3 style={{textDecoration:el.done?"line-through":null}}>{el.task}</h3>
<Button onClick={()=>dispatch(remove(el.id))} variant="outline-danger">Delete</Button>{' '}
<Button onClick={()=>dispatch(done(el.id))} variant="outline-success">{el.done?"not done":"done"}</Button>{' '}  
<Edit el={el}></Edit>
</div>):!x?task.map(el=><div key={el.id}><h3 style={{textDecoration:el.done?"line-through":null}}>{el.task}</h3>
<Button onClick={()=>dispatch(remove(el.id))} variant="outline-danger">Delete</Button>{' '}
<Button onClick={()=>dispatch(done(el.id))} variant="outline-success">{el.done?"not done":"done"}</Button>{' '}  
<Edit el={el}></Edit>
</div>):null}

    </div>)
}
export default Carta