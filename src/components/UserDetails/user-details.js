const UserDetails = ({setUserId,id}) => {


    return (
        <div>
            <button onClick={() => setUserId(id)}>Details</button>
        </div>
    );
};

export {UserDetails};