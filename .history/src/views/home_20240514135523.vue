<template>
    <div>
        <button @click="logName">{{ name }}</button>
        {{ $attrs }}
        in
    </div>
</template>

<script>
import mixin from './mixin';
export default {
    mixins: [mixin],
    inheritAttrs: false,
}
</script>