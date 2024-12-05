<script setup>
import News from "@/Components/Widgets/News.vue";
import ChatMini from "@/Components/Widgets/ChatMini.vue";
import {ref} from "vue";

const allWidgets = [
    {
        name: 'News',
        component: News,
    },
    {
        name: 'ChatMini',
        component: ChatMini,
    }
];

const widgetsShowed = {
    'News': 1,
    'ChatMini': 1
};

const widgets = ref(allWidgets.filter((widget) => {
    return widgetsShowed[widget.name] === 1;
}));
</script>

<template>
    <component :is="widget.component" v-for="widget in widgets" />
</template>
