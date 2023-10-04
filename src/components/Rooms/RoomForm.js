import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetBuilding } from "../../actions/buildingsAction";
import { startGetUser } from "../../actions/usersAction";
const RoomForm = (props) => {
    const{formSubmit,name:rname,userId:ruserId,buildingId:rbuildingId}=props
  const [room, setRoom] = useState(rname?rname:"");
  const [buildingName, setBuildingName] = useState(rbuildingId?rbuildingId:"");
  const [ownerName, setOwnerName] = useState(ruserId?ruserId:"");
  const buildings = useSelector((state) => {
    return state.buildings;
  });
  const users = useSelector((state) => {
    return state.users;
  });

  const handleChange = (e) => {
    if (e.target.name === "room") {
      setRoom(e.target.value);
    }
    if (e.target.name === "buildingName") {
      setBuildingName(e.target.value);
    }
    if (e.target.name === "ownerName") {
      setOwnerName(e.target.value);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetBuilding());
    dispatch(startGetUser());
  }, [dispatch]);
  const handleReset = () => {
    setBuildingName("");
    setOwnerName("");
    setRoom("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData={
        name:room,
        buildingId:buildingName,
        userId:ownerName
    }
    formSubmit(formData)
    setBuildingName('')
    setOwnerName('')
    setRoom('')
    
  };
  return (
    <div>
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <input
          type="text"
          value={room}
          onChange={handleChange}
          name="room"
          placeholder="Enter room name"
        />
        <br />
        <select
          value={buildingName}
          onChange={handleChange}
          name="buildingName"
        >
          <option value="">Select Building Name</option>
          {buildings.map((building) => {
            return (
              <option key={building._id} value={building._id}>
                {building.name}
              </option>
            );
          })}
        </select>
        <br />
        <select value={ownerName} onChange={handleChange} name="ownerName">
          <option value="">Select Owner Name</option>
          {users.map((user) => {
            return (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <br />
        <input type="submit" value="SAVE" />
        &nbsp;&nbsp;&nbsp;
        <input type="reset" value="RESET" />
      </form>
    </div>
  );
};
export default RoomForm;
