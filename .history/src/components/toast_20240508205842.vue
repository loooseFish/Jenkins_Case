<template>
    <div class="toast">
        {{ message }}
    </div>
</template>

<script>

export default {
    data() {
        return {
            message: 'default',

        }
    },
    methods: {

    },

}

</script>

<style>
.toast {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>