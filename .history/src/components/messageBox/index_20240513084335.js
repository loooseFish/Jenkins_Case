import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        let mess

        Vue.component(_message.name, _message);

        Vue.prototype.$msg = {
            show,
            hide,
        }

        function show(props) {

        }

        function hide(props) {

        }
    }

};