<template>

    <div class="container">

        <h1 class="title">Projects</h1>

        <div class="projects-row">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>

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
.title {
    text-align: center;
    padding: 2rem 0;
}
.projects-row {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    row-gap: 2rem;
    justify-content: space-between;
}
</style>