
import axios from "../config/axios";
export const startCreateBuilding=(formData)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.post('/api/building',formData)
            const result=response.data
            console.log('budda',result)
            if(result.hasOwnProperty('message')){
                alert(result.message)
            }
            else{
                dispatch(createBuilding(result))
            }
           
        }
        catch(e){
            console.log(e)
        }
    }
}
const createBuilding=(result)=>{
    return{
        type:'CREATE_BUILDING',
        payload:result
    }
}
export const startGetBuilding=()=>{
    return async (dispatch)=>{
        try{
        const response=await axios.get('/api/building')
        const result=response.data
         dispatch(getBuilding(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const getBuilding=(result)=>{
    return{
        type:'GET_BUILDING',
        payload:result
    }
}
export const startUpdateBuilding=(building,_id)=>{
    return async  (dispatch)=>{
        try{
        const response=await axios.put(`/api/building/${_id}`,building)
        const result=response.data
        dispatch(updateBuilding(result))
        }
        catch(e){
            console.log(e.message)
        }

    }
}
const updateBuilding=(result)=>{
    return{
        type:'UPDATE_BUILDING',
        payload:result
    }
}
export const startDeleteBuilding=(_id)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.delete(`api/building/${_id}`)
            const result=response.data
            dispatch(deleteBuilding(result))
        }
        catch(e){
             console.log(e.message)
        }
    }
}
const deleteBuilding=(result)=>{
    return{
        type:'DELETE_BUILDING',
        payload:result
    }
}
export const startGetBuildingById=(_id)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.get(`/api/user/register/${_id}`)
            const result=response.data
            dispatch(getUserById(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const getUserById=(result)=>{
    return{
        type:'GET_USER_BY_ID',
        payload:result
    }
}