import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrl: './info-display.component.css'
})
export class InfoDisplayComponent {

  @Input()
  selectedPokemon ?: Pokemon

}
