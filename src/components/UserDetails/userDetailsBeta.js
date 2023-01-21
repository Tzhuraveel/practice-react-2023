
import './userDetailsBeta.css'

const UserDetailsBeta = ({user}) => {
    const {id, name, email} = user

    return (
        <div className='container'>
            <h5>Id: {id}</h5>
            <h5>Name: {name}</h5>
            <h6>Email: {email}</h6>
        </div>
    );
};

export {UserDetailsBeta};