import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { BorderCard } from '../../border-card';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from "../../pokemon-type-color-pipe";

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonTypeColorPipe, DatePipe],
  templateUrl: 'pokemon-list.html',
  styles: ``
})
export class PokemonList {
  
  pokemons : Pokemon[];
  myDirective: BorderCard;

  private router= inject(Router);
  private pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(
      pokemonList => this.pokemons = pokemonList
    ) 
  }

  constructor() {}

  goToPokemonDetail(pokemon: Pokemon): void {
    this.router.navigate(['/pokemons', pokemon.id]);
  }

  

}
