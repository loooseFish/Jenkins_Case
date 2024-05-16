import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        Vue.component(_message.name, _message);

        let message = null

        let vm = null;

        Vue.prototype.$msg = {
            show,
        }

        function show(props) {
            Vue.extend({
                render(h){
                    
                }
            })
        }
    }
}