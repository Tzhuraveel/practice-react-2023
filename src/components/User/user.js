import {useEffect, useState} from "react";
import {UserDetails} from "../UserDetails/user-details";
import {UserDetailsBeta} from "../UserDetails/userDetailsBeta";
import {usersService} from "../../service/usersService";

const User = ({users}) => {

    const {id, name} = users

    const [userId, setUserId] = useState(null);
    const [user, setUsers] = useState(null);

    useEffect(() => {
        userId && usersService.getUser(userId).then(({data}) => setUsers(data))
    }, [userId])






    return (
        <div>
            <div>
                <h4>{id} {name}</h4>
            </div>

            <UserDetails setUserId={setUserId} id={id}/>

            <div>
                {user && <UserDetailsBeta user={user}/>}
            </div>
        </div>
    );
};

export {User};