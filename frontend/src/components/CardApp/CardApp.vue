<template>
    <div class="card">
        <div class="card__top">
            <div class="card__label">{{ card.category }}</div>
            <div class="card__price">{{ card.price }}</div>
        </div>
        <div class="card__image">
            <img :src="card.picture" alt="card-image">
        </div>
        <div class="card__body">
            <p class="card__name">{{ card.title }}</p>
            <p class="card__description">
                {{ card.text }}
            </p>
         </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  card: Object
});
const {card} = props;
</script>