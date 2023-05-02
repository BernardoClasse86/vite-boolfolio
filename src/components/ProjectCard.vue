<template>
    <div class="col-4">
        <div class="project-card">
            <div class="card-details-column">
                <h1 class="card_title">{{ project.title }}</h1>
                <p class="card_type">{{ project.type ? project.type.name: 'No work Type' }}</p>
                <ul class="card_list">
                    <li class="card_list_item" v-for="technology in project.technologies" :key="technology.id">{{technology.name}}</li>
                </ul>
            </div>
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
.col-4 {
    flex-basis: calc(100% * (4/12) - (32px * 2));

    .project-card {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        height: 200px;
        background: linear-gradient(0deg, rgba(162,162,162,1) 0%, rgba(79,101,176,0.3757878151260504) 52%, rgba(54,43,68,0.3337710084033614) 100%);
        
        .card-details-column {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: space-between;

            .card_title {
                text-align: center;
                color: white;
                font-size: 1.5rem;
            }

            .card_type {
                font-style: italic;
                font-weight: bold;
                color: rgb(90, 63, 90);
                text-align: center;
            }

            .card_list {
                display: flex;
                gap: 0.5rem;

                .card_list_item {
                    background-color: rgb(93, 100, 174);
                    border-radius: 999px;
                    padding: 0.25rem;
                }
            }
        }
    }
}
</style>