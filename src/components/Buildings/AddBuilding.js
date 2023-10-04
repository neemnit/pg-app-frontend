import React from "react";
import { useDispatch } from "react-redux";
import BuildingForm from "./BuildingForm";
import { startCreateBuilding } from "../../actions/buildingsAction";
const AddBuilding=(props)=>{
    const dispatch=useDispatch()
    const formSubmit=(building)=>{
        dispatch(startCreateBuilding(building))
    }
    return(
        <div>
           <h2>Add New Building</h2> 
            <BuildingForm formSubmit={formSubmit}/>
        </div>
    )
}
export default AddBuilding