import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDeleteUser } from "../../actions/usersAction";
import { startPostUser } from "../../actions/usersAction";
import { startGetUser } from "../../actions/usersAction";
const Userlist=()=>{
    const dispatch=useDispatch()
    const users=useSelector((state)=>{
        return state.users
    })
    console.log('users',users)
    useEffect(()=>{
        dispatch(startGetUser())
        
    },[dispatch])
   // console.log('log',log[0]._id)
    const[name,setName]=useState('')
    const [email,setEmail]=useState('')
    
    const handleChange=(e)=>{
        if(e.target.name==="name"){
            setName(e.target.value)
        }
        if(e.target.name==="email"){
            setEmail(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:name,
            email:email
        }
        dispatch(startPostUser(formData))
        setName('')
        setEmail('')
    }
    const handleDelete=(_id)=>{
        if(users.length>1){
            const confirm=window.confirm('Are you want to delete owner info?')
            if(confirm){
                dispatch(startDeleteUser(_id))
            }
            
        }
        else{
             alert('one owner must me required')
        }
        
       
    }
    return(
        <div>
            <h2 style={{textAlign:'center'}}>Register Owner Details</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={handleChange} name="name" placeholder="enter owner name"/><br/>

                <input type='text' value={email} onChange={handleChange} name="email" placeholder="enter email"/><br/>
                <input type='submit' value='save'/>
            </form>
           <table border='1'>
               <thead>
                   <tr>
                       <th>Owner Name</th>
                       <th>Email</th>
                       <th>Id</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       users.map((user)=>{
                           return(
                               <tr key={user._id}>
                                   <td>{user.name}</td>
                                   <td>{user.email}</td>
                                   <td>{user._id}</td>
                                   <td><button onClick={()=>{handleDelete(user._id)}}>Delete</button></td>
                               </tr>
                           )
                       })
                   }
               </tbody>
           </table>
        </div>
    )
}
export default Userlist