const buildingsInitialState=[]
const buidlingsReducer=(state=buildingsInitialState,action)=>{
    switch(action.type){
        case 'CREATE_BUILDING':{
            return[action.payload,...state]
        }
        case 'GET_BUILDING': {
             return [...action.payload]
        }
        case 'UPDATE_BUILDING':{
            return state.map((data)=>{
                if(data._id===action.payload._id){
                    return action.payload
                }
                else{
                    return data
                }
            })
        }
        case 'DELETE_BUILDING':{
            return state.filter((data)=>{
                return data._id!==action.payload._id
            })
        }
        default:{
            return [...state]
         }
    }
 
}
export default buidlingsReducer