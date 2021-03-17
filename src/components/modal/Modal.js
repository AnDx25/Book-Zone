import { Children } from "react";

const Modal=({setShowModal,showModal,children,src,bookTitle,outline,author})=>{
    //Handelling the close button which will set the show modal
    const handleClose=()=>{
        setShowModal(!showModal)
    }
    //Checking if show Modal is set or not
    if(!showModal)
    {
        return null;
    }
    return (
    <div className="modal-container">
    <div className="modal" id="modal">
        <div className="content">
            {/* Image of Book */}
            <img src={src}/>
        </div>
        {/* Info of book */}
        <h2>{bookTitle}</h2>
        <h3>{author}</h3>
        <p>{outline}</p>
        {/* Containing Close button */}
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