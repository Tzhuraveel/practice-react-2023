


const User = ({user, setUserId}) => {
    const {id, name} = user


    return (
        <div>
            <h2>{id} {name}</h2>
            <button onClick={() => setUserId(id)}>POST OF USER</button>
        </div>
    );
};

export {User};