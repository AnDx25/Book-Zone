import { useState } from "react";
import Modal from "../modal/Modal";

const GridComponent=({src,title="",author="",genere="",readingProgress,outline})=>{
    const [showModal,setShowModal]=useState(false);
    const handleCardClick=()=>{
        setShowModal(!showModal);
    }

    return(
        <div onClick={handleCardClick} className="grid-card-container">
            <div className="card" style={{backgroundImage:`url(${src})`,width:"200px",height:"300px"}}>
              <div className="reading-progress">
                   <span>{readingProgress}</span>
              </div>
              <div className="genere">
                <span>{genere}</span>
              </div>

            </div>
            <div className="book-name">
               <span style={{color:"black"}}>  {title}</span>
            </div>
            <div className="author">
              <span style={{color:"black"}}>  {author}</span>
            </div>
            <Modal setShowModal={setShowModal} showModal={showModal}
                src={src}
                title={title}
                outline={outline}
                author={author}
            >
               
            </Modal>
        </div>
    )
}
export default GridComponent;