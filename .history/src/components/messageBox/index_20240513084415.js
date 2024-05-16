import Vue from "vue";
import _message from "./message.vue";

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
                    
                })
            }
        }

        function hide(props) {

        }
    }

};