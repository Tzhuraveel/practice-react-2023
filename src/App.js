import {UserPost, Users} from "./components";
import {useEffect, useState} from "react";
import {userService} from "./services";








const App = () => {

    const [userId, setUserId] = useState(null)
    const [userPost, setUserPost] = useState(null)

    useEffect(() => {
       userId && userService.getUserPost(userId).then(({data}) => setUserPost([...data]))
    }, [userId])




    return (
        <div>
            <Users setUserId={setUserId}/>
            {userPost && userPost.map(value => <UserPost key={value.id} post={value}/>)}
        </div>
    );
};

export {App};