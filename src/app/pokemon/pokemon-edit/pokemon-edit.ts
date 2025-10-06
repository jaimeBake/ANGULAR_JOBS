import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { PokemonForm } from "../pokemon-form/pokemon-form";

@Component({
  selector: 'app-pokemon-edit',
  imports: [PokemonForm],
  templateUrl: './pokemon-edit.html',
  styles: ``
})
export class PokemonEdit  implements OnInit{
  pokemon : Pokemon | undefined;
  private activatedRoute = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);


  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
    const pokemonId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Pokemon recherche - pokemonId:', pokemonId);

    if(pokemonId) {
      const id: number = +pokemonId; // Convertir en nombre
      this.pokemonService.getPokemonById(id).subscribe(
        pokemon => this.pokemon = pokemon
      );
    }else {
      this.pokemon = undefined;
      console.error('Pokemon ID is not provided in the route');
    }
  }

  onSubmit(): void {
    // Handle form submission logic here
  } 

}
