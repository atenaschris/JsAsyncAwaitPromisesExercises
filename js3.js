//Ejercico3 Haceruna fetch a ese endpoint https://restcountries.eu/rest/v2/alpha/col para poder obtener , a partir de datos en el formato json, el pais que tiene el alphe3Code = col

const fetchDatata = async ()=>{
     const response = await fetch(' https://restcountries.eu/rest/v2/alpha/col');

     const country = await response.json();
     console.log(country);

}

fetchDatata();