<script setup lang="ts">
import Listing from '@/components/Listing.vue';
import ListingPost from '@/components/ListingPost.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <Listing>
        <ListingPost class="flex items-center">
            <span class="inline-flex p-0.5">
                <font-awesome-icon :icon="['fab', 'rocketchat']" size="lg" />
            </span>
            <!--            route('chat-mini')-->
            <Link href="/" class="p-0.5 font-bold">Мини чат</Link>
        </ListingPost>
    </Listing>
</template>

<style scoped></style>
