const UserPost = ({post}) => {
    const {id, title} = post
    return (
        <div>
            {id} {title}
        </div>
    );
};

export {UserPost};