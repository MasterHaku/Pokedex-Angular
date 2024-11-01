import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrl: './info-display.component.css'
})
export class InfoDisplayComponent {

  @Input()
  selectedPokemon?: Pokemon


  /**
   * classes Tailwind CSS changeant la couleur du chip d'affichage des types du Pokemon
   * @param {String} type 
   * @returns 
   */
  getTypeClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'fire':
        return 'bg-orange-500';
      case 'water':
        return 'bg-blue-500';
      case 'grass':
        return 'bg-green-500';
      case 'electric':
        return 'bg-amber-300';
      case 'psychic':
        return 'bg-purple-500';
      case 'rock':
        return 'bg-gray-300';
      case 'flying':
        return 'bg-blue-200';
      case 'dark':
        return 'bg-black';
      case 'steel':
        return 'bg-gray-500';
      case 'poison':
        return 'bg-lime-500';
      case 'fairy':
        return 'bg-pink-400';
      case 'ice':
        return 'bg-cyan-300';
      case 'ground':
        return 'bg-amber-900';
      // Ajoute d'autres types selon besoin
      default:
        return 'bg-gray-200';
    }
  }



}
