import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ApiLinkService } from '../api-link.service';

interface Pokemon {
  id: number;
  imageUrl?: string; // Optional because it will be filled later
}

@Component({
  selector: 'app-all-poke',
  templateUrl: './all-poke.component.html',
  styleUrls: ['./all-poke.component.css'], 
})
export class AllPokeComponent implements OnInit, OnChanges {
  @Input() pokemons: Pokemon[] = []; // Recevoir les Pokémon en entrée
  cards: Pokemon[] = []; // Initialiser le tableau des cartes

  @Output() pokemeonClicked = new EventEmitter<number>();

  constructor(private apiLink: ApiLinkService) {}

  ngOnInit() {
    // Initialisation si pokemons sont déjà chargés
    if (this.pokemons.length > 0) {
      this.populateCards();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Vérifier si pokemons a changé
    if (changes['pokemons'] && this.pokemons.length > 0) {
      this.populateCards();
    }
  }

  private populateCards(): void {
    this.cards = this.pokemons.map(pokemon => ({
      id: pokemon.id,
      imageUrl: '' // Initialiser imageUrl vide
    }));

    // Appeler getUrl pour chaque Pokémon
    this.cards.forEach(card => {
      this.getUrl(card.id).then(url => {
        card.imageUrl = url; // Mettre à jour l'imageUrl une fois récupéré
      });
    });
  }

  getUrl(id: number): Promise<string> {
    return new Promise((resolve) => {
      this.apiLink.getPokemonByID(id).subscribe(result => {
        // Résoudre la promesse avec l'URL de l'image
        resolve(result.sprites.front_default);
      });
    });
  }

  // Méthode pour gérer le clic sur la carte
  onCardClick(id: number): void {
    console.log(id);
    this.pokemeonClicked.emit(id); // Émettre l'ID du Pokémon cliqué
  }
}
