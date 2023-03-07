import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  characters = [];

  constructor(private charactersService: CharactersService) {
    this.charactersService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
