<template>
    <div>
        <button @click="logName">{{ name }}</button>
        {{ $attrs }}
        <input :value="value">
    </div>
</template>

<script>
import mixin from './mixin';
export default {
    props: ['value'],
    mixins: [mixin],
    inheritAttrs: false,
    watch:{

    }
}
</script>