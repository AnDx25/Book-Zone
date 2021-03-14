import {AiOutlinePlayCircle} from 'react-icons/ai'
import {GrAddCircle} from 'react-icons/gr'
import {CgDarkMode} from 'react-icons/cg'
const Dashboard=({children})=>{
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
                            <label>Dark Mode</label>
                            <span>{}</span>
                        </div>
                    </div>
                </div>             
            </div>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}
export default Dashboard