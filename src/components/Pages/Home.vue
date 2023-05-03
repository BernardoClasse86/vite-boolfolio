<template>
    <div class="container intro">
        <div class="column">
            <p>Hello, my name is,</p>
            <p class="my_name">Bernardo</p>
            <p>I like to build things on the internet</p>
            <p>I am a Junior Web Developer with some skills in FrontEnd and Backend</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/_variables.scss' as*;

.intro {
    padding: 5rem 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    color: $text;

    .column {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .my_name {
            font-family: 'Bruno Ace', cursive;
            font-size: 2rem;
            color: $big-text;
        }
    }
}

</style>