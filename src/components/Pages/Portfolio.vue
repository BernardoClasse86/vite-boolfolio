<template>
    
    <div class="container">
        <h1 class="portfolio_title">My Portfolio of Projects</h1>
        <Projects/>
    </div>
</template>

<script>
import Projects from '../Projects.vue';
    export default {
        components: {
            Projects
        }
    }
</script>

<style lang="scss" scoped>
@use '../src/styles/partials/_resets' as *;
@use '../src/styles/partials/_variables' as *;

.container {
    padding-top: 5rem;
    font-family: 'Roboto Mono', monospace;
}
.portfolio_title {
    text-align: center;
    color: $big-text;
    margin-bottom: 3rem;
}
</style>