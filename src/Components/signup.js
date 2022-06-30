import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {auth} from '../Config/firebase'
import React, {useState} from 'react'
import '../CSS/registerstyle.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'

function SignUp (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    
    const Register = (()=>{
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/homepage")
        }).catch((error)=>{
            console.log(error);
        })

    })

    return(
        <div className="main-div">
            <div className="sub-main">
            <h1>Register Account Here</h1>
            <input /*className='input1'*/ type="email" placeholder="Enter your email" onChange={((e)=> setEmail(e.target.value))}/>
            <input /*className='input1'*/ type="password" placeholder="Enter your password" onChange={((e)=> setPassword(e.target.value))}/>
            <button id="btn" onClick={Register}>signup</button>
            </div>
            
        </div>
    )
}
export default SignUp;