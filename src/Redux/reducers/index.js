import {combineReducers} from "redux";
import loginReducer from "./loginReducer"
import userListReducer from "./userList";
export default combineReducers({
    loginDetails: loginReducer,
    userList: userListReducer
})