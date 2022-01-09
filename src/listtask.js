import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { done, remove } from "./action"
import Edit from "./edit"


function List() {
    const dispatch=useDispatch()
    const task=useSelector(state=>state.todos)
const [filter,setfilter]=useState(false)
const [x,setx]=useState(false)
    return(
        <div>
        
            <div className="center">
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

        </div>
            <div className="bt">
                
                <Button variant="dark"  onClick={()=>{setfilter(true);setx(true)}}>Done</Button>{' '}
                
                <Button variant="dark"  onClick={()=>{setfilter(false);setx(true)}}>Undone</Button>{' '}
                
                <Button variant="dark"  onClick={()=>setx(false)}>All</Button>{' '}
                </div>
        </div>
    )
}
export default List