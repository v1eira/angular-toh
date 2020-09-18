import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Homelander' },
      { id: 12, name: 'Queen Maive' },
      { id: 13, name: 'The Deep' },
      { id: 14, name: 'Black Noir' },
      { id: 15, name: 'Translucid' },
      { id: 16, name: 'Starlight' },
      { id: 17, name: 'A-Train' },
      { id: 18, name: 'Stormfront' },
      { id: 19, name: 'Replicator' },
      { id: 20, name: 'Liberty' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
