<script setup>
import Header from "@/Layouts/Header.vue";
import Footer from "@/Layouts/Footer.vue";

defineProps({
    headerTitle: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <div class="flex flex-col h-screen relative text-[90%]">
        <Header :headerTitle="headerTitle"/>
        <div class="flex-grow flex flex-row mt-[32px] gap-x-[10px]">
            <nav class="w-[30%]">

            </nav>
            <main class="w-[70%]">
                <slot/>
            </main>
        </div>
        <Footer/>
    </div>
</template>
