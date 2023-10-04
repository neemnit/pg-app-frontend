import { useSelector } from "react-redux";
const ShowCount=(props=>{
    const count=useSelector((state)=>{
        return state.count
    })
    return(<div>
        <img src='logo192.png'/>
        <h4>Counter-{count}</h4></div>
    )
})
export default ShowCount