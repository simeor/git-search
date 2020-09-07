import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search'
import axios from 'axios';
import './App.css';
import PropTypes from 'prop-types';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';


const App = () =>{

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);


useEffect (async() => {
  setLoading(true)
  const res = await axios.get(`https://api.github.com/users?clinet_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  setUsers(res.data.slice(0, 12));
  setLoading(false)
},[])


const searchUsers = async (text) =>{
 setLoading(true)
 const res = await axios.get(`https://api.github.com/search/users?q=${text}&clinet_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 setUsers(res.data.items);
 setLoading(false);
}



const getUser = async (username) =>{
  setLoading(true)
  const res = await axios.get(`https://api.github.com/users/${username}?clinet_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  setUser(res.data);
  setLoading(false);
}


const clearUsers = () =>{
  setUsers([]);
  setLoading(false);
}

const showAlert = (msg, type) => {
 setAlert({msg: msg, type: type})
 setTimeout( ()=> showAlert(null),4000)
}

  return (
  <GithubState>
   <Router>
    <div className="App">
     <Navbar title="Github Search"/>
       <div className="container">
         <Alert alert={alert}/>
         <Switch>
          <Route exact path="/" render={props => (
            <div>
              <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} setAlert={showAlert}/>
              <Users loading={loading} users={users} />
            </div>
            )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" render={props => (
            <User {...props} getUser={getUser} user={user} loading={loading} />
            )}/>
         </Switch>
       </div>
    </div>
   </Router>
   </GithubState >
  );
}

 App.propTypes={
    searchUsers: PropTypes.func
  }

export default App;
