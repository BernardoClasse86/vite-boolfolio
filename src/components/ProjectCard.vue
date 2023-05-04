<template>

    <router-link :to="{ name:'portfolio.show', params: {slug:project.slug}}">

        <div class="project-card">

            <div class="icons-row">
                <font-awesome-icon class="folder-icon" :icon="['far', 'folder']" style="color: #06d6a0;" />
                <div class="icon-links-row">
                    <a href="link to github proj"><font-awesome-icon class="link-icon" :icon="['fab', 'github']" style="color: #6c757d;" /></a>
                    <a href="link to the project"><font-awesome-icon class="link-icon" :icon="['fas', 'up-right-from-square']" style="color: #6c757d;" /></a>
                </div>
            </div>
        
            <div class="proj-details">
                <h1 class="card_title">{{ project.title }}</h1>
                <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, incidunt!</p>
            </div>

            <div class="techno-list">
                <ul class="card_list">
                    <li class="card_list_item" v-for="technology in project.technologies" :key="technology.id">{{technology.name}}</li>
                </ul>
            </div>

        </div>

    </router-link>

</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../src/styles/partials/_resets' as *;
@use '../src/styles/partials/_variables' as *;
@use '../src/styles/partials/_card' as *;
</style>