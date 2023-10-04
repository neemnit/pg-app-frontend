import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import buidlingsReducer from '../reducers/buildingsReducer'
import roomsReducer from '../reducers/roomsReducer'
import tenantsReducer from '../reducers/tenantsReducer'
  const configureStore=()=>{
const store= createStore(combineReducers({
users:usersReducer,
buildings:buidlingsReducer,
rooms:roomsReducer,
tenants:tenantsReducer
}),applyMiddleware(thunk))
return store
  }
  export default configureStore 