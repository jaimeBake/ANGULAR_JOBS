import { Component, inject, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../../pokemon-type-color-pipe';

@Component({
  selector: 'app-pokemon-form',
  imports: [FormsModule],
  templateUrl: './pokemon-form.html',
  styleUrls: ['./pokemon-form.css'],
})
export class PokemonForm {
  @Input() pokemon: Pokemon;
  types : string[];

  private router = inject(Router);
  private pokemonService = inject(PokemonService);

  constructor() {}

  ngOnInit(): void{
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }
  selectType(type: string): void {
    const index = this.pokemon.types.indexOf(type);
    if (index > -1) {
      this.pokemon.types.splice(index, 1);
    } else {
      this.pokemon.types.push(type);
    }
  }

  isTypesValid(type:string): boolean {

      if(this.pokemon.types.length === 1 && this.hasType(type)) {
        return false;
      }

      if(this.pokemon.types.length > 2 && !this.hasType(type)) {
        return false;
      }

      return true;
    }

    onSubmit(): void {
        // Logique pour soumettre le formulaire
        console.log('Form submitted:', this.pokemon);
        this.router.navigate(['/pokemon',this.pokemon.id]);
    }
  
}
