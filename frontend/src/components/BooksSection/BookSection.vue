<template>
    <section class="books section">
        <div class="container">
            <div class="section__title">
                <h2 class="title">{{ title }}</h2>
                <router-link to="/catalog" class="section__title-more" v-if="showMoreBtn">
                    Посмотреть больше
                </router-link>
            </div>
            <div class="books__grid" v-show="!isLoading">
                <CardApp
                    v-for="card in data"
                    :key="card.id"
                    :card="card"
                />
            </div>
            <SpinnerApp v-if="isLoading"/>
        </div>
    </section>
</template>
<script setup>
import {useBookHelper} from "./helpers/bookHelper";
import CardApp from "@/components/CardApp/CardApp.vue";
import SpinnerApp from "@/components/ui/SpinnerApp/SpinnerApp.vue";
import { defineProps } from 'vue';
const props = defineProps({
  url: {
    type: String,
  },
  title: {
    type: String
  },
  showMoreBtn: {
    type: Boolean,
    default: true
  }
});
const {url, title, showMoreBtn} = props;
const { data, isLoading } = useBookHelper(url);
</script>