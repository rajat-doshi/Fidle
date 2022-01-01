import axios from "axios";
export const userList =()=>{
return dispatch=>{
    axios.get("http://localhost/rest-api/user-detail.php?user_id=1").then(response=>{
        return dispatch({type:"fetchUser",payload:{userData:response.data.data}})
  })
}}