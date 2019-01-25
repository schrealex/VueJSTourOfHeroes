<template>
<div>
  <div v-if="hero">
    <h2>{{hero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label>name:
        <input v-model="hero.name" placeholder="name">
      </label>
    </div>
    <button v-on:click="goBack()">go back</button>
  </div>
</div>
</template>

<script>
import HeroService from '../services/HeroService';

export default {
  name: 'HeroDetail',
  created() {
    this.getHero();
  },
  data() {
    return {
      hero: null,
    };
  },
  methods: {
    getHero() {
      const id = +this.$route.params.id;
      HeroService.getHero(id).subscribe((hero) => {
        this.hero = hero;
      });
    },
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
label {
  font-size: 12px;
}
</style>
