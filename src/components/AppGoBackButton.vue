<script setup></script>

<template>
    <router-link
        :to="{ name: 'product-list' }"
        type="button"
        class="btn whitespace-nowrap flex gap-4 items-center"
    >
        <Icon icon="cil:arrow-left" class="icon" />
        <p>Go To Homepage</p>
    </router-link>
</template>

<style scoped>
.btn:hover .icon {
    animation: point 1s ease-out infinite both;
}

@keyframes point {
    0% {
        translate: 0;
    }
    50% {
        translate: 7px;
    }
    100% {
        translate: 0;
    }
}
</style>
