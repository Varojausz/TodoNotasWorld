import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'

import {Layout} from './components/Layouts'
import Menu from './components/Menu'
import { ThemeProvider } from 'styled-components'

import Favorites from './components/tasks/Favorites'
import TaskDetail from './components/tasks/TaskDetail'
import EditTask from './components/tasks/EditTask'
import MisNotas from './components/tasks/MisNotas'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>

    <Layout headerHeight={"3rem"}>
      <Switch>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/favorites" component={Favorites}/>
        <Route exact path="/misnotas" component={MisNotas}/>
        <Route exact path="/task/:id" component={TaskDetail}/>
        <Route exact path="/edittask/:id" component={EditTask}/>
      </Switch>
    </Layout>
        

    </Router>


  );
}

export default App;