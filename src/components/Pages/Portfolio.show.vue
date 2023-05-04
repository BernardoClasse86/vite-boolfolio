<template>
    <div v-if="loading === false" class="container">
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
    </div>

    <div v-else class="container loading">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../ProjectCard.vue';

    export default {
        components: {
            ProjectCard,
        },
        data() {
            return {
                project: null,
                loading: true
            }
        },
        methods: {
            fetchProject() {

                this.loading = true

                axios.get(`http://127.0.0.1:8000/api/projects/${ this.$route.params.slug }`)
                .then(res => {
                    console.log(res)
                    const {success, project } = res.data

                    if(success) {
                        this.project = project
                    } else {
                        'nessun progetto'
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(()=> {
                    this.loading = false
                })
            }
        },
        created() {
            this.fetchProject()
        },
    }
</script>

<style lang="scss" scoped>
@use '../src/styles/partials/_resets' as *;
@use '../src/styles/partials/_variables' as *;
@use '../src/styles/partials/_card' as *;
@use '../src/styles/partials/_loading' as *;


.container {
    height: 100vh;
    padding: 4rem 0;
}

.container.loading{
    display: flex;
    align-items: center;
    justify-content: center;
}
.project-card {
    width: max-content;
    margin: 0 auto;
}
</style>