import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();


    const {users, loading} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAll())
    }, []);


    return (

        <div>
            {loading && <div>...loading</div>}
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export {Users};