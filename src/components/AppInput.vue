<script setup>
defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    v: Object
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="grid gap-2">
        <label :for="id" class="ml-6 opacity-80 capitalize"> {{ label }}</label>
        <input
            type="text"
            :id="id"
            :name="id"
            :placeholder="placeholder"
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            class="border-2 border-gray-200 rounded-md py-2 px-6 w-full focus:border-black outline-none transition-all duration-200"
        />
        <p class="text-sm text-red-600 ml-6" v-if="v.$error">{{ v.$errors[0].$message }}</p>
    </div>
</template>

<style scoped></style>
