<script setup>

import Listing from "@/Components/Listing.vue";
import ListingPost from "@/Components/ListingPost.vue";
import {Link} from "@inertiajs/vue3";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
    <Listing>
        <ListingPost class="flex items-center">
            <span class="p-0.5 inline-flex">
                <font-awesome-icon :icon="['fab', 'rocketchat']" size="lg" />
            </span>
            <!--            route('chat-mini')-->
            <Link href="/" class="font-bold p-0.5">Мини чат</Link>
        </ListingPost>
    </Listing>
</template>

<style scoped>

</style>
