const OneCharacter = ({character}) => {
    const {id, name, status, species, image, origin:{name: n}} = character


    return (
        <div>
            <h4>{id} {name}</h4>
            <h4>{status}</h4>
            <h5>{species}</h5>
            <h5>{n}</h5>
            <img src={image} alt={name}/>

        </div>
    );
};

export {OneCharacter};