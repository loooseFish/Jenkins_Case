<template>
    <div :class="['message', type]">

        <!-- new (no), validator (no), -->


        <div class="header">

            <span>{{ title }}</span>

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
    transition: all 0.3s;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #000;
    width: 300px;
    height: 100px;
    border-radius: 5px;
    box-shadow: 0 2px 5px #aeaeae;
    .displayFlex(center, space-evenly, column);

    .header {
        width: 180px;

        .displayFlex(baseline, space-between, row);
    }

    .content {
        width: 180px;

        .displayFlex(baseline, space-between, row);
    }
}

.success {
    background-color: #00ff4c20;
}

.primany {
    background-color: #ffe10020;
}

.error {
    background-color: #ff000020;
}

.info {
    background-color: #00ff4c20;
}
</style>