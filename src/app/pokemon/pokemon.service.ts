import { inject, Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);

  constructor(){}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('pokemons').pipe(
      // You can add additional operators here if needed
      tap((pokemonList) => this.log(pokemonList)),
      catchError(
        (error) => this.handleError(error, [])
      )
    )
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined)  )
    )
    //
  }

  private log(response: any): void {
    if (Array.isArray(response)) {
      console.table(response);
    } else if (response) {
      console.log(`Fetched Pokémon:`, response);
    } else {
      console.warn('No Pokémon found or an error occurred.');
    }
  }

  private handleError(error: Error, errorValue: any) {
    console.error('An error occurred:', error);
    // Return a safe value or an empty array
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return [
      'Grass',
      'Poison',
      'Fire',
      'Flying',
      'Water',
      'Bug',
      'Normal',
      'Electric',
      'Ground',
      'Fairy',
      'Fighting',
      'Psychic',
      'Rock',
      'Ghost',
      'Ice',
      'Dragon',
      'Dark',
      'Steel',
      'Unknown',
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte',
      'Normal',
      'Electrik', 
      'Poison', 
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
