function FilterHouse ({handleFilterHouse, houseFilter}) {
    const handleChange = (ev) => {
        handleFilterHouse(ev.target.value);
    }
    return (
        <section className="search">
            <label className="search__house" htmlFor="">Select the house:</label>
            <select 
               className="search__option"
               typer="search"
               name="house" 
               id={houseFilter}
               onChange={handleChange}
            >
               <option value="Gryffindor">Gryffindor</option>
               <option value="Slytherin">Slytherin</option>
               <option value="Hufflepuff">Hufflepuff</option>
               <option value="Ravenclaw">Ravenclaw</option>
            </select>
        </section>
    )
}
export default FilterHouse;