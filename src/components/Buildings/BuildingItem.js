import React, { useState } from "react";
import EditBuidling from "./EditBuilding";
import { startDeleteBuilding } from "../../actions/buildingsAction";
import { useDispatch, useSelector } from "react-redux";

const BuildingItem = (props) => {
  const { _id, name, address, landMark, userId } = props;
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    const result = !toggle;
    setToggle(result);
  };
  const dispatch = useDispatch();
  const handleDelete = (_id) => {
    dispatch(startDeleteBuilding(_id));
  };
  const users = useSelector((state) => {
    return state.users;
  });

 
 const handleName=(name)=>{
     if(name==="ownerName"){
        alert('Owner Name')
     }
     else if(name==="BuildingName"){
         alert('BuildingName')
     }
     else if(name==="Building Address"){
         alert('Building Address')
     }
     else if(name==="LandMark"){
         alert('LandMark')
     }
 }
 

  return (
    <div>
        
      {toggle ? (
        <div>
          <EditBuidling
            _id={_id}
            name={name}
            handleToggle={handleToggle}
            address={address}
            landMark={landMark}
            userId={userId}
          />
          <button onClick={handleToggle}>Cancel</button>
        </div>
      ) : (
        <div>
                
                &nbsp; &nbsp;  &nbsp;  &nbsp; <span onMouseEnter={()=>{handleName("BuildingName")}}>{name} </span> 
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  <span  onMouseEnter={()=>{handleName("Building Address")}}>{address}</span> 
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  <span  onMouseEnter={()=>{handleName("LandMark")}}>{landMark}</span> 
                &nbsp;  &nbsp;  &nbsp;  &nbsp; <span><button onClick={handleToggle}>Edit</button></span>  &nbsp;  &nbsp; 
                 <span><button
                    onClick={() => {
                      handleDelete(_id);
                    }}
                  >
                    Delete
                  </button></span> 
                
            
                  
          
        </div>
      )}
    </div>
  );
};
export default BuildingItem;
