import React from 'react';
import Input from './Input';

function Login(props) {
    return (        
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {props.showRegistration === "true" ? <Input type="password" placeholder="Confirm Password" /> : null}
            {props.showRegistration === "true" ?  <button type="submit">Register</button> : <button type="submit">Login</button>}      
            {console.log(props.showRegistration)}      
        </form>     
    )
}

export default Login;
