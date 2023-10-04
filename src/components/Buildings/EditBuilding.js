import React from "react";
import { useDispatch } from "react-redux";
import BuildingForm from "./BuildingForm";
import { startUpdateBuilding } from "../../actions/buildingsAction";
const EditBuidling=(props)=>{
    const{_id,name,handleToggle,address,landMark,userId}=props
    const dispatch=useDispatch()
    const formSubmit=(building)=>{
        dispatch(startUpdateBuilding(building,_id))
        handleToggle()
    }
    return(
        <div>
        <BuildingForm _id={_id} name={name} userId={userId}  address={address}  landMark={landMark} formSubmit={formSubmit}/>
        </div>
    )
}
export default EditBuidling