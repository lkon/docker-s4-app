<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MyHeader from './MyHeader.vue';
import MyEmail from './MyEmail.vue';
import BaseInput from "@src/components/BaseInput.vue";

@Component({
    template: '#form-template',
    components: {
        MyHeader,
        MyEmail,
        BaseInput
    }
})
export default class MyForm extends Vue {

    // initial data

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
    // mounted() {
    //     console.log('mounted', this.$data)
    // }
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
input {
    background-color: #d3e0ff;
}
</style>