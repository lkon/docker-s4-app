<template>
<div class="email-wrapper">
    {{emailData.first_name}}
    <slot name="email" :emailData="emailData"></slot>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

type IEmailData = {
    first_name : string;
}

@Component({
    props: {
        emailData: {
            type: Object as () => IEmailData
        }
    }
})
export default class MyEmail extends Vue {
    mounted() {
        console.log('mounted', this.$props.emailData)
    }
}
</script>

<style scoped>

</style>