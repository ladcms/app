<script setup>
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
import Navigation from "@/Components/Navigation.vue";
import MainWidgets from "@/Components/MainWidgets.vue";

defineProps({
    headerTitle: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <div class="text-[90%] text-[#4F5155] h-full flex flex-col">
        <div class=" bg-[#00000012] flex-grow">
            <Header :headerTitle="headerTitle"/>
            <div class="min-w-[600px] max-w-[1000px] mx-auto my-0 flex flex-row gap-x-[10px]">
                <nav class="w-[30%] flex flex-col gap-y-3">
                    <Navigation />
                </nav>
                <main class="w-[70%] flex flex-col gap-y-3">
                    <slot>
                        <MainWidgets />
                    </slot>
                </main>
            </div>
        </div>
        <Footer/>
    </div>
</template>
