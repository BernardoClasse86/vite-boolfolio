<template>

    <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
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
            projects: []
        }
    },
    methods: {
        fecthProjects(){
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
.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    justify-content: space-between;
    padding: 0 2rem 2rem;
}
</style>
