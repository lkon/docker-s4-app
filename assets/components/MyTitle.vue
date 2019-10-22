<template>
<div>
    <slot name="title"></slot>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'MyTitle'
})
export default class extends Vue {
}
</script>

<style scoped>

</style>