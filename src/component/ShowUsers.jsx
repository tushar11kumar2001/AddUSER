import { useUser } from "./UserContext";


const ShowUsers = () => {
    const user = useUser();
    return (
        <div className="flex flex-col items-center sm:items-start">
            {user.user.length ? (<div >

                {user.user.map((e,i) => <div className="w-60 h-28 py-5 rounded-md border-2 border-gray-500 bg-slate-300  my-5 px-2 sm:ml-5" key={i}>
                    <div className="mb-2"><span>User name :</span> <mark>{e.name}</mark> </div>
                    <div className="mb-2"><span>User email :</span> <mark>{e.email}</mark> </div>
                </div>)}
            </div>) : <h1 className="font-bold px-5 text-center sm:text-start">USERS NOT ADDED</h1>}
        </div>
    )
}

export default ShowUsers
