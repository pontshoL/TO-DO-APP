import '../CSS/loginstyle.css'
import {useHistory} from 'react-router-dom'
import profile from '../Image/user.png';
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Config/firebase'
import React,{useState} from 'react'


function LogIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let history = useHistory();
    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
        history.push("/homepage")
    }).catch((error)=>{
        console.log(error);
    })

    
    })
    return(
        // <div className="main-div">
        //     <div className="sub-main">
        //         <h1>Log In</h1>
        //        <input type="email" placeholder="Email" onChange={((e)=> setEmail(e.target.value))}/>
        //        <input type="password" placeholder="Password" onChange={((e)=> setPassword(e.target.value))}/>
        //        <button id='btn1' onClick={login}>Log In</button>

        //        <span>Dont have an Account?</span> <span>
        //        <Link to="/sign-up">Create Account Here</Link>
        //     </span>

        //     </div>
        // </div>

        <div className='main1'>
            <div className='subMain1'>
                <div>
                    <div className='img'>
                        <div className='container-image'>
                           <img src={profile} alt='profile' className='profile' />
                        </div>

                        <div>

                        </div>
            
                           <div>
                               <h1>Log In</h1>
                                <div>
                                <input placeholder="email" className='name' onChange={((e)=> setEmail(e.target.value))}/><br></br>
                                </div>
                                <div>
                                <input type={'password'} placeholder="Password" className='name' onChange={((e)=> setPassword(e.target.value))}/><br></br>
                                </div>

                                <button id='btn1'  onClick={login}>Log In</button><br></br>
                                    
                                <span id='span1'>Dont have an Account?<br></br></span><span>
                                <Link to="/sign-up">Create Account Here</Link>
                                </span>
                                
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;