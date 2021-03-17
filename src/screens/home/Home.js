import { useEffect, useState } from "react"
import GridComponent from "../../components/gridComponent/GridComponent";
import ListComponent from '../../components/listComponent/ListComponent';
import Header from "../../components/header/Header"
import {useMemo} from 'react'
//import data from '../../data/data'
const Home=()=>{
    const [isGrid,setIsGrid]=useState(true);
    const [searchInput,setSearchInput]=useState()
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/data/BookCollection.json")
        .then(response=>response.json())
     .then(data=>setData(data.items))
     .catch((err)=>{
         console.log(err)
     })  
      })

      const result=useMemo(()=>{
        return data.filter((value)=>{
            const {title}=value;

            return title.includes(searchInput)
        })
    },[searchInput])
    return(
        <div className="home-container">
            <Header pageHeader="Book Library" 
            setIsGrid={setIsGrid}
            setSearchInput={setSearchInput}

            />
            <hr/>
            {
                isGrid?(
                    <div className="grid-layout">
            {
                result.map((book,index)=>(
                    <GridComponent
                    key={index}
                    src={book.img}
                    title={book.title}
                    author={book.Author}
                    genere={book.genere}
                    readingProgress={book.readingProgress}
                    outline={book.outline}
                    />
                    ))
                // searchInput.length==="null"?data.map((book,index)=>{
                //     <GridComponent
                //     key={index}
                //     src={book.img}
                //     title={book.title}
                //     author={book.Author}
                //     genere={book.genere}
                //     readingProgress={book.readingProgress}
                //     outline={book.outline}
                //     />
                // }):result.map((book,index)=>(
                //     <GridComponent
                //     key={index}
                //     src={book.img}
                //     title={book.title}
                //     author={book.Author}
                //     genere={book.genere}
                //     readingProgress={book.readingProgress}
                //     outline={book.outline}
                //     />
                //     ))
                 
            }
            </div>
                ):(<div className="list-layout">
                   <div className="list-header">
                        <div className="header-component">
                            <label>Book Title & Author</label>
                        </div>
                        <div className="header-component">
                            <label>Genre</label>
                        </div>
                        <div className="header-component">
                            <label>Reading Progress</label>
                        </div>
                   </div>
                   {
                        result.map((book,index)=>(
                            <ListComponent
                            key={index}
                            src={book.img}
                            bookTitle={book.title}
                            author={book.Author}
                            genre={book.genere}
                            readingProgress={book.readingProgress}
                            outline={book.outline}

                            />
                            ))
                   }
                </div>)
            }
            
            
          

        
           
            
        </div>
    )
}
export default Home

