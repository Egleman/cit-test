<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title" v-html="title"></h1>
    </div>
  </section>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: 'Книги, которые<br> вознесут вас на<br> Олимп'
  }
});
const {title} = props;
</script>