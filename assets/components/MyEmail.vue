<template>
<div class="row">
    <slot />
    <input v-bind="attrs" @focus="onfocus"/>
    <!--        <slot name="form"></slot>-->
    <!--        <slot name="label"></slot>-->
    <!--        <slot name="email"></slot>-->
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// type IEmailData = {
//     first_name : string;
// }

@Component({
    // props: {
    //     form:  {
    //         type: Object as any
    //     }
    // }
})
export default class MyEmail extends Vue {
    attrs: any = {};

    // beforeCreate() {
    //     const beforeCreate = {...this.$slots};
    //     console.log('beforeCreate', beforeCreate)
    // }
    //
    // created() {
    //     const created = {...this.$slots};
    //     console.log('created', created)
    // }
    //
    // beforeMount() {
    //     const beforeMount = {...this.$slots};
    //     console.log('beforeMount', beforeMount)
    // }

    mounted() {
        const [email] = this.$scopedSlots['email'](0);
        this.attrs = {...email.data.attrs};
    }

    onfocus(ev: Event){
        console.log(ev)
    }

    // beforeUpdate() {
    //     const beforeUpdate = {...this.$slots};
    //     console.log('beforeUpdate', beforeUpdate)
    // }
    //
    // updated() {
    //     const updated = {...this.$slots};
    //     console.log('updated', updated)
    // }
    //
    // activated() {
    //     const activated = {...this.$slots};
    //     console.log('activated', activated)
    // }
    //
    // deactivated() {
    //     const deactivated = {...this.$slots};
    //     console.log('deactivated', deactivated)
    // }
    //
    // destroyed() {
    //     const destroyed = {...this.$slots};
    //     console.log('destroyed', destroyed)
    // }
}
</script>

<style scoped>

</style>