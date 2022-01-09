import { ADDTASK, DONE, EDIT, REMOVE } from "./types"

const initialState  ={

todos:[{id:0,task:"eat",done:false},{id:1,task:"play",done:false},{id:2,task:"sleep",done:false}]

}

const Reducer=(state=initialState,action)=>{

switch (action.type) {
    case ADDTASK:return{...state,todos:[...state.todos,action.y]}

    case DONE:return{...state,todos:state.todos.map(el=>el.id===action.id ?{ ...el, done:!el.done}:el)}
   
    case REMOVE:return{...state,todos:state.todos.filter(el=>el.id!==action.id)}

    case EDIT:return{...state,todos:state.todos.map(el=>el.id===action.id?{...el,task:action.text}:el)}
    default:return state
        
}

    
}
export default Reducer