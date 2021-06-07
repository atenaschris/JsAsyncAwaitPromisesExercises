//Ejercicio4 Utilizando la misma api del ejercicio 3, tomar los datos de los paises que confinan con Colombia y que devuelva solo los nombres de esos datos.

const fetchCountry = async (alpha3Code)=>{
    try{
        const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);
        
        const country = await data.json();
    
        return country;

       
      
    } catch(err){
        console.log( err);
    }
}

const fetchCountryAndNeighbour = async()=>{
    const colombia = await fetchCountry('col');
    const neighbourCountries = await Promise.all(colombia.borders.map(country=>fetchCountry(country))) ;
    console.log(neighbourCountries);
   
  const neighbourCountriesFormatted = neighbourCountries
  .map(el=>el.name)
 
  console.log(neighbourCountriesFormatted); 
}

fetchCountryAndNeighbour()