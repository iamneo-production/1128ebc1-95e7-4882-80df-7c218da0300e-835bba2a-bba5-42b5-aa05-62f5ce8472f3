import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/css/loginAndSignUp.css'
import { useDispatch } from 'react-redux';
import { Login } from './Redux/UserSlice';
import {BsFillPersonFill} from 'react-icons/bs'
import { useUser } from './context/UserContext';
import Capture from '../assets/images/Capture.PNG';
const LoginAndSignUp=()=>{
    const navigate = useNavigate();
    const {login: userLogin}=useUser();
    const [isFlipped, setIsFlipped] = useState(false);

    const flipForm = () => {
        setIsFlipped(!isFlipped);
    };
    const dispatch=useDispatch();

    const[loginFormData,setLoginFormData]=React.useState({
        username:"",
        password:""
    })
    const[signUpFormData,setSignUpFormData]=React.useState({
        email:"",
        newUsername:"",
        newPassword:""
    })
    const mystyle={
        backgroundImage:`url('${Capture}')`,
        height:'120vh',
        marginTop:'-20px',
        marginRight:'100px',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
    };

    
    const handleLoginFormChange=(e)=>{
        const [name,value]=[e.target.name,e.target.value];
        setLoginFormData({
            ...loginFormData,
            [name]: value
        })
    }
    
    const handleSignUpFormChange=(e)=>{
        const [name,value]=[e.target.name,e.target.value];
        setSignUpFormData({
            ...signUpFormData,
            [name]: value
        })
    }

    const submitLoginForm = (e) => {
        e.preventDefault();
        if(!loginFormData.username || !loginFormData.password){
            console.log("Please enter details");
        }
        else
            console.log(loginFormData);
        dispatch(Login({ 
            username: loginFormData.username,
            password: loginFormData.password
        }));
        navigate('/BarChart');
        userLogin();
        
      }

    const submitSignUpForm = (e) => 
    {
       e.preventDefault();
        console.log(signUpFormData);
    }
    
    return(
        <div style={mystyle}>
        <div className='loginAndSignUpPage'
>
            <div className={`forms-container ${isFlipped ? 'flipped' : ''}`}>
                <div className='form-box login'>
                    <h1>Login</h1>
                    <BsFillPersonFill className='user-icon'></BsFillPersonFill>
                    <form onSubmit={submitLoginForm} className='loginForm'>
                        <div className='username'>
                            <input type="text" name="username" id="username" placeholder='username' autoComplete="current-username" onChange={handleLoginFormChange}/>
                        </div>
                        <div className='password'>
                            <input type="password" name="password" id="password" placeholder="password" autoComplete="current-password" onChange={handleLoginFormChange}/>
                        </div>
                        <div className='loginButton'>
                            <button className='login-button' type="submit">Login</button>
                        </div> 
                        <Link to="#" onClick={flipForm} className='linkText'>If you don't have an account? Sign Up</Link>                   
                    </form>
                </div>
            <div className='form-box signup'>
                <h1>SignUp</h1>
                    <BsFillPersonFill className='user-icon'></BsFillPersonFill>
                <form onSubmit={submitSignUpForm} className='signUpForm'>
                    <div className='email'>
                        <input type='email' name='email' id='email' placeholder='email' onChange={handleSignUpFormChange}></input>
                    </div>
                    <div className='newUsername'>
                        
                        <input type="text" name="newUsername" id="newUsername" placeholder='username' autoComplete="current-username"    onChange={handleSignUpFormChange}/>
                    </div>
                    <div className='newPassword'>
                        <input type="password" name="newPassword" id="newPassword" placeholder="password" autoComplete="current-password" onChange={handleSignUpFormChange}/>
                    </div>
                    <div className='signUpButton'>
                        <button className='login-button' type="submit">SignUp</button>
                    </div>
                    <Link to="#" onClick={flipForm} className='linkText'>If you have an account? Login</Link>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}
export default LoginAndSignUp;