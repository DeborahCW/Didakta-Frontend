import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import {register} from "../logic/UserFunctions"

const Register = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()
    
        const createUser = (e) => {
            e.preventDefault()

            const newUser = {
                first: first,
                last: last,
                userName : userName,
                email: email,
                password: password
            }

            register(newUser).then(res => {
                navigate('/home')
            })
        }

    return (
        <div><h1>REGISTER PAGE</h1>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="first">First Name</label>
            <input name="first" type="text" placeholder="Enter your first name" value={first} onChange={(e) => setFirst(e.target.value)}></input>

            </div>
            <div>
                <label htmlFor="last">Last Name</label>
                <input type="text" name="last" placeholder="Enter your last name" value={last} onChange={(e)=>setLast(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" placeholder="Enter your username" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                           
                </div>
                            
                 <div> <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
</div>           
       <Button onClick={Register} type="submit" >Register</Button>     
        </form>
        
        
        
        </div>
    )
}

export default Register