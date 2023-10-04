

const usersInitialState=[]
const usersReducer=(state=usersInitialState,action)=>{
    switch(action.type){
        case 'CREATE_USER':{
           return [...state,action.payload]
          // return[action.payload,...state]
        }
        case 'GET_USER':{
        
    return[...action.payload]
       
        }
        case 'GET_USER_BY_ID':{
            return state.filter((data)=>{
                return data._id===action.payload._id
            })
        }
        case 'DELETE_USER':{
            return state.filter((data)=>{
                return data._id!==action.payload._id
            })
        }
        default:{
            return[...state]
        }
    }
}
export default usersReducer 