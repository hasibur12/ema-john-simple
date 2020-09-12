import React from 'react';
import Auth from '../use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    return (
    
        <div>
           <h1>join the party</h1> 
           {    auth.user ? <button onClick = {auth.signOut}>Sign Out</button> :
               <button onClick = {auth.signInWithGoogle}>Sign In </button>
           }
           
        </div>
    );
};

export default Login;