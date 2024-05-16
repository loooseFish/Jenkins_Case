import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        let message = null;
        let vm = null;

        Vue.component(_message.name, _message);

        Vue.prototype.$msg = {
            show
        }

        function show(props) {
            if (!message) {
                Vue.
            }
        }
    }

};