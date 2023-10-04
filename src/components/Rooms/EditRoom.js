import React from "react";
import { useDispatch } from "react-redux";
import RoomForm from "./RoomForm";
import { startUpdateRoom } from "../../actions/roomsAction";
const EditRoom=(props)=>{
    const{_id,buildingId,userId,name,handleToggle}=props
    const dispatch=useDispatch()
    const formSubmit=(formData)=>{
        console.log('editing ',formData)
        dispatch(startUpdateRoom(formData,_id))
        handleToggle()
    }
    return(
        <div>
            <RoomForm formSubmit={formSubmit} buildingId={buildingId}
            userId={userId} name={name}/>
            <button onClick={props.handleToggle}>cancel</button>
        </div>
    )
}
export default EditRoom