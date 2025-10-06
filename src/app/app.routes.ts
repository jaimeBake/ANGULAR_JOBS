import { Routes } from '@angular/router';
import { PokemonList } from './pokemon/pokemon-list/pokemon-list';
import { PokemonEdit } from './pokemon/pokemon-edit/pokemon-edit';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const routes: Routes = [
    {
        path: 'pokemon/:id',
        //
        component: PokemonEdit, 
        title: 'Pokemon Profile'
    },
    {path:'pokemons', component: PokemonList, title:'Pokedex'},
    
];
