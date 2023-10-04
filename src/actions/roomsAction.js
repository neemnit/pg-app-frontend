
import axios  from "../config/axios";

export const startCreateRoom=(formData)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.post('/api/room',formData)
            const result=response.data
           if(result.hasOwnProperty('errors')){
               alert(result.message)
           }
           else{
               dispatch(createRoom(result))
           }
       
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const createRoom=(result)=>{
    return{
        type:'CREATE_ROOM',
      payload:result
    }
}
export const startGetRoom=()=>{
    return async (dispatch)=>{
        try{
        const response=await axios.get('/api/room')
        const result=response.data
        dispatch(getRoom(result))
    }
    catch(e){
        console.log(e.message)
    }
    }
}
const getRoom=(result)=>{
    return{
        type:'GET_ROOM',
        payload:result
    }
}
export const startUpdateRoom=(formData,_id)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.put(`/api/room/${_id}`,formData)
            const result=response.data
            dispatch(updateRoom(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const updateRoom=(result)=>{
    return{
        type:'UPDATE_ROOM',
        payload:result
    }
}
export const startDeleteRoom=(_id)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.delete(`/api/room/${_id}`)
            const result=response.data
            dispatch(deleteRoom(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const deleteRoom=(result)=>{
    return{
        type:'DELETE_ROOM',
        payload:result
    }
}