function FilterCharacter ({characterFilter, handleFilterCharacter}) {
 
   const handleInput = (ev) => {
    handleFilterCharacter(ev.target.value);
   }
  
    return (
        <section className="input">
          <label className="input__text" htmlFor="name">Search for character:</label>
          <input 
            className="input__search"
            type="text"
            name="name"
            id="name" 
            placeholder="Harry Potter"
            onChange={handleInput}
            value={characterFilter}
          />
        </section>
    )  
};
export default FilterCharacter;