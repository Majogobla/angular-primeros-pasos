import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500,
  }, {
    id: uuid(),
    name: 'Veggeta',
    power: 7500
  }]

  public addCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: uuid()};

    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
