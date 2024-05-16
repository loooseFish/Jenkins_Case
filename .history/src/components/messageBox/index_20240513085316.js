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

        show()

        function show(props) {
            if (!messageBox) {
                let message = Vue.extend({
                    render(h) {
                        return h('message', { props })
                    }
                })

                message = new message();

                console.log();
            }
        }

        function hide(props) {

        }
    }

};