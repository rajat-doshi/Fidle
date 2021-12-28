import React from "react";
import {limitChec, regexChec} from "../utils/helper"
import {register} from '../utils/form';
import Input from "../Component/Common/Input";
import ReactPaginate from 'react-paginate';
const initForm ={
    first_name:"",
    last_name:"",
    error:{
        first_name:false,
        last_name:false
    }
}
class Register extends React.Component{
    constructor()
    {
        super();
        this.state= {form:initForm}
    }

    onChange = (name,value,err)=>{
      const {form} = this.state;
      const {error}= form;
      this.setState({
          form:{
              ...form,
              [name]:value,
              error:{
                  ...error,
                  [name]:err
                }
            }})
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
    render(){
        const {form}= this.state;
        const {error}= form;

        return(<> 
        <div className="container">
            {register.map(props=>{
                const {name} = props;
             return<> 
              <Input 
             {...props}
             value={form[name]}
             error= {error[name]}
             onChangeFunction = {this.onChange}
             />
             </>
            })}
             <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={this.handlePageClick}
        pageRangeDisplayed={2}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
        </div>
        </>)
    }
}

export default Register