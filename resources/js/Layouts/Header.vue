<script setup>

import {Link} from "@inertiajs/vue3";

defineProps({
    headerTitle: {
        type: String
    },
})


</script>

<template>
    <header class="text-[#969696] bg-[#383838]">
        <div class="min-w-[600px] max-w-[1000px]">
            <h1 class="overflow-hidden text-center text-[32px] font-bold leading-[62px]">{{ headerTitle }}</h1>
            <div class="h-[23px]" v-if="!route().current('main')">
                <Link href="/"
                      class="h-[23px] inline-flex items-center text-[13px] bg-[#2D2D2D] py-[3px] pr-[10px] pl-[20px] mx-[2px] text-[#ffffff78] hover:underline rounded-tl-[2px] relative after after:block after:absolute after:top-0 after:-right-[11px] after:z-[1] after:border-[11px] after:border-solid after:border-transparent after:border-l-[#2D2D2D] after:border-r-0">
                    Главная
                </Link>
                <span
                    class="h-[23px] inline-flex items-center text-[13px] bg-[#ffbb5b3d] py-[3px] pr-[10px] pl-[20px] mx-[2px] text-[#FFBB5B] rounded-tr-[2px] relative before before:block before:absolute before:top-0 before:left-0 before:border-[11px] before:border-solid before:border-transparent before:border-l-[#2D2D2D] before:border-r-0">
                {{ headerTitle }}
            </span>
            </div>
        </div>
        <div
            class="pb-[5px] bg-[#FFBB5B] border-b border-solid border-[rgba(0,0,0,0.13)] shadow-[0_2px_5px_-3px_#000_inset] items-center justify-end ">
            <div class="min-w-[600px] max-w-[1000px]">
                <div class="flex gap-x-[2px]">
                    <template v-if="$page.props.canLogin">
                        <template v-if="$page.props.auth.user">
                            <Link
                                :href="route('profile.show')"
                                class="p-[5px] text-[#FFBB5B] bg-[#2b2b2bcc] rounded-br-[2px] rounded-bl-[2px] hover:opacity-100 hover:bg-[#2b2b2be6] transition-all duration-500"
                            >
                                {{ $page.props.auth.user.name }}
                            </Link>
                        </template>
                        <template v-else>
                            <Link
                                v-if="$page.props.canRegister"
                                :href="route('register')"
                                class="p-[5px] text-[#FFBB5B] bg-[#2b2b2bcc] rounded-br-[2px] rounded-bl-[2px] hover:opacity-100 hover:bg-[#2b2b2be6] transition-all duration-500"
                            >
                                Регистрация
                            </Link>
                            <Link
                                :href="route('login')"
                                class="p-[5px] text-[#FFBB5B] bg-[#2b2b2bcc] rounded-br-[2px] rounded-bl-[2px] hover:opacity-100 hover:bg-[#2b2b2be6] transition-all duration-500"
                            >
                                Авторизация
                            </Link>
                        </template>
                    </template>
                </div>
            </div>

        </div>
    </header>
</template>
