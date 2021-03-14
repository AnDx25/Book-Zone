import { useEffect, useState } from "react"
import Header from "../../components/header/Header"

const Home=()=>{
    const [isGrid,setIsGrid]=useState(true);

    useEffect(()=>{
        fetch("https://api.jsonbin.io/b/604e2c21683e7e079c4f2859")
        .then(response=>response.json())
        .then(data=>console.log(data))
        
        
    })
    return(
        <div className="home-container">
            <Header pageHeader="Book Library" 
            setIsGrid={setIsGrid}

            />
            <hr/>
            {
                //isGrid?(<p>Grid Me dikhao</p>):(<p>List Me Dikhao</p>)
                
            }
            
        </div>
    )
}
export default Home

