import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Root {
  data: Character[]
  count: number
  totalPages: number
  nextPage: string
}

export interface Character {
  films: string[]
  shortFilms: string[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: string[]
  allies: any[]
  enemies: any[]
  _id: number
  name: string
  imageUrl: string
  url: string
}
@Injectable({
  providedIn: 'root'
})
export class DisneyService {

  constructor(private httpClient: HttpClient) {

  }

  public getCharacters(): Observable<Root>{
    return this.httpClient.get<Root>("https://api.disneyapi.dev/characters");
  }

}
