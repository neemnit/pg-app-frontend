import React, { useState } from "react";
import EditTenant from "./EditTenant";
import { startDeleteTenant } from "../../actions/tenantsAction";
import { useDispatch } from "react-redux";
const TenantItem=(props)=>{
    const{_id,name,aadhar,email,buildingId,roomId,mobile}=props
    const[toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    const dispatch=useDispatch()
    const handleDelete=(_id)=>{
     dispatch(startDeleteTenant(_id))
    }
    return(
        <div>
           {
               toggle?
               <div><EditTenant _id={_id} name={name} aadhar={aadhar} email={email}
               buildingId={buildingId} roomId={roomId} mobile={mobile} handleToggle={handleToggle}/>
               <button onClick={handleToggle}>Cancel</button></div>: <div><p>{name}--{aadhar}--{email}--{mobile}</p>
               <button onClick={handleToggle}>Edit</button>
               <button onClick={()=>{handleDelete(_id)}}>Delete</button></div>
           }
        </div>
    )
}
export default TenantItem