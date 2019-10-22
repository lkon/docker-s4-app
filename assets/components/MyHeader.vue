<template>
    <div>
        <slot/>
        <h1 id="header">Обо мне</h1>
        <my-title>
            <template #title>
                <span>Loading... !</span>
            </template>
        </my-title>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import MyTitle from './MyTitle';

    @Component({
        name: 'MyHeader',
        components: {
            MyTitle
        }
    })
    export default class extends Vue {
        text = 'Example text'
    }
</script>

<style scoped>

</style>