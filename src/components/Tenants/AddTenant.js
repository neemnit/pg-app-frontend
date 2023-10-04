import React from "react";
import TenantForm from "./TenantForm";
import { startCreateTenant } from "../../actions/tenantsAction";
import { useDispatch } from "react-redux";
const AddTenant=(props)=>{
    const dispatch=useDispatch()
    const formSubmit=(formData)=>{
        console.log('formtenant',formData)
        dispatch(startCreateTenant(formData))
    }
    return(
        <div>
            AddTenant
            <TenantForm formSubmit={formSubmit}/>
        </div>
    )
}
export default AddTenant