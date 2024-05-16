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

            document.body.appendChild(new message().$mount().$el);

            setTimeout(() => {
                document.body.removeChild(new message().$mount().$el);

                if (document.body.contains(this.$el)) {
                    document.body.removeChild(this.$el);
                }

            }, 1950);
        }
    }
}