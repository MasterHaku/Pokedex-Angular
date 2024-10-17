import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiLinkService } from '../api-link.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrl: './search-by-id.component.css',
  
})
export class SearchByIdComponent implements OnInit{
  id: string = '';
  pokeSelect?: Pokemon;
  pokemons: Pokemon[] =[];
  selected?: Pokemon;
  selectedPokemon?:Pokemon;

  constructor(private apiLink:ApiLinkService){
  }
  ngOnInit(): void {
    this.apiLink.getPokemons().subscribe(e=> {
      this.pokemons= []
      console.log(e.results)
      e.results.forEach((e1,index)=> {
        this.pokemons.push(new Pokemon(index+1,e1.name,[],0,0,""))
      })
    })
    this.apiLink.getPokemons().subscribe(e=>{console.log(e)})
  }



  codeToExecute(){
    if(this.selected){
      this.apiLink.getPokemonByID(this.selected?.id).subscribe(e2=> {
        let index = this.selected?.id
        if(index){
          this.selectedPokemon  =new Pokemon(index,e2.name, e2.abilities, e2.weight, e2.height,e2.sprites.front_default);
          this.pokemons[index] = this.selectedPokemon
          
        }else{
          console.log("No ID")
        }
        

      })
    };
    
}
}
