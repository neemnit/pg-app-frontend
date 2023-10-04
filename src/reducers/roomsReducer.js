const roomInitialState=[]
 const roomsReducer=(state=roomInitialState,action)=>{
     switch(action.type){
         case 'CREATE_ROOM':{
             return[action.payload,...state]
         }
         case 'GET_ROOM':{
             return[...action.payload]
         }
         case 'UPDATE_ROOM':{
             return state.map((data)=>{
                 if(data._id===action.payload._id){
                     return action.payload
                 }
                 else{
                     return data
                 }
             })
         }
         case 'DELETE_ROOM':{
             return state.filter((data)=>{
                 return data._id!==action.payload._id
             })
         }
         default:{
            return state
         }
     }
     
 }
 export default roomsReducer