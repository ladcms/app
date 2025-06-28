<script setup lang="ts">

import Listing from '@/components/Listing.vue';
import ListingPost from '@/components/ListingPost.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { NavigationGroups, NavigationItem, SharedData, User } from '@/types';
import { ref } from 'vue';

const page = usePage<SharedData>();
const user = page.props.auth.user as User;

const defaultNavigations: NavigationGroups = [
    {
        title: 'Админ-центр',
        url: '',
        icon: '',
        isAuth: true,
        isVip: false,
        group: '2',
        children: [
            {
                title: 'Админка',
                url: route('dashboard'),
                icon: 'dpanel',
                isAuth: true,
                isVip: false,
                group: '2',
            }
        ]
    },
    {
        title: 'Общение',
        url: '',
        icon: '',
        isAuth: false,
        isVip: false,
        group: '',
        children: [
            {
                title: 'Мини чат',
                url: '',
                //url: route('chat-mini'),
                icon: ['fab', 'rocketchat'],
                isAuth: false,
                isVip: false,
                group: '',
            },
            {
                title: 'Форум',
                url: '',
                //url: route('forum'),
                icon: ['fas', 'comments'],
                isAuth: false,
                isVip: false,
                group: '',
            }
        ]
    },
    {
        title: 'Скачать',
        url: '',
        icon: '',
        isAuth: false,
        isVip: false,
        group: '',
        children: [
            {
                title: 'Загрузки',
                url: '',
                //url: route('downloads'),
                icon: ['fas', 'download'],
                isAuth: false,
                isVip: false,
                group: '',
            },
            {
                title: 'Файлообменник',
                url: '',
                //url: route('file_uploads'),
                icon: ['fab', 'files-pinwheel'],
                isAuth: false,
                isVip: false,
                group: '',
            }
        ]
    }
]
const filterChildren = (navigations: NavigationGroups): NavigationGroups => {
    const filterItems = (filterItem: NavigationItem) => {
        if (!(user !== null)) {
            return !filterItem.isAuth;
        }
        return true;
    }
    navigations = navigations.filter(filterItems);
    navigations.map(navigationItem => {
        navigationItem.children = navigationItem.children.filter(filterItems)
        return navigationItem;
    })
    return navigations;
}
const navigations = ref(filterChildren(defaultNavigations));
</script>

<template>
    <Listing v-for="navigationItem in navigations" :key="navigationItem.title">
        <ListingPost highlight>
            <span v-if="navigationItem.icon" class="p-0.5 inline-flex">
                <font-awesome-icon :icon="navigationItem.icon" size="lg" />
            </span>
            <span class="font-bold p-[2px]">{{ navigationItem.title }}</span>
        </ListingPost>
        <ListingPost v-for="navigationItemChild in navigationItem.children" :key="navigationItemChild.title" class="flex items-center gap-1">
            <span v-if="navigationItemChild.icon" class="p-0.5 inline-flex">
                <font-awesome-icon :icon="navigationItemChild.icon" size="lg" />
            </span>
            <Link :href="navigationItemChild.url">{{ navigationItemChild.title }}</Link>
        </ListingPost>
    </Listing>
</template>
