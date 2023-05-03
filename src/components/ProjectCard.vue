<template>

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

.project-card {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: $card-bg;
    
    .icons-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;

        .folder-icon {
            font-size: 2.5rem;
        }

        .icon-links-row {
            display: flex;
            align-items: center;
            gap: 1rem;
            .link-icon {
                font-size: 1.5rem;
            }
        }
    }

    .proj-details {
        padding: 0.75rem;
        .card_title {
            color: $big-text;
            font-size: 1.125rem;
            margin-bottom: 1rem;
        }
        .card_text {
            color: $text;
            font-size: 0.875rem;
        }
    }

    .techno-list {
        margin-top: auto;

        .card_list {
            display: flex;
            gap: 0.5rem;
            padding: 0.75rem;
            .card_list_item {
                color: $text;
                padding: 0.25rem;
            }
        }
    }
}
</style>