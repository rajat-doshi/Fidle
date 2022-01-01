import React from "react";
import Table from "./Component/Common/Table";
import HocFunction from "./Hoc"
class User extends React.Component
{
constructor()
{
    super()
    
}
    render(){

        const {count, handleClick, userList, title,loadApi} = this.props;

        return<>
         <input value={"Fetch Data"} onClick={loadApi}/>
       <Table title={title} userList={userList}/>
        </>
    }
}
export default HocFunction(User);