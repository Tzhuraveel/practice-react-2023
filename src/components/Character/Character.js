import './character-style.css'

const Character = ({value, setId}) => {
    const {id, name, status, species, image} = value


    return (
        <div className='container'>
            <h3>{id} {name}</h3>
            <div>
                <h4>Status: {status}</h4>
                <h4>Species: {species}</h4>
            </div>
            <img src={image} alt={name} className='image__character'/>
            <div>
                <button onClick={() => setId(id)}>Details</button>
            </div>
        </div>
    );
};

export {Character};