<template>
    <div :class="['message', type]">

        <!-- new (no), validator (no), -->


        <div class="header">

            <span>{{ title }}</span>

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
            // validator(value) {
            //     [
            //         "success",
            //         "primany",
            //         "error",
            //         "info"
            //     ].includes(value);
            // }
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

<style lang="less">
body {
    margin: 0;
}

.displayFlex(@one, @two) {
    display: flex;
    flex-direction: column;
    align-items: @one;
    justify-content: center;
}

.message {

    width: 300px;
    height: 200px;
    .displayFlex(1,2);

    border: 1px solid #000;

    .header {
        width: 180px;
        border: 1px solid #000;
    }
}
</style>