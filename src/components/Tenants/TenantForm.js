import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetRoom } from "../../actions/roomsAction";
import { startGetBuilding } from "../../actions/buildingsAction";
const TenantForm=(props)=>{
    const{formSubmit,name:tname,aadhar:taadhar,email:temail,roomId:troomId,buildingId:tbuildingId,mobile:tmobile}=props
    const[tenantName,setTenantName]=useState(tname?tname:'')
    const[aadharNumber,setAadharNumber]=useState(taadhar?taadhar:'')
    const[email,setEmail]=useState(temail?temail:'')
    const[room,setRoom]=useState(troomId?troomId:'')
    const[mobileNumber,setMobileNumber]=useState(tmobile?tmobile:'')
    const[building,setBuilding]=useState(tbuildingId?tbuildingId:'')
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startGetRoom())
        dispatch(startGetBuilding())
    },[dispatch])
    const rooms=useSelector((state)=>{
        return state.rooms
    })
    
    const buildings=useSelector((state)=>{
        return state.buildings
    })
    const handleChange=(e)=>{
        if(e.target.name==="tenantName"){
            setTenantName(e.target.value)
        }
        if(e.target.name==="aadharNumber"){
            setAadharNumber(e.target.value)
        }
        if(e.target.name==="email"){
            setEmail(e.target.value)
        }
        if(e.target.name==="mobileNumber"){
            setMobileNumber(e.target.value)
        }
        if(e.target.name==="room"){
            setRoom(e.target.value)
        }
        if(e.target.name==='building'){
            setBuilding(e.target.value)
        }
    }
    const handleReset=()=>{
        
        setTenantName('')
        setRoom('')
        setAadharNumber('')
        setBuilding('')
        setEmail('')
        setMobileNumber('')
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:tenantName,
            aadhar:aadharNumber,
            email:email,
            roomId:room,
            buildingId:building,
            mobile:mobileNumber
        }
        formSubmit(formData)
        setTenantName('')
        setRoom('')
        setAadharNumber('')
        setBuilding('')
        setEmail('')
        setMobileNumber('')
    }


    return(
        <div>
            <form onReset={handleReset} onSubmit={handleSubmit}>
                <input type='text' value={tenantName} onChange={handleChange} placeholder="Enter tenant name"
                name="tenantName"/><br/>
                <input type='number' value={aadharNumber} onChange={handleChange} placeholder="Enter Aadhar No."
                name="aadharNumber"/><br/>
                <input type="email" value={email} onChange={handleChange} placeholder="Enter email" name="email"/><br/>
                <input type='number' value={mobileNumber} onChange={handleChange} placeholder="Enter Mobile No." 
                name="mobileNumber"/><br/>
                <select value={room}  onChange={handleChange} name="room">
                    <option value=''>Select Room</option>
                    {
                        rooms.map((room)=>{
                            return <option value={room._id} key={room._id}>{room.name}</option>
                        })
                    }
                </select><br/>
                <select value={building}  onChange={handleChange} name="building">
                    <option value=''>Select Building</option>
                    {
                        buildings.map((building)=>{
                            return <option value={building._id} key={building._id}>{building.name}</option>
                        })
                    }
                </select><br/>
                <input type='submit' value='save'/>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='reset' value='reset'/>
            </form>
        </div>
    )
}
export default TenantForm