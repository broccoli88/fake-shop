<script setup></script>

<template>
    <button
        v-bind="$attrs"
        class="font-display uppercase font-medium tracking-widest py-2 px-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-200"
    >
        <slot />
    </button>
</template>

<style scoped></style>
