import {useEffect, useState} from "react";
import '../Character/character-style.css'
import {characterService} from "../../service";
import {Character} from "../Character/Character";
import {OneCharacter} from "../OneCharacter/OneCharacter";

const Characters = () => {

    const [characters, setCharacters] = useState(null);
    const [character, setCharacter] = useState(null)
    const [id, setId] = useState(null)





    useEffect(() => {
      characterService.getAllCharacter()
          .then(({data}) => setCharacters(data.results))
    }, [])


    useEffect(() => {
        id && characterService.getOneCharacter(id).then(({data}) => setCharacter(data))
    }, [id])




    return (
       <div className='wrapper__all'>
           <div className='wrapper'>
               {characters && characters.map(value => <Character key={value.id} value={value} setId={setId}/>)}
           </div>
           <div className='fixed'>
                   {character && <OneCharacter key={character.id} character={character}/>}
           </div>
       </div>

    );
};

export {Characters};

