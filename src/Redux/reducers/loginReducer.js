
const initLogin ={isLogin:false}
const loginReducer = (state= initLogin,action)=>{
    switch (action.type){
        case 'login': {
            return {...state,...action.payload}
        }
        default: return state;
    }

}
export default loginReducer;