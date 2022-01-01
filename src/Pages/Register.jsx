import React from "react";
import {limitChec, regexChec} from "../utils/helper"
import {register} from '../utils/form';
import { getUserDetails, signup, updateUser } from "../utils/services/user";
import Input from "../Component/Common/Input";

const initForm ={
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    role: "",
    error:{
        first_name:false,
        last_name:false,
        email: false,
        password: false,
        role: false,
    }
}
class Register extends React.Component{
    constructor()
    {
        super();
        this.state= {form:{...initForm}}
    }
    componentDidMount()
    {
        const {match,location} = this.props;
        const {params}=match;
        const {pathname}= location
        if(pathname.includes("/update"))
        {
            this.getUserDetailsById(params.id)
        }
       
    }
    getUserDetailsById=(id)=>{
        const {form} =this.state;
        getUserDetails(id).then(res=>{
            if(res.data.resStatus=== "Success")
            {
           this.setState({form:{...form,...res.data.resData[0]}})
            }
        })
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
   onSignp = () =>{
    const {form}= this.state;
    let formData ={...form};
    delete formData.error
    signup(formData)
   } 

   onUpdateUser=()=>{
    const {form}= this.state;
    
    let formData= new FormData();
    console.log(Object.keys(initForm))
     Object.keys(initForm).map(key=>{
         if(key!=='error')
         formData.append(key,form[key])
     })
    updateUser(formData).then(res=>{
            
    })
   }
    render(){
        const {form}= this.state;
        const {error}= form;
        const {location} = this.props;
        const {pathname} = location;
        const {onSignp,onUpdateUser} = this;
        let isRegister= pathname.includes('/register')?true:false
        return(<>
        <h1>{isRegister?"Sign-up":"Update User"}</h1>
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
        <div className="row mt-2">
        <div className="col-lg-8">
            {
            pathname.includes('/register')?
            <input 
             type="button" 
             value="Submit" 
             className="form-control" 
             onClick={this.onSubmit} />:
             <input 
             type="button" 
             value="Update User" 
             className="form-control" 
             onClick={this.onUpdateUser} />
            }
        
        </div>
        </div>
        </div>
        </>)
    }
}

export default Register