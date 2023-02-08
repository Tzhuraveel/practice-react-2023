import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name, username} = user

    const dispatch = useDispatch();


    return (
        <div>
            <div>{id} {name} {username}</div>
            <button onClick={() => dispatch(userActions.getUser(user))}>Details</button>
        </div>
    );
};

export {User};