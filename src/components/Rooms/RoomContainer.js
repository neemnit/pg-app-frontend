import React from "react";
import AddRoom from "./AddRoom";
import Roomlist from "./Roomlist";
const RoomContainer=(props)=>{

    return(
        <div>
           <h2> Add Room</h2>
                <AddRoom/>
                <Roomlist/>
        </div>
    )
}
export default RoomContainer