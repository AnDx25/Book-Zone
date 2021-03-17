import { Children } from "react";

const Modal=({setShowModal,showModal,children,src,title,outline,author})=>{
    const handleClose=()=>{
        setShowModal(!setShowModal)
    }
   
    if(!showModal)
    {
        return null;
    }
    return (
    <div className="modal-container">
    <div className="modal" id="modal">
        <div className="content">
            <img src={src}/>
        </div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{outline}</p>
        <div className="actions">
            <button onClick={handleClose}>
                Close
            </button>
        </div>
    
    </div>
    </div>
    )
}
export default Modal