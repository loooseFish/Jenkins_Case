<template>
    <div id="message" :class="['success', type]">

        <div class="header">

            <h1>{{ title }}</h1>

        </div>

        <div class="content">

            

        </div>

    </div>
</template>

<script>
export default {
    name: 'message',
    props: {

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