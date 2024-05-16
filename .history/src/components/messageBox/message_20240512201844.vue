<template>
    <div id="message" :class="['success', type]">

        <div></div>
        <div></div>

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