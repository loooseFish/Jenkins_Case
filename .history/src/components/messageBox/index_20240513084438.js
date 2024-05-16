import Vue from "vue";
import _message from "./message.vue";
import { render } from "less";

export default {
    install(Vue) {
        let messageBox = null

        Vue.component(_message.name, _message);

        Vue.prototype.$msg = {
            show,
            hide,
        }

        function show(props) {
            if(!messageBox){
                const message = Vue.extend({
                    render
                })
            }
        }

        function hide(props) {

        }
    }

};