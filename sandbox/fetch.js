const baseurl = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(url, callback){
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      
      callback(data)
    }
}


function doStuff(data) {
  console.log(data);
  document.body.querySelector("#output").insertAdjacentHTML("beforeend", `<p> Name: ${data.name}</p><img src="${data.sprites.other.home.front_default}">`);
}

function pokeListTemplate(pokemon){
  return `<li>${pokemon.name}</li>`;
}
function doStuffList(data) {
  console.log(data);
  const names = data.results.map(pokeListTemplate);
  console.log(names)
  document.querySelector("#pokeList").insertAdjacentHTML("beforeend", names.join(''));
}


getPokemon(baseurl+"ditto", doStuff)
getPokemon(baseurl+"?limit=100", doStuffList)