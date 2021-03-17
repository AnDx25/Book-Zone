import {BsThreeDots} from 'react-icons/bs'
import {FiGrid} from 'react-icons/fi'
import {VscListSelection} from 'react-icons/vsc'
import {BsSearch} from 'react-icons/bs'
import Input from '../input/Input'
const Header=({pageHeader,setIsGrid,setSearchInput,isDark})=>{
    const handleGrid=()=>{
       setIsGrid(true);
    }
    const handleList=()=>{
        setIsGrid(false);
    }
    return(
        <div className="header">
            <div className="page-header">
                <div className="heading">
                    <h1 className="heading">{pageHeader}</h1>
                    <BsThreeDots/>
                </div>
            </div>
            
            <div className="action-container">
                <FiGrid onClick={handleGrid} className={"action-icon"}/>
                <VscListSelection onClick={handleList} className={"action-icon"}/>
                <Input icon={<BsSearch/>} isDark={isDark} classes={{inputComponentClassName:"hover-action"}}
                    setSearchInput={setSearchInput}
                />
            </div>
        </div>
    )
}

export default Header