<script>
import Header from './components/Header/MainHeader.vue'
import Projects from './components/Projects.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  components: {
    Header,
    Projects,
    Footer
  }
}

</script>

<template>
<div class="app-bg">
  <header class="container">
    <Header />
  </header>
  
  <div class="container">
    <router-view></router-view>
  </div>

  <footer class="container">  
    <Footer />
  </footer>
</div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/_variables.scss' as *;

.app-bg {
  background-color: $app-bg;
}
</style>
