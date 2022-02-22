import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {login} from "../logic/UserFunctions";


const Login = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate

    const testLogin = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        Login(user).then(res => {
            if (res) {
                navigate('/')
            }
        })
    }

    return (
        <div>
            <h1 className="">Please sign in</h1>

            <form noValidate onSubmit={testLogin}>
                <h1>LOGIN PAGE</h1>
                    <div> <label htmlFor="username">Username</label>
                        <input type="username" name="username" placeholder="Enter your username" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
                    </div>
                    <div> <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <Button type="submit" >Login</Button>
            </form>
        </div>
    )
}
export default Login