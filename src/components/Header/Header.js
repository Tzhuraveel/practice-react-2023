import {useSelector} from "react-redux";

const Header = () => {

    const {user} = useSelector(state => state.users);



    return (
        <div>
            <div>{user && user.name}</div>
        </div>
    );
};

export {Header};