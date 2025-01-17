import { useState } from "react";
import AddUser from "./AddUser";

import ShowUsers from "./ShowUsers";


const Dashboard = () => {
  const [add, setAdd] = useState(true);
  return (
    <div className="w-screen">
      <h1 className="text-center font-bold py-5">DASHBOARD</h1>
      <div className="flex justify-center">
      <button className="border-2 border-black rounded-md p-3 bg-blue-400 text-white m-5" onClick={() => setAdd(true)}>Add USER</button>
      {/* <button className="border-2 border-black rounded-md p-3 bg-blue-400 text-white m-5" onClick={() => setAdd(false)}>Remove USER</button>  */}
      <button className="border-2 border-black rounded-md p-3 bg-blue-400 text-white m-5" onClick={() => setAdd(false)}>User</button> 
      </div>
      {add && <AddUser/>}
      {!add &&   <ShowUsers/>}
    </div>
  )
}

export default Dashboard
