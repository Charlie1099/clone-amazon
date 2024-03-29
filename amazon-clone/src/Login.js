import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // this will connect to firebase for singin 
    const signIn = e => {
        e.preventDeffault()



    }
    // this will handle the new account register process
    const register = e => {
        e.preventDeffault();


    }

    return (
        <div className='login'>
            <Link to="/">
            <img className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link> 

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} 
                            className='login__signInButton'>Sign in</button>
                </form>

                <p>
                    By signing-in you agree to the Amazon <strong>FAKE CLONE</strong>
                    Conditions of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div> 

        </div>
    )

}

export default Login
