import React from 'react'
/* import Form from './Form' */
import { auth } from '../../config/fbconfig'

const Home = () => {
    return (


        <div className="App">
            <h1>Home sweet home, groove street</h1>
            <p><button onClick={()=>auth.signOut()}>Sign Out</button></p>
            
            <div className="container">
                <div className="row">
                    <div className="col-4 align-self-center"><Form/></div>
                    <div className="col-8 align-self-center">NoteList</div>
                </div>
            </div>
        </div>
    )
}

export default Home

