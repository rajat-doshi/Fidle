import React from "react";
import ReactPaginate from 'react-paginate';
class Table extends React.Component{
    constructor()
    {
        super();
        this.state = {
           
      }
    }
   

    render() {
        const {userList}=this.props
        return(<>
            <div className="container-fluid">


                <h1 className="h3 mb-2 text-gray-800">User</h1>
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
                                    <th>color</th>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>pantone_value</th>
                                    <th>year</th>
                                    
                                </tr>
                                </thead>

                                <tbody>
                                {userList.map(res=>{
                                return(<tr>
                                    <td>{res.color}</td>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.pantone_value}</td>
                                    <td>{res.year}</td>
                                    
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