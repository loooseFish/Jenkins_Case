import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        Vue.component(_message.name, _message);

        Vue.prototype.$msg = {

        }
   
    }

};