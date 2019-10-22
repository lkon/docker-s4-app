import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './index.html'

@WithRender
@Component
export default class App extends Vue {
    text = 'Example text'

    log () {
        console.log('output log')
    }
}
