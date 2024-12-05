<script setup>
import {ref} from "vue";
import {usePage} from "@inertiajs/vue3";
import {Link} from "@inertiajs/vue3";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Listing from "@/Components/Listing.vue";
import ListingPost from "@/Components/ListingPost.vue";

const page = usePage();
let navigations = [
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
const isAuth = page.props.auth.user !== null;
const filterChildren = (navigations) => {
    const filterItems = (filterItem) => {
        if (!isAuth) {
            return filterItem.isAuth !== true;
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
navigations = ref(filterChildren(navigations));
</script>

<template>
    <Listing v-for="navigationItem in navigations">
        <ListingPost highlight>
            <i v-if="navigationItem.icon"></i>
            <span class="font-bold p-[2px]">{{ navigationItem.title }}</span>
        </ListingPost>
        <ListingPost v-for="navigationItemChild in navigationItem.children">
            <span class="p-0.5 inline-flex">
                <font-awesome-icon :icon="navigationItemChild.icon" size="lg" />
            </span>
            <Link :href="navigationItemChild.url">{{ navigationItemChild.title }}</Link>
        </ListingPost>
    </Listing>
</template>
