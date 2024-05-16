<template>
    <div id="message" :class="['success', type]">

        <div class="header">

            <h1>{{ title }}</h1>

            <span>x</span>

        </div>

        <div class="content">

            <span>{{ content }}</span>

        </div>

    </div>
</template>

<script>
export default {
    name: 'message',
    props: {
        type: {
            type: String,
            default: "success",
            validator(value){
                [
                    "success"
                ]
            }
        },
        content: {
            type: String,
            default: 'CONTENT'
        },
        title: {
            type: String,
            default: "TITLE"
        }
    },
    data() {
        return {
            message: 'default',
        }
    },
    components: {

    },
    methods: {

    },
    created() {

    }

}

</script>