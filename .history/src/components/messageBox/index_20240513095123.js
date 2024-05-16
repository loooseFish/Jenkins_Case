import Vue from "vue";
import _message from "./message.vue";

export default {
    install(Vue) {
        Vue.component(_message.name, _message);

        let message = null

        let vm = null;

        Vue.prototype.$msg = {
            show,
        }

        function show(props) {

            message = Vue.extend({
                render(h) {
                    return h('message', { props })
                }
            })

            vm = new message().$mount()
            document.body.appendChild(vm.$el);

            setTimeout(() => {
                document.body.removeChild(vm.$el);

                if (document.body.contains(this.$el)) {
                    document.body.removeChild(this.$el);
                }

            }, 1950);
        }
    }
}