import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';

const Profile=()=>{

    const [details, setDetails] = useState({
        first : "",
        last : "",
        userName : "",
        email: "",
    })

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile=async ()=>{
        const token=await localStorage.usertoken;
        const decoded = await jwt_decode(token);
        console.log(decoded);
        setDetails({
            first : decoded.user.first,
            last : decoded.user.last,
            userName : decoded.user.userName,
            email: decoded.user.email,
        })  
   
    }

    return(
        <>
       
         <div>
         <h1>User Profile Info</h1>
         
              <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{details.first}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{details.last}</td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>{details.userName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{details.email}</td>
                    </tr>
                </tbody>


              </table>   
                </div>
        </>
    )
}

export default Profile;