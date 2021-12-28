const initUserList=[];
 const userListReducer= (state=initUserList,action)=>{
    switch (action.type){
        case 'fetchUser':{
            return action.payload.userData
        }

        default: return state
    }
}
export default  userListReducer