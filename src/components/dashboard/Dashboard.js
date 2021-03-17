import {AiOutlinePlayCircle} from 'react-icons/ai'
import {GrAddCircle} from 'react-icons/gr'
import {CgDarkMode} from 'react-icons/cg'
import Home from '../../screens/home/Home'
import { useState } from 'react'
const Dashboard=({children})=>{
    //isDark  will be used to handle the class of dashboard if it is of dark mode or not
    const [isDark,setIsDark]=useState(false)
    //Depending upon the state of isDark Dashboard class will be set accordingly
    const [dashboardClass,setDashBoardClass]=useState("dashboard-layout-white")
   
    //To handle once the Dark mode from settings is clicked
    const handleDarkMode=()=>{
        setIsDark(!isDark)
        isDark?setDashBoardClass("dashboard-layout-dark"):setDashBoardClass("dashboard-layout-white")
        
    }

    return(
      
        <div className={dashboardClass}>
            {/* This is navigation bar which will remain common for all of the screens coming up */}
            <div className="side-nav-bar">
                <div className="nav-container">
                    <h2>Library</h2>
                    <div className="container">

                        <div className="options">
                            <AiOutlinePlayCircle/>
                            <label>My Books</label>
                        </div>
                        <div className="options">
                            <GrAddCircle/>
                            <label>Add New Books</label>
                        </div>
                    </div>
                    <h2>Settings</h2>
                    <div className="container">
                        
                        <div className="options">
                            <CgDarkMode/>
                            <label className="dark-mode" onClick={handleDarkMode}>Dark Mode</label>
                            <span>{}</span>
                        </div>
                    </div>
                </div>             
            </div>
            {/* This is the container to represent the screens*/}
            <div className="main-container">
                
               <Home isDark={isDark}/>
            </div>
        </div>
    )
}
export default Dashboard