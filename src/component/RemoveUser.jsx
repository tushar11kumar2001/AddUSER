import React, { useRef } from 'react'
import { useUser } from './UserContext';

const RemoveUser = () => {
    const user = useUser();
    const email = useRef();
    function handleremove() {
        user.removeUser({ "email": email.current.value });
      }
  return (
    <div>
      <div>
        <h1 className="text-center font-bold py-5">Remove user</h1>
        <div className="border-2 rounded-md flex flex-col justify-center items-center w-[60%] m-auto p-3 gap-3 sm:w-[20% ]">
          <input className="border-2 border-gray-500  w-full  rounded-md h-12 px-3"  ref={email} type="text" name="email" placeholder="Enter user's email" />
          <button className="border-2 border-black rounded-md p-3 bg-blue-400 text-white" onClick={handleremove}>Remove user </button>
        </div>
      </div>
    </div>
  )
}

export default RemoveUser
