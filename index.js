class Character {
  constructor(name, species, image) {
    this._name = name;
    this._species = species;
    this._image = image;
  }
  get name() {
    return this._name;
  }

  get species() {
    return this._species;
  }

  get image() {
    return this._image;
  }
}

function ShowCharacter(character) {
  const characterCard = document.createElement("div");
  characterCard.classList.add("character-card");

  const characterImage = document.createElement("img");
  characterImage.src = character.image;
  characterImage.alt = character.name;

  const characterName = document.createElement("h3");
  characterName.textContent = character.name;

  const characterSpecies = document.createElement("p");
  characterSpecies.textContent = `Species: ${character.species}`;

  characterCard.appendChild(characterImage);
  characterCard.appendChild(characterName);
  characterCard.appendChild(characterSpecies);

  document.getElementById("character-container").appendChild(characterCard);
}

const loadData = async () => {
  await fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      const characterContainer = document.getElementById("character-container");

      characters.forEach((characterData) => {
        const character = new Character(
          characterData.name,
          characterData.species,
          characterData.image
        );
        ShowCharacter(character);
      });
    });
};


loadData();