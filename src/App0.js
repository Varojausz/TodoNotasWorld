import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import SignIn from './components/Signin0'
import { auth } from './config/fbconfig'
import Navbar from './components/layout/Navbar'


function App() {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      
      if(userAuth){
        console.log(userAuth)
        setUser(user)
      }else {
        setUser(null)
      }
    })
    return unsubscribe
  },[])

  return (
    <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              {user? <Home/>: <SignIn/>}
            </Route>
          </Switch>
    </Router>


  );
}

export default App;
