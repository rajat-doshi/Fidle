import { get, post } from "./httpInterceptor"

export const signup =(obj)=>{
    return post("/rest-api/signup.php",obj).then(res=>res)
}

export const getUserDetails=(id) =>{
    return get(`/rest-api/user-detail.php?user_id=${id}`)
}

export const getAllUserDetails = () =>{
    return get("/rest-api/user-list.php").then(res=>res)
}
export const updateUser = (obj)=>{
    return post("/rest-api/user-update.php",obj)
}