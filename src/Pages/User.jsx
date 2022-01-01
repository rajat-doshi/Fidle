import React from "react";
import Table from "../Component/Common/Table";
import {userList} from "../Redux/actions/userList";
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import "bootstrap3/less/bootstrap.less"
import { getAllUserDetails } from "../utils/services/user";
class User extends React.Component{
    constructor() {
        super();
        this.state={
        userList:[],
        totalRecords:[],
        searchData:"",
        loading:false,
        activePage:1,
        perPage:2,
        totalItem:0


    }
    }
   componentDidMount()
   {
       this.getAllUser()
   }
  getAllUser =() =>{
      this.setState({loading:true})
    getAllUserDetails().then(res=>{
       if(res.data.resStatus==="Success")
       {
           this.setState({
               userList:res.data.resData,
               loading:false,
               totalItem:res.data.resData.length
            })
       }
    })
  }

 
 onSearch = (e) =>{
 const {value} = e.target;
 const {userList,totalRecords}= this.state;
 const newData = totalRecords.filter(res=>{
     if(res.color.includes(value)|| res.name.includes(value))
     {
     return res;
     }
 })
 this.setState({userList:newData,});
 }
 handlePagination=(pageNo)=>{
  this.setState({activePage:pageNo})
 }
    render() {
      const {userList,searchData,loading, activePage,totalItem,perPage} =this.state;
        return (
            <>
              {loading&&<h1>Loading...</h1>}
                <br/>
                <input value={searchData} className="form-control" type="text" onChange={this.onSearch} />
             <Table userList={userList} activePage={activePage} perPage={perPage}/>
                {/* <Pagination
                    activePage={activePage}
                    itemsCountPerPage={perPage}
                    totalItemsCount={totalItem}
                   // pageRangeDisplayed={10}
                    onChange={this.handlePagination}
                /> */}
            </>
        );
    }
}
const mapDispatchToProps= (dispatch)=>({
fetchUserData:()=>dispatch(userList())
})
export default connect(state=>state,mapDispatchToProps)(User)
