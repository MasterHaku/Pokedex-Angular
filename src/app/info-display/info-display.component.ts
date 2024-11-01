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





  
  getTypeClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'fire':
        return 'bg-orange-500 hover:animate-sparkle-fire hover:brightness-125 transition duration-300';
      case 'water':
        return 'bg-blue-500 hover-sparkle hover:brightness-125 transition duration-300';
      case 'grass':
        return 'bg-green-500 hover-sparkle hover:brightness-125 transition duration-300';
      case 'electric':
        return 'bg-amber-300 hover-sparkle hover:brightness-125 transition duration-300';
      case 'psychic':
        return 'bg-purple-500 hover-sparkle hover:brightness-125 transition duration-300';
      case 'rock':
        return 'bg-gray-300 hover-sparkle hover:brightness-125 transition duration-300';
      case 'flying':
        return 'bg-blue-200 hover-sparkle hover:brightness-125 transition duration-300';
      case 'dark':
        return 'bg-black hover-sparkle hover:brightness-125 transition duration-300';
      case 'steel':
        return 'bg-gray-500 hover-sparkle hover:brightness-125 transition duration-300';
      case 'poison':
        return 'bg-lime-500 hover-sparkle hover:brightness-125 transition duration-300';
      case 'fairy':
        return 'bg-pink-400 hover-sparkle hover:brightness-125 transition duration-300';
      case 'ice':
        return 'bg-cyan-300 hover-sparkle hover:brightness-125 transition duration-300';
      case 'ground':
        return 'bg-amber-900 hover-sparkle hover:brightness-125 transition duration-300';
      default:
        return 'bg-gray-200 hover-sparkle hover:brightness-125 transition duration-300';
    }
  }
  



}
