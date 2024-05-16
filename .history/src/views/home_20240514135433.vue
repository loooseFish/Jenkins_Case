<template>
    <div>
        <button @click="logName">{{ name }}</button>
        {{ $ats }}
    </div>
</template>

<script>
import mixin from './mixin';
export default {
    mixins: [mixin],
    inheritAttrs: false,
}
</script>