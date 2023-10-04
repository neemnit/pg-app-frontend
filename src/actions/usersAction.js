import axios from '../config/axios'
export const startPostUser=(formData)=>{
    return async (dispatch)=>{
        try{
            const response= await axios.post('/api/user/register',formData)
        const result=response.data
        console.log(result)
        if(result.hasOwnProperty('keyValue')){
            alert('name is already registered')
        }
        else{
            dispatch(createUser(result))
        }
        }
        
        catch(e){
            console.log(e.message)
        }
       
    }
}
const createUser=(result)=>{
return{
    type:'CREATE_USER',
    payload:result
}
}
export const startGetUser=()=>{
    //let result
    return async(dispatch)=>{
        // let result
        try{
           const response=await axios.get('/api/user/register')
           const result=response.data
          console.log('result',result)
        //   if(!result.hasOwnProperty('error')){
        //     dispatch(getUser(result))
        //   }
        dispatch(getUser(result))
        }
        
        catch(e){
            console.log(e.message)
        }
        
    }
   
}
const getUser=(result)=>{
    return{
        type:'GET_USER',
        payload:result
    }
}
export const startDeleteUser=(_id)=>{
    return async (dispatch)=>{
        try{
            const response=await axios.delete(`/api/user/${_id}`)
            const result=response.data
            dispatch(deleteUser(result))
        }
        catch(e){
            console.log(e.message)
        }
    }
}
const deleteUser=(result)=>{
    return{
        type:"DELETE_USER",
        payload:result
    }
}