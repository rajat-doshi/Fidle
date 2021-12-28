import React from "react";

class Input extends React.Component{
    constructor()
    {
        super()
    }

    checkMaxLength =(value)=>{
        const {title,maxlength} = this.props
        let error = false
        if(maxlength)
        {
            if(value.length>maxlength)
            {
              error = `${title} exceed max length`
            }
        }
        return error;
    }
  onChange = (event)=>{
   const {name,value} = event.target;
   const {onChangeFunction, maxlength, title} = this.props;
   let error = false;
   error = this.checkMaxLength(value)
   onChangeFunction(name,value,error)
  }
  onBlur = (event)=>{
    const {value, name} = event.target;
    const {onChangeFunction,isReq, title} = this.props;
    let error=false;
    error = this.checkMaxLength(value)
    if(isReq)
    {
       if(!value)
       {
           error = `${title} is required`
       }
    }
    onChangeFunction(name,value,error)  
  }
    render (){
     const {type, name, placeholder, value,error} = this.props;
     const {onChange,onBlur} = this;
        return (<> 
        <div className="row mt-2">
                      <div className="col-lg-8">
                        <input 
                           type={type} 
                           name= {name}
                           value={value}
                           placeholder={placeholder}
                           className="form-control"
                           onChange={(e)=>onChange(e)}
                           onBlur={onBlur}
                        />
                        <br/>
                        <span>
                            {error&&error}
                        </span>
                      </div>
                    </div>
        </>)
    }
}
export default Input;