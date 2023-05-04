<template>

    <div v-if="loading === false" class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>

    <div v-else class="container">
        <div class="lds-dual-ring"></div>
    </div>

</template>

<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue';

export default {
    components:
    {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            loading: true
        }
    },
    methods: {
        fecthProjects(){

            this.loading = true

            axios.get('http://127.0.0.1:8000/api/projects', {
            })
            .then(res=> {
    
                // console.log(res.data)
    
                const results = res.data.results

                // console.log(results)

                this.projects = results

                // console.log(this.projects)
    
            })
            .catch(err => {
                console.log(err)
            })
            .finally(()=> {
                this.loading = false
            })
        },
    },
    mounted() {
        this.fecthProjects()
    },
}
</script>

<style lang="scss" scoped>
@use '../src/styles/partials/_resets' as *;
@use '../src/styles/partials/_variables' as *;
@use '../src/styles/partials/_loading' as *;
.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    justify-content: space-between;
    padding: 0 2rem 2rem;
}

.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
