import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomForm from "./RoomForm";
import { startCreateRoom } from "../../actions/roomsAction";
const AddRoom=(props)=>{
    const dispatch=useDispatch()
    const rooms=useSelector((state)=>{
        return state.rooms
    })

    
    const formSubmit=(formData)=>{
       
        dispatch(startCreateRoom(formData))
    }
    
    return(
        <div>
            Add Room
            {rooms.length}
            <RoomForm formSubmit={formSubmit}/>
        </div>
    )
}
export default AddRoom