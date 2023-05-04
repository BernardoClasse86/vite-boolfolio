<template>
    <div class="container intro">
        <div class="column">
            <p class="slide-in-1 wave">Hello, my name is,</p>
            <p class="slide-in-2 my_name">Bernardo.</p>
            <p class="slide-in-3 intro_desc">I like to build things on the internet</p>
            <p class="slide-in-4 little_desc">I am a Junior Web Developer with some skills in FrontEnd and Backend. I worked with my father since last year when i wanted to completely change my life, so i bougth an online tech course Boolean, i studied and now im here to chang my life.</p>
            <div class="slide-in-5 btn-container">
                <div class="btn">
                    <router-link :to="{name:'about'}">Find more About Me</router-link>
                </div>
            </div>
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
@use '../src/styles/partials/_slide.scss' as*;
@use '../src/styles/partials/_button.scss' as*;


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
        font-size: 1.5rem;

        .wave {
            color: $links;
        }

        .my_name {
            font-family: 'Bruno Ace', cursive;
            font-size: 5rem;
            color: $big-text;
        }

        .intro_desc {
            color: $text-small;
            font-size: 3rem;
        }
        .little_desc {
            margin-bottom: 1rem;
        }
    }
}

</style>