import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetUser } from "../../actions/usersAction";
// import BuildingItem from "./BuildingItem";
const BuildingForm=(props)=>{
    const{formSubmit,name:bname,userId:buserId,address:baddress,landMark:blandMark}=props
    const[user,setUser]=useState(buserId?buserId:'')
    const[buildingName,setBuildingName]=useState(bname?bname:'')
    const[address,setAddress]=useState(baddress?baddress:'')
    const[landmark,setLandMark]=useState(blandMark?blandMark:'')
    const[disabled,setDisabled]=useState(true)
    const[formError,setFormError]=useState({})
    const errors={}
    const users=useSelector((state)=>{
        return state.users
    })
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startGetUser())
    },[dispatch])
    
    const handleChange=(e)=>{
           if(e.target.name==="user"){
               
                if(e.target.value.length!==0){
                   
               setDisabled(false)
                }
                else{
                    
                    setDisabled(true)
                }
                setUser(e.target.value)
                
               
           }
           if(e.target.name==="buildingName"){
               setBuildingName(e.target.value)
           }
           if(e.target.name==="address"){
               setAddress(e.target.value)
           }
           if(e.target.name==="landmark"){
               setLandMark(e.target.value)
           }

    }
    const handleReset=()=>{
        setAddress('')
        setLandMark('')
        setBuildingName('')
        setUser('')
    }
   
    const runValidation=()=>{
        if(user.length===0){
          errors.user='Please Select OwnerName'  
        }
        if(buildingName.length===0){
            errors.buildingName="Please Enter Building Name"
        }
        if(address.length===0){
            errors.address="Please Enter the Address"
        }
        if(landmark.length===0){
            errors.landMark="Please Enter the Landmark"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidation()
        if(Object.values(errors).length===0){
            const formData={
                userId:user,
                name:buildingName,
                address:address,
                landMark:landmark
            }
            formSubmit(formData)
        }else{
            setFormError(errors)
        }
        setUser('')
        setAddress('')
        setBuildingName('')
        setLandMark('')
    }
   

    return(
        <div>
        <form onReset={handleReset} onSubmit={handleSubmit}>
            <select value={user} onChange={handleChange} name="user" >
                <option value=''>Select Owner Name</option>
                {
                    users.map((user)=>{
                        return<option value={user._id} key={user._id}>{user.name}</option>
                    })
                }
            </select><br/>{
                formError.user && <p style={{color:'red'}}>{formError.user}</p>
            }
                <input type='text' value={buildingName} onChange={handleChange} name="buildingName"
            
             disabled={bname?false:disabled} 
            
                placeholder="Enter Building Name"/><br/>{
                    formError.buildingName && <p style={{color:'red'}}>{formError.buildingName}</p>
                }
                <textarea value={address} onChange={handleChange} name="address" placeholder="Enter Address"/><br/>
                {
                    formError.address && <p style={{color:'red'}}>{formError.address}</p>
                }
                <textarea value={landmark} onChange={handleChange} name="landmark" placeholder="Enter Landmark"/><br/>
                {
                    formError.landMark && <p style={{color:'red'}}>{formError.landMark}</p>
                }
                <input type="submit" value={bname?'update':'add'}/>&nbsp;
                <input type='reset' value="Reset"/>
        </form>

        </div>
    )
}
export default BuildingForm
