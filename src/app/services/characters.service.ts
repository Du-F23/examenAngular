import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  private url = 'https://rickandmortyapi.com/api/character';

  getCharacters() {
    return this.http.get(this.url);
  }
}
