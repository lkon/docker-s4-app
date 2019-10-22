// Для работы/импорта файлов *.vue в TypeScript, требуется шим
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

// Определение типа модуля TypeScript, требуемого vue-template-loader
declare module '*.html' {
    import Vue, { ComponentOptions, FunctionalComponentOptions } from 'vue'

    interface WithRender {
        <V extends Vue, U extends ComponentOptions<V> | FunctionalComponentOptions>(options: U): U
        <V extends typeof Vue>(component: V): V
    }
    const withRender: WithRender
    export default withRender
}
