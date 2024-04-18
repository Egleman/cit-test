<template>
    <section class="section subscribe">
        <div class="container">
            <div class="section__title">
                <h2 class="title">Узнать о новом поступление</h2>
            </div>
            <div class="subscribe__wrapper">
                <form action="#" class="subscribe__form">
                    <InputApp placeholder="Имя" v-model="formBody.name"/>
                    <InputApp placeholder="Телефон" phoneMask v-model="formBody.phone"/>
                    <InputApp placeholder="Email" v-model="formBody.email"/>
                    <button type="submit" class="button">Отправить</button>
                </form>
                <div class="subscribe__wrapper-text">
                    Поступление новой литературы в библиотеку всегда является знаменательным событием, 
                    как для библиотекарей, так и для читателей. Интересные авторы, разнообразные 
                    жанры порадуют многих посетителей библиотеки.
                    <br><br>
                    С целью представления читателям в библиотеке оформлена книжная выставка 
                    <q>Новинки книг</q>.Среди поступлений серия книг Стивена Кинга, серия по 
                    психологии, романы и бестселлеры современных авторов, а также книги Джена 
                    Синсеро, автора международных бестселлеров НИ СЫ и НЕ НОЙ и многое другое.
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import InputApp from '@/components/ui/InputApp/InputApp.vue';
const formBody = ref({
    name: '',
    phone: '',
    email: ''
})
</script>