import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";


function Filters({handleFilterHouse, handleFilterCharacter, characterFilter, houseFilter, handleReset}) { 
  const handleButton = () => {
   handleReset("Gryffindor", "");
  };

  return (
    <section className="filter">
        <form className="filter__form" >
          <FilterCharacter 
             handleFilterCharacter={handleFilterCharacter}
             characterFilter={characterFilter} />
          <FilterHouse 
             handleFilterHouse={handleFilterHouse}
            houseFilter={houseFilter}
           />    
        </form>
        <button 
          className="filter__reset"
          type="reset"
          onClick={handleButton} >Reset
        </button>
    </section>
  );
}
export default Filters;