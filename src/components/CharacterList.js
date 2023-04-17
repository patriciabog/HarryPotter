import CharacterCard from "./CharacterCard";

function CharacterList({listData}) {

    const dataHtml = listData.map((eachCharacter) => {
        return (
        <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>
        );
    });
    return (
       <section className="list">
        <ul className="list__box">{dataHtml}</ul>
       </section>
    );
}
export default CharacterList;