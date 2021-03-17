import React, { Fragment } from 'react'

const defaultClasses={
    inputClassName:"",
    labelClassName:"",
    iconClassName:"",
    inputComponentClassName:"",
    inputIconContainer:""
}
const Input=({type="text",value,name="",label="",id="",icon="",classes={...defaultClasses},placeholder,setSearchInput,
onFocus=()=>{},onBlur=()=>{},errors,isDark})=>{
    const onChangeHandler=(event)=>{
        setSearchInput(event.target.value);
    }
    const {inputClassName,labelClassName,iconClassName,inputComponentClassName,inputIconContainer}=classes
    return(
        <Fragment>
        <div className={`input-component ${inputComponentClassName}`}>
            {
                label &&( <label className={`label ${labelClassName}`}>{label}</label>)
            }
           <div className={`input-icon-container ${inputIconContainer}`}>
            <input id={id} onChange={onChangeHandler} className={`input ${inputClassName}`} type={type} value={value} name={name} placeholder={placeholder}
            onFocus={onFocus} 
            onBlur={onBlur}
            />
            {/* id={id} onChange={onChange} className={`input ${inputClassName}`} type={type} value={value} name={name} placeholder={placeholder} */}
            {icon}
            </div>
            
            
        </div>
        {errors &&<p className="input-error">{errors}</p>}
        </Fragment>
       
    )
}
export default Input;