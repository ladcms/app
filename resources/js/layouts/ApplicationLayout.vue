<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import Navigation from '@/components/layout/Navigation.vue';
import MainWidgets from '@/components/MainWidgets.vue';

defineProps({
    headerTitle: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <div class="flex h-full flex-col text-[90%] text-[#4F5155]">
        <div class="flex-grow bg-[#00000012]">
            <Header :headerTitle="headerTitle" />
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
        <Footer />
    </div>
</template>
