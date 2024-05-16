<template>
    <div>
        <button @click="logName">{{ name }}</button>
    </div>
</template>

<script>
import mixin from './mixin';
export default{
    mixins:[min]
}
</script>