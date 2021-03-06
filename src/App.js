import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Spotify from './components/Spotify'
import Test from './components/Tests/Test'
import Dashboard from './components/dashboard/Dashboard'


import {Layout} from './components/Layouts'
import Menu from './components/Menu'
import { ThemeProvider } from 'styled-components'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


import Profile from './components/Profile'
import Edit from './components/Edit'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
    <ToastContainer/>
    <Layout headerHeight={"3rem"}>
      <Switch>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/spotify" component={Spotify}/>
        <Route path="/tests" component={Test}/>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/edit" component={Edit}/>
        {/* <Route exact path="/edittask/:id" component={EditTask}/> */}
      </Switch>
    </Layout>
        

    </Router>


  );
}

export default App;