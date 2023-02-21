import { DisneyService, Character } from './../disney.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private disneyService: DisneyService) {
    this.characters = [];
    this.filteredCharacters = [];
    this.filterKeyWord = "";
    this.favoriteCharacters = [];
    this.characterToView = {
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      _id: 0,
      name: "",
      imageUrl: "",
      url: ""
    };

  }

  private characters: Character[];
  private filteredCharacters: Character[];
  public filterKeyWord: String;
  private favoriteCharacters: Character[];
  public characterToView: Character;

  ngOnInit(): void {
    this.disneyService.getCharacters().subscribe((data) => {
      this.characters = data.data;
      this.filteredCharacters = data.data;
    })
  }

  public getCharacterList(): Character[]{
    return this.filteredCharacters;
  }

  public searchForCharacter() {
    this.filteredCharacters = this.characters.filter((character) => {
      return character.name.toLowerCase().includes(this.filterKeyWord.toLowerCase());
    })
  }

  public setCharacterToView(character: Character) {
    this.characterToView = character;
  }


  public addOrRemoveFavorites(character: Character) {
    if(this.favoriteCharacters.includes(character)) {
      this.favoriteCharacters.splice(this.favoriteCharacters.indexOf(character), 1);
    } else {
      this.favoriteCharacters.push(character);
    }
  }

  public isFavoriteCharacter( character: Character) {
    return this.favoriteCharacters.includes(character);
  }

  public getFavoriteCharacters(): Character[] {
    return this.favoriteCharacters;
  }
}
