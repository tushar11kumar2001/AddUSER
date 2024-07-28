import { useEffect, useState } from "react";
import User from "./User";
import { useUser } from "./UserContext";


const ShowUsers = () => {
    const user = useUser();
    const [message,setMessage] = useState("");
    useEffect(()=>{
       setMessage("User delete Successfully");
       setTimeout(()=>{
          setMessage("");
       },1000)
    },[user.user.length])
    return (
        <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-red-600 text-center font-bold w-screen">{message}</h1>
            {user.user.length === 0 ? <h1 className="font-bold px-5 text-center sm:text-start">USERS NOT ADDED</h1>:<h1 className="font-bold px-5 text-center sm:text-start">Total user ({user.user.length})</h1>}<div >
            <div className="flex flex-col items-center sm:items-start" >
            {user.user.map((e,i) => <User name={e.name} email={e.email} key={i}/>)}
            </div>
        </div>
        </div>
    )
}

export default ShowUsers
