import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemonService } from './pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color-pipe';
import { BorderCard } from '../border-card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonList,
    BorderCard,
    PokemonTypeColorPipe
  ]
})
export class PokemonModule { }
