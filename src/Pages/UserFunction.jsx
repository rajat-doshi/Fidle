import React,{useState, useEffect} from "react";
import Pagination from "react-js-pagination";
import Table from "../Component/Common/Table";
import { getAllUserDetails } from "../utils/services/user";
import  {withRouter} from "react-router-dom"
const UserFunctionComponent = (props) =>{
     const [state,setState] = useState({userList:[]});
     const [pagination,setPagination] = useState({
        totalRecords:[],
        activePage:1,
        perPage:2,
        totalItem:0,
        loading:false
     });

     useEffect(()=>{
        fetchUserDetail();
     },[])
    const fetchUserDetail = ()=>{
        setPagination({...pagination,loading:true})
        getAllUserDetails().then(res=>{
          if(res.data.resStatus==='Success')
          {
              setState({userList:res.data.resData})
              setPagination({...pagination,loading:false})
          }
        })
    }
     
     const {userList} = state;
     const  {loading} = pagination;
     const {history} = props;
     console.log(history)
    return <> 
    {loading&&<h3>Loading....</h3>}
    <input type="button" value="Fetch Data" onClick={fetchUserDetail} />
    <Table userList={userList}/>
    </>
}

export default withRouter(UserFunctionComponent)