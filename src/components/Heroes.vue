<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li v-for="hero of heroes" :key="hero.id">
        <router-link :to="'/detail/' + hero.id">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HeroService from '../services/HeroService';

export default {
  name: 'heroes',
  created() {
    this.getHeroes();
  },
  data() {
    return {
      heroes: null,
    };
  },
  methods: {
    getHeroes() {
      HeroService.getHeroes().subscribe((heroes) => {
        this.heroes = heroes;
      });
    },
  },
};
</script>

<style scoped>
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }

  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;

    li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;

      &.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }

      &:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
    }

    .text {
      position: relative;
      top: -3px;
    }

    .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }

    a {
      color: #888;
      text-decoration: none;
      position: relative;
      display: block;
      width: 250px;

      &:hover {
        color:#607D8B;
      }
    }
  }
</style>
