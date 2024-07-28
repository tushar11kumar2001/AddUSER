import React, { useState } from 'react'
import { useUser } from './UserContext';

const User = ({name,email,message}) => {
    
    const user = useUser();

    function handleremove() {
        const confirm = prompt("Are you sure to delete this user (type yes for your confirmation) ?");
        console.log("confirm :",confirm);
        if(confirm === "yes"){
            user.removeUser({ "email": email});
            message("User delete successfully")
        }
        else return ;
      }
    return (
        <div className="w-60 h-42 py-5 rounded-md border-2 border-gray-500 bg-slate-300  my-5 px-2 sm:ml-5" >
            <div className="mb-2"><span>User name :</span> <mark>{name}</mark> </div>
            <div className="mb-2"><span>User email :</span> <mark>{email}</mark> </div>
            <button className="border-2 border-black rounded-md px-2 py-1 bg-blue-400 text-white" onClick={() => handleremove()}>Remove</button>
        </div>
    )
}

export default User
