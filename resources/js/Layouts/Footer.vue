<script setup>
import {Link} from "@inertiajs/vue3";
</script>

<template>
    <footer
        class="min-h-[50px] p-[15px] text-[#ffbb5b] bg-[#383838] flex items-center flex-row justify-between">
        <div>Archive &copy;<Link href="/">LaDCMS</Link>, 2024</div>
        <div>Время генерации: {{ $page.props.time_rendered }}</div>
        <div>Язык: <Link :href="route('change-language')" class="underline">{{ $page.props.current_locale }}</Link></div>
    </footer>
</template>
