import { Link } from "react-router-dom";
import harry from "../images/harry.jpg";


function CharacterCard ({eachCharacter}) {
   const GetImage = (image) => {
      if (image === '') {
         return harry;
      }else{
         return eachCharacter.image;
      }
   }

   // console.log(eachCharacter.name);
    return (
        <Link to={`/character/${eachCharacter.id}`}>
           <li className="card">
               <img className="card__image"
                  src={GetImage(eachCharacter.image)}
                   alt={`Foto de ${eachCharacter.name}`}
                   title={`Imagen de ${eachCharacter.name}`}/>
                <h3 className="card__name">{eachCharacter.name}</h3>
                 <p className="card__species">{eachCharacter.species}</p> 
                 <p className="card__house">{eachCharacter.house}</p>
            </li>
          </Link>
    );

}
export default CharacterCard;