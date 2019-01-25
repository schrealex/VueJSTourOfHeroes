import { of } from 'rxjs';

import { HEROES } from '../mockdata/mock-heroes';

import MessageService from '../services/MessageService';

export default {
  getHeroes() {
    // TODO: send the message _after_ fetching the hero
    MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  },
  getHero(id) {
    // TODO: send the message _after_ fetching the hero
    MessageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  },
};
