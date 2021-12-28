import logo from './logo.svg';
import './App.css';
import Header from "./Component/Common/Header";
import SideBar from "./Component/Common/SideBar";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import User from  "./Pages/User"
import Register from './Pages/Register';
function App() {
return (
    <>
        <BrowserRouter>
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
                        </Switch>
                    </div>
                </div>


            </div>
        </BrowserRouter>
    </>
  );
}

export default App;
