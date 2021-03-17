import {AiOutlinePlayCircle} from 'react-icons/ai'
import {GrAddCircle} from 'react-icons/gr'
import {CgDarkMode} from 'react-icons/cg'
import Home from '../../screens/home/Home'
import { useState } from 'react'
const Dashboard=({children})=>{
    const handleDarkMode=()=>{
        
    }
    return(
        <div className="dashboard-layout">
            <div className="side-nav-bar">
                <div className="nav-container">
                    <h2>Library</h2>
                    <div className="container">
                       
                        <div className="options">
                            <AiOutlinePlayCircle/>
                            <label>My Books</label>
                            <span>15</span>
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
            <div className="main-container">
               <Home />
            </div>
        </div>
    )
}
export default Dashboard