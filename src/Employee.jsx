import React from 'react';
import Table from './Component/Common/Table';
import HocFunction from "./Hoc"
class Employee extends React.Component {
    render() {
        const {count, userList, title,loadApi} = this.props;
       
        return <>
      <input value={"Fetch Data"} onClick={loadApi}/>
        <Table title={title} userList={userList}/>
        </>
    }
}

export default HocFunction(Employee);