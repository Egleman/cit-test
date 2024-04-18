<template>
  <HeaderApp/>
  <MainHeroSection class="hero_catalog" title="Собрание древних<br> знаний"/>
  <BookSection url="-bbkTEl2iULy/data" title="Библиотека" :showMoreBtn="false"/>
  <FooterApp/>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp/HeaderApp.vue";
import MainHeroSection from "@/components/MainHeroSection/MainHeroSection.vue";
import BookSection from "@/components/BooksSection/BookSection.vue";
import FooterApp from "@/components/FooterApp/FooterApp.vue";
</script>
