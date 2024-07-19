let pokemonRepository = function () {
    let pokemons = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=25';
    function add(pokemon) {
      pokemons.push(pokemon);
    }
    function getAll() {
      return pokemons;
    }
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        $('#pokemonName').text(pokemon.name);
        $('#pokemonHeight').text('Height: ' + pokemon.height);
        $('#pokemonImage').attr('src', pokemon.imageUrl);
        $('#pokemonModal').modal('show');
      });
    }
    function addListItem(pokemon) {
      let pokemonList = $('.pokemon-list');
      let listItem = $('<li></li>').addClass('list-group-item');
      let button = $('<button></button>').text(pokemon.name).addClass('btn btn-primary btn-block');
      listItem.append(button);
      pokemonList.append(listItem);
      button.on('click', function () {
        showDetails(pokemon);
      });
    }
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      });
    }
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
    };
  }();
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });