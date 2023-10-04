import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetTenant } from "../../actions/tenantsAction";
import TenantItem from "./TenantItem";
const Tenantlist=(props)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
         dispatch(startGetTenant())
    },[dispatch])
    const tenants=useSelector((state)=>{
        return state.tenants
    })
    
    return(
        <div>
           {
               tenants.map((tenant)=>{
                   return <TenantItem key={tenant._id} {...tenant}/>
               })
           }
        </div>
    )
}
export default Tenantlist