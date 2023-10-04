import React, { useEffect } from "react"
import AddBuilding from "./AddBuilding"
import BuildingList from "./BuildingList"
import { startGetBuilding } from "../../actions/buildingsAction"
import { useDispatch } from "react-redux"
const BuildingContainer=(props)=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetBuilding())
    },[dispatch])
   return(
       <div>
    
        <AddBuilding/>
        <BuildingList/>
       </div>
   )
}
export default BuildingContainer