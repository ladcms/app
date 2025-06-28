<script setup lang="ts">
import { type SharedData, type User } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';

const page = usePage<SharedData>();
const user = page.props.auth.user as User;

defineProps({
    headerTitle: {
        type: String,
    },
});
</script>

<template>
    <header class="mb-[32px] bg-[#383838] text-[#969696]">
        <div class="mx-auto my-0 max-w-[1000px] min-w-[600px]">
            <h1 class="overflow-hidden text-center text-[32px] leading-[62px] font-bold">{{ headerTitle }}</h1>
            <div class="h-[23px]" v-if="!route().current('home')">
                <Link
                    href="/"
                    class="after relative mx-[2px] inline-flex h-[23px] items-center rounded-tl-[2px] bg-[#2D2D2D] py-[3px] pr-[10px] pl-[20px] text-[13px] text-[#ffffff78] after:absolute after:top-0 after:-right-[11px] after:z-[1] after:block after:border-[11px] after:border-r-0 after:border-solid after:border-transparent after:border-l-[#2D2D2D] hover:underline"
                >
                    Главная
                </Link>
                <span
                    class="before relative mx-[2px] inline-flex h-[23px] items-center rounded-tr-[2px] bg-[#ffbb5b3d] py-[3px] pr-[10px] pl-[20px] text-[13px] text-[#FFBB5B] before:absolute before:top-0 before:left-0 before:block before:border-[11px] before:border-r-0 before:border-solid before:border-transparent before:border-l-[#2D2D2D]"
                >
                    {{ headerTitle }}
                </span>
            </div>
        </div>
        <div class="border-b border-solid border-[rgba(0,0,0,0.13)] bg-[#FFBB5B] pb-[5px] shadow-[0_2px_5px_-3px_#000_inset]">
            <div class="mx-auto my-0 flex max-w-[1000px] min-w-[600px] justify-end">
                <div class="flex gap-x-[2px]">
                    <template v-if="user">
                        <Link
                            :href="route('profile.edit')"
                            class="rounded-br-[2px] rounded-bl-[2px] bg-[#2b2b2bcc] p-[5px] text-[#FFBB5B] transition-all duration-500 hover:bg-[#2b2b2be6] hover:opacity-100"
                        >
                            {{ user.name }}
                        </Link>
                    </template>
                    <template v-else>
                        <Link
                            :href="route('register')"
                            class="rounded-br-[2px] rounded-bl-[2px] bg-[#2b2b2bcc] p-[5px] text-[#FFBB5B] transition-all duration-500 hover:bg-[#2b2b2be6] hover:opacity-100"
                        >
                            Регистрация
                        </Link>
                        <Link
                            :href="route('login')"
                            class="rounded-br-[2px] rounded-bl-[2px] bg-[#2b2b2bcc] p-[5px] text-[#FFBB5B] transition-all duration-500 hover:bg-[#2b2b2be6] hover:opacity-100"
                        >
                            Авторизация
                        </Link>
                    </template>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
