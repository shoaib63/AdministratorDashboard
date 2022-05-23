import './app.css'
import { Switch, Route } from "react-router-dom";

// Components
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";


// Pages
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';



function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Switch>
            <Route path="/user" component={UserList}></Route>
            <Route  path="/" component={Home}></Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
