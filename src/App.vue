<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
html, body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
