<template>
  <div id="app">
  <router-view :key="$route.path"/>
  </div>
</template>

<style>
:root {
  box-sizing: border-box;
  /* font-size: calc(1vw + 0.1em); */

  /* Colors */
  --dark-color: #2c3e50;
}

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
