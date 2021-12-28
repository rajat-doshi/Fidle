import React from "react";
import Table from "../Component/Common/Table";
import {userList} from "../Redux/actions/userList";
import {connect} from "react-redux";
import ReactPaginate from 'react-paginate';
class User extends React.Component{
    constructor() {
        super();
        this.state={
        userList:[],
        totalRecords:[],
        searchData:"",
        offset: 0,
        data: [],
        perPage: 5,
        currentPage: 0,
        totalPage : 0
    }
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            
        });

    };
    componentDidMount()
    {   const {perPage} = this.state;
        const {userList} = this.props;
       let totalPage= (10/perPage)
       if(/[\.]/.test(String(totalPage)))
       {
           totalPage = parseInt(totalPage)+1
       }
      
       this.setState({totalPage:totalPage})
    }
   fetchUserData=()=>{
       const {fetchUserData}=this.props;
       fetchUserData();
   }
   componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.userList.length>0&&prevState.userList.length==0)
        {
            this.setState({
                userList:this.props.userList,
                totalRecords:this.props.userList
            })
        }
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
 this.setState({userList:newData});
 }
    render() {
      const {userList,searchData} =this.state;
        return (
            <>
                <button onClick={this.fetchUserData}>Fetch User Data</button>
                <br/>
                <input value={searchData} className="form-control" type="text" onChange={this.onSearch} />
             <Table userList={userList}/>
             <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={this.handlePageClick}
        pageRangeDisplayed={2}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
            </>
        );
    }
}
const mapDispatchToProps= (dispatch)=>({
fetchUserData:()=>dispatch(userList())
})
export default connect(state=>state,mapDispatchToProps)(User)
