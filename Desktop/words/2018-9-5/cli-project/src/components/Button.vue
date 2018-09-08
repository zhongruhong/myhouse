<template>
    <button type="button" class="btn" :style="{color:color}">
        <slot />
    </button>
</template>

<script>
    export default {
        props: {
            color:String
        }
    }
</script>

<style>
    .btn {
        width: 100px;
        height: 100px;
    }
</style>