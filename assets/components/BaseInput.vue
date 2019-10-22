<template>
    <input type="text" :name="name">
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        name: {
            type: String,
            default: ''
        },
    },
})
export default class BaseInput extends Vue {

    // beforeCreate() {
    //     console.log('beforeCreate', this)
    // }
    //
    // created() {
    //     console.log('created', this)
    // }
    //
    // beforeMount() {
    //     console.log('beforeMount', this)
    // }
    //
    mounted() {
        console.log('mounted', this.$props)
    }
    //
    // beforeUpdate() {
    //     console.log('beforeUpdate', this)
    // }
    //
    // updated() {
    //     console.log('updated', this)
    // }
    //
    // activated() {
    //     console.log('activated', this)
    // }
    //
    // deactivated() {
    //     console.log('deactivated', this)
    // }
    //
    // destroyed() {
    //     console.log('destroyed', this)
    // }
}
</script>

<style scoped>
</style>