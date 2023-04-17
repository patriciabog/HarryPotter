import { Link } from "react-router-dom";
import harry from "../images/harry.jpg";

function CharacterDetail ({characterFind}) {
  const GetImage = (image) => {
      if (image === '') {
         return harry;
      }else{
         return characterFind.image;
      }
    }
  return (
    <div className="card-selected">  
      <img className="card-selected__image"
        src={GetImage(characterFind.image)}
        alt={`${characterFind.name}`} 
        title= {`Image of ${characterFind.name}`}/>
      <section className="selected">     
        <h3 className="selected__name">{`${characterFind.name}`}</h3>
        <p className="selected__species">{`Specie: ${characterFind.species}`}</p> 
        <p className="selected__house">{`House: ${characterFind.house}`}</p>
        <p className="selected__ancestry">{`Ancestry: ${characterFind.ancestry}`}</p>
        <p className="selected__actor">{`Actor: ${characterFind.actor}`}</p>
        <p className="selected__alive">{`Alive: ${characterFind.alive === true ? 'Yes ❤️' : 'No ☠️'}`}</p>
      </section>

      <Link className="link"  to="/"> 👈🏻Back</Link>

    </div>
  );
}
export default CharacterDetail;