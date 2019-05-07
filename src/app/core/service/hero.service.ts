import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';

@Injectable()
export class HeroService {

  heroes: Hero[] = [
    {
      id: 1,
      name: 'Spider Man',
      attack_type: 'Lorem Ipsum Dolor si atet amet',
      primary_attr: 'test',
      roles: [],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ01iuNdiQUPZlR179B104dJfzk1GoQoEMHPcHUyQGeWf4MWtq'
    },
    {
      id: 2,
      name: 'Doctor Strange',
      attack_type: 'Lorem Ipsum Dolor si atet amet',
      primary_attr: 'test',
      roles: [],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGV6HtKkrvaAXwo8kT-QqX9gjdkPQPSkJ2idXoBXUhNx8vYC-3Mg'
    }
  ];
  constructor() { }

  getHeroes() {
    return this.heroes;
  }

  getHero(id: number): Hero {
    return this.heroes.find(hero => hero.id === id);
  }

}
