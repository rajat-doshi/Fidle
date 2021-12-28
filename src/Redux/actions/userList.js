import axios from "axios";
export const userList =()=>{
return dispatch=>{
    axios.get("https://reqres.in/api/products/").then(response=>{

        return dispatch({type:"fetchUser",payload:{userData:response.data.data}})

    })

}
}