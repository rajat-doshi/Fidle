import React from "react";
import { getAllUserDetails } from "./utils/services/user";

const HocFunction =(Component)=>{
    return class HocCompoent extends React.Component{
        constructor(){
            super()
            this.state={
                count:0,
                userList:[],
                loading:false,
            }
        }
        handleClick =()=>{
            alert("sdgd")
            const{count} = this.state;
            this.setState({count:count+1});
        }
       loadApi=()=>{
           this.setState({loading:true})
        getAllUserDetails().then(res=>{
            if(res.data.resStatus==="Success")
            {
                this.setState({
                    userList:res.data.resData,
                    loading:false
                   
                 })
            }
         })
       }
        render(){
            const {count,userList,loading} = this.state;
            const {loadApi} = this;

            return <>
            {loading&&<h1>Loading....</h1>}
           
            <Component
            userList={userList}
            {...this.props}
            loadApi={loadApi}
            />

            
            </>
        }
    }
}

export default HocFunction;