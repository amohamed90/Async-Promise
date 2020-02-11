$(function() {

  async function getRandomPokemon() {

    const allPokemon = await $.get("https://pokeapi.co/api/v2/pokemon/?limit=964");

    let pokemonObj = {};
    let randomId = Math.floor(Math.random() * 964);
    let pokemon = await $.get(allPokemon.results[randomId].url);
    let species = await $.get(pokemon.species.url);

    pokemonObj['name'] = pokemon.name;
    pokemonObj['image'] = pokemon.sprites.front_default;

    for (let entry of species.flavor_text_entries) {
      if (entry.language.name === 'en') {
        pokemonObj['flavor_text'] = entry.flavor_text;
        break;
      }
    }

    return pokemonObj;
  }


  // https://www.youtube.com/watch?v=8aGhZQkoFbQ -> video about function stacks and why the code below
  // loads asyncronously
  $("button").on("click", function () {

    for (let i = 1; i <= 3; i++) {
      udpateDom(getRandomPokemon);
    }

  });

  async function udpateDom(asyncFn) {
    let pokemon = await asyncFn();

    let $fullContainer = $(`<div><div>${pokemon.name}</div><img src=
      ${pokemon.image}><div>${pokemon.flavor_text}</div></div>`);

    $("#container").append($fullContainer);
  }
});
