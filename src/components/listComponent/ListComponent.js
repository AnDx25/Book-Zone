import Modal from "../modal/Modal"
import {useState} from 'react'
const ListComponent=({src,bookTitle,author,genre,readingProgress,outline})=>{
    const [showModal,setShowModal]=useState(false);
    const handleCardClick=()=>{
        setShowModal(!showModal);
    }

    return(
        <div className="list-container" onClick={handleCardClick}>
            <div className="book-title-auth">
                <img src={src}/>
                <div className="title-auth">
                    <p className="title">{bookTitle}</p>
                    <p className="author">{author}</p>
                </div>
            </div>
            <p className="list-genere">{genre}</p>
            <p className="list-reading-progress">{readingProgress}</p>
            <Modal setShowModal={setShowModal} showModal={showModal}
                src={src}
                bookTitle={bookTitle}
                outline={outline}
                author={author}
            >
                
            </Modal>
        </div>
    )
}

export default ListComponent;