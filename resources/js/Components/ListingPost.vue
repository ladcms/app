<script setup>

defineProps({
    highlight: {
        type: Boolean
    }
})

</script>

<template>
    <div
        class="relative overflow-hidden text-[90%] text-[#383838] py-3 px-1 border-b border-solid border-b-[#F3F3F3] my-[5px] border-l-[3px]"
        :class="{'border-l-[#383838]': highlight, 'border-l-[#FFBB5B] transition-all duration-500 hover:cursor-pointer hover:bg-[#ffbb5b0d] hover:border-l-[#383838]': !highlight}">
        <slot/>
    </div>
</template>

<style scoped>
div:last-child {
    @apply border-b-0
}
</style>
