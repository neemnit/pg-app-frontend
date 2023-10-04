import React from "react";
import{Link,Route} from 'react-router-dom'
import Userlist from "./components/users/Userlist";
import Home from "./components/users/Home";
import BuildingContainer from "./components/Buildings/BuildingContainer";
import RoomContainer from "./components/Rooms/RoomContainer";
import TenantContainer from "./components/Tenants/TenantContainer";
function App(props){
  return(
    <div>
    <h1 style={{textAlign:'center'}}>PG MANAGEMENT SYSTEM</h1>
      
      <Link to='/' style={{textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp; Home &nbsp;&nbsp;&nbsp; </Link>&nbsp;&nbsp;
      <Link to='/users' style={{textDecoration:"none"}}>  &nbsp;&nbsp;&nbsp;&nbsp;OwnerRegister&nbsp;&nbsp;&nbsp;&nbsp;  </Link>&nbsp;
      <Link to='/building' style={{textDecoration:"none"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Building &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> &nbsp;
      <Link to='/room' style={{textDecoration:"none"}}> &nbsp;&nbsp;&nbsp; Add Room &nbsp;</Link>&nbsp;
      <Link to='/tenant' style={{textDecoration:"none"}}> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Tenant  &nbsp;</Link>
      
    <Route path='/' component={Home} exact={true}/>
    <Route path='/users' component={Userlist} exact={true}/>
     <Route path='/building' component={BuildingContainer} exact={true}/>
     <Route path='/room' component={RoomContainer} exact={true}/>
     <Route path='/tenant' component={TenantContainer} exact={true}/>
    </div>
  )
}
export default App