import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        Vue.component(_message.name, _message);

        let message = Vue.extend({
            render(h) {
                return h('message', {});
            }
        })

        let vm = new message().$mount();

        document.body.appendChild()
    }
}