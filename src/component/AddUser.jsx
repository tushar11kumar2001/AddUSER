import React, { useRef, useState } from 'react'
import { useUser } from './UserContext';

const AddUser = () => {
   
    const [error, setError] = useState("");
    const user = useUser();
    const email = useRef();
    const password = useRef();
    const name = useRef();
    function handleuser() {
      if(!email.current.value || !password.current.value || !name.current.value){
        setError("Please fill the all inputs");
        return
      }
      user.addUser({ "email": email.current.value, "password": password.current.value, "name": name.current.value });
      email.current.value = "";
      password.current.value = "";
      name.current.value = "";
    }
  return (
    <div>
      <div className="border-2 rounded-md flex flex-col justify-center items-center w-[60%] m-auto p-3 gap-3 sm:w-[20%]">
        <h1>{error}</h1>
        <input ref={email} className="border-2 border-gray-500  w-full  rounded-md h-12 px-3" type="text" name="email" placeholder="Enter user's email"  required/>
        <input ref={password} className="border-2 border-gray-500  w-full  rounded-md h-12 px-3 " type="password" name="password" placeholder="Enter your password"  required/>
        <input ref={name} className="border-2 border-gray-500 w-full  rounded-md h-12 px-3" type="text" name="name" placeholder="Enter your name" required />
        <button className="border-2 border-black rounded-md p-3 bg-blue-400 text-white" onClick={() => handleuser()}>Add</button>
      </div>
    </div>
  )
}

export default AddUser
