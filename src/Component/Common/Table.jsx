import React from "react";

class Table extends React.Component{
    constructor()
    {
        super();
       
    }
   

    render() {
        const {userList, activePage,perPage, title}=this.props;
       
        return(<>
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">{title}</h1>
                <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                    For more information about DataTables, please visit the <a target="_blank"
                                                                               href="https://datatables.net">official
                        DataTables documentation</a>.</p>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                    
                                </tr>
                                </thead>

                                <tbody>
                                    {activePage}
                                { userList.map((res,index)=>{
                                    const newIndex= index+1;
                                    const limit = activePage+perPage;

                                     
                                        return(<tr>
                                            <td>{res.id}</td>
                                            <td>{res.first_name}</td>
                                            <td>{res.last_name}</td>
                                            <td>{res.name}</td>
                                            <td>{res.email}</td>
                                            <td>
                                               
                                                <input 
                                                type="button" 
                                                value="edit"
                                                />
                                              
                                            </td>
                                            
                                        </tr>)
                                
                                
                                })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
               
            </div> </>)
    }
}

export default Table;