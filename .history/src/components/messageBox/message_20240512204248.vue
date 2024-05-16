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

.displayFlex(@one, @two, @three) {
    display: flex;
    align-items: @one;
    justify-content: @two;
    flex-direction: @three;
}

.message {

    width: 300px;
    height: 200px;
    .displayFlex(center, center, column);

    align-items: baseline;
    .header {
        width: 180px;

        .displayFlex(baseline, space-around, row);
    }
}
</style>