import React from "react";
import { useDispatch } from "react-redux";
import TenantForm from "./TenantForm";
import { startUpdateTenant } from "../../actions/tenantsAction";
const EditTenant=(props)=>{
    const{_id,name,aadhar,email,buildingId,roomId,mobile,handleToggle}=props
    const dispatch=useDispatch()
    const formSubmit=(formData)=>{
         dispatch(startUpdateTenant(formData,_id))
         handleToggle()
    }
    return(
        <div>
            <TenantForm name={name} aadhar={aadhar} email={email} buildingId={buildingId}
            roomId={roomId} mobile={mobile} formSubmit={formSubmit}/>
        </div>
    )
}
export default EditTenant