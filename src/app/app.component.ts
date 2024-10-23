import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from './pokemon';
import { ApiLinkService } from './api-link.service';
import { firstValueFrom } from 'rxjs';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent implements OnInit {
  title = 'Pokedex';
  pokemons: Pokemon[] =[];
  selectedPokemonId:  number = 0;

  constructor(private apiLink:ApiLinkService){
  }

  ngOnInit(): void {
    this.apiLink.getPokemons().subscribe(e=> {
      this.pokemons= []
      console.log(e.results)
      e.results.forEach((e1,index)=> {
        this.pokemons.push(new Pokemon(index+1,e1.name,[],0,0,"", []))
      })
    })
    this.apiLink.getPokemons().subscribe(e=>{console.log(e)})
  }

  onPokemonClicked(id: number) {
    console.log('Pokémon cliqué:', id); // Pour vérifier que l'ID est bien émis
    this.selectedPokemonId=id; // Met à jour l'ID sélectionné
  }

}
