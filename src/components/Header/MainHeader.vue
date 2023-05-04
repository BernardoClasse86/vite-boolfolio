<template>
    <div class="container header">
        <NavBar />
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';

    export default {
        components: {
            NavBar,
        },
        methods: {
            pageScroll() {
                const header = document.querySelector('.header')
                const pagePosition = window.scrollY

                if(pagePosition > 0) {
                    header.classList.add('shadow')
                }else {
                    header.classList.remove('shadow')
                }
            }
            
        },
        mounted() {
            window.addEventListener('scroll', this.pageScroll)
        }
    }
</script>

<style lang="scss" scoped>
@use '../src/styles/partials/resets' as *;
@use '../src/styles/partials/variables' as *;
.header {
  background-color: $head-bg;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.shadow {
  box-shadow: 0 10px 30px -10px;
}
</style>