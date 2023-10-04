const tenantInitialState=[]
const tenantsReducer=(state=tenantInitialState,action)=>{
    switch(action.type){
        case 'CREATE_TENANT':{
            return[action.payload,...state]
        }
        case 'GET_TENANT':{
            return[...action.payload]
        }
        case 'UPDATE_TENANT':{
            return state.map((data)=>{
                if(data._id===action.payload._id){
                    return action.payload
                }
                else{
                    return data
                }
            })
        }
        case 'DELETE_TENANT':{
            return state.filter((data)=>{
                return data._id!==action.payload._id
            })
        }
        default:{
            return state
        }
    }
    
}
export default tenantsReducer