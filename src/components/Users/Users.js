import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../User/User";


const Users = ({setUserId}) => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getUsers().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>
            {users && users.map(value => <User key={value.id} user={value} setUserId={setUserId}/>)}
        </div>

    );
};

export {Users};