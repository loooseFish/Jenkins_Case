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

        show()

        function show(props) {
            if (!message) {
                message = Vue.extend({
                    render(h) {
                        return h('message', props);
                    }
                })

                vm = new message().$mount();

                document.body.appendChild(vm.$el);

                setTimeout(() => {
                    document.body.removeChild(vm.$el);
                    message = null;
                    vm = null
                }, 1450);
            }
        }
    }

};