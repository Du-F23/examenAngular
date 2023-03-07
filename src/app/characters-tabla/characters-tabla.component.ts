import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-tabla',
  templateUrl: './characters-tabla.component.html',
  styleUrls: ['./characters-tabla.component.css'],
})
export class CharactersTablaComponent implements OnInit {
  @Input() character: any;

  ngOnInit(): void {}
}
