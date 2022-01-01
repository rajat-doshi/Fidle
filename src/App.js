import logo from './logo.svg';
import './App.css';
import Header from "./Component/Common/Header";
import SideBar from "./Component/Common/SideBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User"
import Register from './Pages/Register';
import UserFunctionComponent from './Pages/UserFunction';
import UserComponent from './User';
import Employee from './Employee';



function App() {
    return (
        <>
            <div className='container'>
                <h1>Hoc component</h1>
                <UserComponent title="User"/>
                <br />
                <Employee  title={"Employee"} />
            </div>
            {/* <BrowserRouter>
    
    <div id="wrapper">
    <SideBar/>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
     <Header/>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path='/user' component={User}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/update/:id' component={Register}/>
                    <Route 
                        exact
                        path='/user-function-component'
                        component={UserFunctionComponent}
                     />
                </Switch>
            </div>
        </div>


    </div>
</BrowserRouter> */}
        </>
    );
}

export default App;
