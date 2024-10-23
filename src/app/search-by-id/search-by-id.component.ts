import { Component, Input, SimpleChanges } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiLinkService } from '../api-link.service';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrl: './search-by-id.component.css',

})
export class SearchByIdComponent {

  @Input()
  pokemons: Pokemon[] = [];

  @Input()
  selectedPokemonClick?: number

  id: string = '';
  pokeSelect?: Pokemon;
  selected?: Pokemon;
  selectedPokemon?: Pokemon;



  constructor(private apiLink: ApiLinkService) {
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPokemonClick']) {
      console.log(changes['selectedPokemonClick'].currentValue);
      this.codeToExecute(changes['selectedPokemonClick'].currentValue);
    }
  }
  codeToExecute(id?: number) {
    if (this.selected) {
      this.performRequest(this.selected.id)
      this.selected=undefined; // Efface le champs d'entrée
      this.id=''; // Efface le champs de filtre
    } else {
      if (id) {
        this.performRequest(id)
      }
    };
  };


  /**
   * 
   * @param id ID du pokemon a chercher
   * 
   * Effectue la requete de recuperation par ID et crée un Pokemon avec les données retournées
   */
  performRequest(id:number){
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
