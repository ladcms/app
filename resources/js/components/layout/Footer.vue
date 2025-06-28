<script setup lang="ts">
import type { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import { inject } from 'vue';

const RequestDuration = inject('RequestDuration');
const RequestDurationHeader = (document.querySelector('meta[name="x-request-duration"]') as HTMLMetaElement).content;

const page = usePage<SharedData>();
const currentLocale = page.props.current_locale;
</script>

<template>
    <footer class="min-h-[50px] bg-[#383838] p-[15px] text-[#ffbb5b]">
        <div class="mx-auto my-0 flex max-w-[1000px] min-w-[600px] flex-row items-center justify-between">
            <div>Archive &copy;<Link :href="route('home')">LaDCMS</Link>, 2024</div>
            <div>Время генерации: {{ RequestDuration ? RequestDuration : RequestDurationHeader }} сек</div>
            <div>Язык:<Link :href="route('change-language')" class="underline">{{ currentLocale }}</Link></div>
        </div>
    </footer>
</template>
