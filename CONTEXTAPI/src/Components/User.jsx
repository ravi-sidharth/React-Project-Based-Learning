import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { UserContext } from "../Context/Context";

function User() {

  const {users,setUsers} = useContext(UserContext)
  // console.log(users)

  return (
    <div className="w-1/2">
      <h1 className="w-1/2 text-3xl">User List</h1>
      <div className="w-1/2 flex flex-col gap-5 mt-10">
        {users.map(user=><Link key={user.id} to={`/user/${user.id}`} className="bg-blue-200 p-3 rounded">{user.username}</Link>)}
      </div>
    </div>
  );
}

export default User;
