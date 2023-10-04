import axios from '../config/axios'

export const startCreateTenant=(formData)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.post('/api/tenant',formData)
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }
            else{
                dispatch(createTenant(result))
            }
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const createTenant=(result)=>{
    return{
        type:'CREATE_TENANT',
        payload:result
    }
}
export const startGetTenant=()=>{
    return async (dispatch)=>{
        try{
            const response=await axios.get('/api/tenant')
            const result=response.data
            dispatch(getTenant(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const getTenant=(result)=>{
    return{
        type:'GET_TENANT',
        payload:result
    }
}
export const startUpdateTenant=(formData,_id)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.put(`/api/tenant/${_id}`,formData)
            const result=response.data
            dispatch(updateTenant(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
    
}
const updateTenant=(result)=>{
    return{
        type:'UPDATE_TENANT',
        payload:result
    }
}
export const startDeleteTenant=(_id)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.delete(`/api/tenant/${_id}`)
            const result=response.data
            dispatch(deleteTenant(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const deleteTenant=(result)=>{
    return{
        type:'DELETE_TENANT',
        payload:result
    }
}