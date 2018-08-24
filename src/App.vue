<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
    </nav>
    <router-view></router-view>
    <messages/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Tour of Heroes"
    };
  }
};
</script>

<style>
  /* Application-wide Styles */
  h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }
  h2, h3 {
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }
  body {
    margin: 2em;
  }
  body, input[text], button {
    color: #888;
    font-family: Cambria, Georgia;
  }
  /* everywhere else */
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
  nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-right: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
  }
  nav a:visited, a:link {
    color: #607d8b;
  }
  nav a:hover {
    color: #039be5;
    background-color: #cfd8dc;
  }
  nav a.active {
    color: #039be5;
  }
</style>
