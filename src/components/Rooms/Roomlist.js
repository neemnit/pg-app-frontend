import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetRoom } from "../../actions/roomsAction";
import RoomItems from "./RoomItems";
const Roomlist=(props)=>{
    const rooms=useSelector((state)=>{
        return state.rooms
    })
    
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(startGetRoom())
    },[dispatch])
    return(
        <div><br/>
          <h3> NO.Of Room{
              rooms.length<=1?'':'s'} -{rooms.length}</h3> <br/>
        {
            rooms.map((room)=>{
               return <RoomItems key={room._id} {...room}/>
            })
        }
            
        </div>
    )
}
export default Roomlist