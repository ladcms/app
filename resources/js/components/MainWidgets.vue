<script setup lang="ts">
import { ref } from 'vue';

import ChatMini from '@/components/widgets/ChatMini.vue';
import News from '@/components/widgets/News.vue';

interface Widget {
    name: 'News' | 'ChatMini';
    component: any;
}

const allWidgets: Widget[] = [
    {
        name: 'News',
        component: News,
    },
    {
        name: 'ChatMini',
        component: ChatMini,
    },
];

const widgetsShowed: Record<'News' | 'ChatMini', number> = {
    News: 1,
    ChatMini: 1,
};

const widgets = ref(
    allWidgets.filter((widget) => {
        return widgetsShowed[widget.name] === 1;
    }),
);
</script>

<template>
    <component :is="widget.component" v-for="widget in widgets" :key="widget.name" />
</template>
