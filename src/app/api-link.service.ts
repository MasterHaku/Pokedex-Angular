import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokemonType, ResultAllPokemon } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiLinkService {
  private apiUrl = 'https://pokeapi.co/api/v2/';



  constructor(private http: HttpClient) { }
  getPokemonByID(id: number): Observable<PokemonType> {
    return this.http.get<PokemonType>(`${this.apiUrl}/pokemon/${id}`);
  }


  getPokemons(): Observable<ResultAllPokemon> {
    return this.http.get<ResultAllPokemon>(`${this.apiUrl}/pokemon?offset=0&limit=1025",`);
  }
}
