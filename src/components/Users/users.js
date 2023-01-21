import {useEffect, useState} from "react";
import {usersService} from "../../service/usersService";
import {User} from "../User/user";

const Users = () => {

  const [users, setUsers] = useState(null);


  useEffect(() => {
      usersService.getUsers().then(({data}) => setUsers(data))
  }, [])

    return (
        <div>
            {users && users.map(value => <User key={value.id} users={value}/>)}
        </div>
    );
};

export {Users};