<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import ApplicationLayout from '@/layouts/ApplicationLayout.vue';
import MainWidgets from '@/components/MainWidgets.vue';
</script>

<template>
    <Head title="LaDCMS - движок для Вашего сайта"></Head>
    <ApplicationLayout headerTitle="LaDCMS - движок для Вашего сайта">
        <MainWidgets />
    </ApplicationLayout>
</template>
