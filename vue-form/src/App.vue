<template>
  <div id="app">
    <global-header />
    <router-view/>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
    components: {
        GlobalHeader
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  background: #c0c0c0;
}
</style>
