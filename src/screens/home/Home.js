import { useEffect, useState } from "react"
import GridComponent from "../../components/gridComponent/GridComponent";
import ListComponent from '../../components/listComponent/ListComponent';
import Header from "../../components/header/Header"
import {useMemo} from 'react'
//import data from '../../data/data'
const Home=({isDark})=>{
    /**
     * isGrid will be used to set the layout 
     * If isGrid is set then the data will be displayed in grid manner
     * If is Grid not set then data will be displayed in list manner
     */
    const [isGrid,setIsGrid]=useState(true);
    //Setting the state of search input it will be changing as soon as user start searching in search box
    const [searchInput,setSearchInput]=useState('')
    //Setting the state of data which will be going to contain the data getting fetched from api
    const [data,setData]=useState([]);

    //Component Did mount phase used to set the data into data array 
    useEffect(()=>{
        fetch("http://localhost:3000/data/BookCollection.json")
        .then(response=>response.json())
     .then(data=>setData(data.items))
     .catch((err)=>{
         console.log(err)
     })  
      },[])

      //This react hook is used to return filtered data based on the query given by the user
      const result=useMemo(()=>{
        return data.filter((value)=>{
            //Destructuring the value of a book object
            const {title,Author,genere}=value;
            //Converting all of them to lowercase so to handle any kind of query
            const lowerCaseTitle=title.toLowerCase();
            const lowerCaseAuthor=Author.toLowerCase();
            const loweCaseGenere=genere.toLowerCase();
            const lowerCaseSearchInput=searchInput.toLowerCase();
            console.log(lowerCaseTitle,lowerCaseSearchInput)

            //Returning results on the basis of search input contains title or author or genre of book
            return lowerCaseTitle.includes(lowerCaseSearchInput) || lowerCaseAuthor.includes(lowerCaseSearchInput)|| loweCaseGenere.includes(lowerCaseSearchInput)
        })
    },[searchInput])
    return(
        <div className="home-container">
            {/* Header component */}
            <Header pageHeader="Book Library" 
            setIsGrid={setIsGrid}
            setSearchInput={setSearchInput}
            isDark={isDark}
            />
            <hr/>
            {
                // Conditional rendering based on if isGrid is Set or not
                //Grid Component
                isGrid?(
                    <div className="grid-layout">
                {
               //If search input is null the all of the book data will be visible without any filter
                searchInput===''?data.map((book,index)=>(
                    <GridComponent
                    key={index}
                    src={book.img}
                    bookTitle={book.title}
                    author={book.Author}
                    genere={book.genere}
                    readingProgress={book.readingProgress}
                    outline={book.outline}
                    />
                ))://Rendering the Data when search string is provided and data is filtered out
                result.map((book,index)=>(
                    <GridComponent
                    key={index}
                    src={book.img}
                    bookTitle={book.title}
                    author={book.Author}
                    genere={book.genere}
                    readingProgress={book.readingProgress}
                    outline={book.outline}
                    />
                    ))
                 
            }
            </div>
                )://Rendering List Component
                (<div className="list-layout">
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
                    //If search input is null the all of the book data will be visible without any filter
                         searchInput===''?data.map((book,index)=>(
                            <ListComponent
                            key={index}
                            src={book.img}
                            bookTitle={book.title}
                            author={book.Author}
                            genere={book.genere}
                            readingProgress={book.readingProgress}
                            outline={book.outline}
                            />
                        )):
                        //Rendering the Data when search string is provided and data is filtered out
                        result.map((book,index)=>(
                            <ListComponent
                            key={index}
                            src={book.img}
                            bookTitle={book.title}
                            author={book.Author}
                            genere={book.genere}
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

