const getDataApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          ancestry: eachCharacter.ancestry,
          actor: eachCharacter.actor,
          alive: eachCharacter.alive,
          id: eachCharacter.id,
        };
      });
      return cleanData;
    });
};
export default getDataApi;