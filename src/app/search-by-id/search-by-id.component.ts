import { Component, Input, SimpleChanges } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiLinkService } from '../api-link.service';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrl: './search-by-id.component.css',

})
export class SearchByIdComponent {

  @Input() //Tous les pokemons
  pokemons: Pokemon[] = [];

  @Input() //Pokémon clické dans la mozaique
  selectedPokemonClick?: number

  id: string = '';
  pokeSelect?: Pokemon;
  selected?: Pokemon;
  selectedPokemon?: Pokemon;

  constructor(private apiLink: ApiLinkService) {
  }

  /**
   * S'execute quand le pokemon selection est modifié
   * @param {SimpleChanges} changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPokemonClick']) {
      console.log(changes['selectedPokemonClick'].currentValue);
      this.codeToExecute(changes['selectedPokemonClick'].currentValue);
    }
  }

  /**
   * Effectue l'action d'affichage des details sur le coté gauche de la page
   * @param {number} id 
   */
  codeToExecute(id?: number) {
    if (this.selected) { //si le pokemon est cherché dans le champ de recherche
      this.performRequest(this.selected.id)
      this.selected = undefined; // Efface le champs d'entrée
      this.id = ''; // Efface le champs de filtre
    } else {
      if (id) { //si le pokemon est cliqué
        this.performRequest(id)
      }
    };
  };

  /**
   * Effectue la requete de recuperation par ID et crée un Pokemon avec les données retournées
   * @param {number} id ID du pokemon a chercher
   */
  performRequest(id: number) {
    this.apiLink.getPokemonByID(id).subscribe(e2 => {
      let index = id
      if (index) {
        this.selectedPokemon = new Pokemon(index, e2.name, e2.abilities, e2.weight, e2.height, e2.sprites.front_default, e2.types);
        this.pokemons[index] = this.selectedPokemon
      } else {
        console.log("No ID")
      }
    })
  }
}
