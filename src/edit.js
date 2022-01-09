import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "./action";

function Edit({el}) {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name,setname]=useState(el.task);
    


  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
Edit        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT TASK</Modal.Title>
          </Modal.Header>
          <Modal.Body><input  onChange={(e)=>setname(e.target.value)} value={name}/></Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={()=>{dispatch(edit(el.id,name));handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Edit