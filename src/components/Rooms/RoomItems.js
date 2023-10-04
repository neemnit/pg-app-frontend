import React, { useState } from "react";
import EditRoom from "./EditRoom";
import { startDeleteRoom } from "../../actions/roomsAction";
import { useDispatch, useSelector } from "react-redux";
const RoomItems=(props)=>{
    const{_id,name,userId,buildingId}=props
    console.log('name',name)
    const[toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    const dispatch=useDispatch()
    const handleDelete=(_id)=>{
        const confirm=window.confirm('Are you sure want to delete')
        if(confirm){
            dispatch(startDeleteRoom(_id))
        }
         
    }
    const buildings=useSelector((state)=>{
        return state.buildings
    })
    console.log('buildings',buildings)
    const findBuildingName=(id)=>{
        console.log('buildingid',id)
        const find=buildings.find((building)=>{
            return building._id===id
        })
        if(find){
            return find.name
        }
        else{
            return 'the'
        }
    }

    return(
        <div>    
                
            {
                toggle?<EditRoom handleToggle={handleToggle} _id={_id} name={name} userId={userId}
                 buildingId={buildingId}/>:<div>
                 {name} {findBuildingName(buildingId)}  <button onClick={handleToggle}>Edit</button>
                 <button onClick={()=>{handleDelete(_id)}}>Delete</button></div>
            }
           </div>
       
    )
}
export default RoomItems