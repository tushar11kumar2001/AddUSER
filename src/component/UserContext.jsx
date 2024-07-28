import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = ()=>useContext(UserContext);

export const UserProvider = (props)=>{
    const [user,setUser] = useState([]);
    const addUser = (action)=>{
        setUser([...user,action]);
    }
    const removeUser = (action)=>{
        const filter = user.filter((e)=> e.email !== action.email);
        setUser(filter);
    }
    return <UserContext.Provider 
              value={{
                user,
                addUser,
                removeUser,
              }}
           >
              {props.children}
           </UserContext.Provider>
}