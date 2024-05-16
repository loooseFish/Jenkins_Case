import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        let messageBox = null
        let vm = null

        Vue.component(_message.name, _message);

        Vue.prototype.$msg = {
            show,
            hide,
        }

        function show(props) {
            if (!messageBox) {
                messageBox = Vue.extend({
                    render(h) {
                        return h('message', { props })
                    }
                })

                vm = new messageBox().$mount();

                document.body.appendChild(vm.$el);
            }
        }

        function hide(props) {
            document.body.removeChild(vm.$el);
            messageBox = null;
        }
    }

};