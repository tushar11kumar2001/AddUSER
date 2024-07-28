import User from "./User";
import { useUser } from "./UserContext";


const ShowUsers = () => {
    const user = useUser();
    return (
        <div className="flex flex-col items-center sm:items-start">
       
            {user.user.length === 0 ? <h1 className="font-bold px-5 text-center sm:text-start">USERS NOT ADDED</h1>:<h1 className="font-bold px-5 text-center sm:text-start">Total user ({user.user.length})</h1>}
            <div >
            {user.user.map((e,i) => <User name={e.name} email={e.email} key={i}/>)}
        </div>
        </div>
    )
}

export default ShowUsers
