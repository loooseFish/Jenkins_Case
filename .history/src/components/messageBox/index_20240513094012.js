import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        Vue.components(_message.name, _message);

        Vue.extend({
            render(h){
                return (h)
            }
        })
    }
}