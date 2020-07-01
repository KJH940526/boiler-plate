import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';


function LoginPage() {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
       event.preventDefault();
       console.log('Email', Email)
       console.log('Password', Password)  
                                    //파란글씨 => 디비에 보내는 state
       //서버에 보내기
        let body = {
            email: Email,
            password : Password
        }

        dispatch(loginUser(body))
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>

            <form style={{ display:'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="Password" value={Password} onChange={onPasswordHandler} />
                <br/>
                <button type="submit">
                    Login
                </button>

            </form>
            
        </div>
    );
}

export default LoginPage;