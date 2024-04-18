<template>
    <section class="about section">
        <div class="container">
            <div class="section__title">
                <h2 class="title">О нас</h2>
                <router-link to="/catalog" class="section__title-more">
                    Посмотреть больше
                </router-link>
            </div>
            <ul class="about__list">
                <li class="about__list-item">
                    <div class="about__block">
                        <div class="about__block-icon">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 18H33V23H28V18ZM28 28H33V43H28V28ZM30.5 5.5C16.7 5.5 5.5 16.7 5.5 30.5C5.5 44.3 16.7 55.5 30.5 55.5C44.3 55.5 55.5 44.3 55.5 30.5C55.5 16.7 44.3 5.5 30.5 5.5ZM30.5 50.5C19.475 50.5 10.5 41.525 10.5 30.5C10.5 19.475 19.475 10.5 30.5 10.5C41.525 10.5 50.5 19.475 50.5 30.5C50.5 41.525 41.525 50.5 30.5 50.5Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="about__block-text">
                            <span class="about__block-title">Кто мы?</span>
                            <span class="about__block-description">
                                Книжное наследие от мыслителей Древней Греции и до людей современности. 
                                Это не просто магазин, а настоящий клуб любителей книги, 
                                который объединяет в своем культурном пространстве людей 
                                самых разных интересов.
                            </span>
                        </div>
                    </div>
                </li>
                <li class="about__list-item">
                    <div class="about__block">
                        <div class="about__block-icon">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 18H33V23H28V18ZM28 28H33V43H28V28ZM30.5 5.5C16.7 5.5 5.5 16.7 5.5 30.5C5.5 44.3 16.7 55.5 30.5 55.5C44.3 55.5 55.5 44.3 55.5 30.5C55.5 16.7 44.3 5.5 30.5 5.5ZM30.5 50.5C19.475 50.5 10.5 41.525 10.5 30.5C10.5 19.475 19.475 10.5 30.5 10.5C41.525 10.5 50.5 19.475 50.5 30.5C50.5 41.525 41.525 50.5 30.5 50.5Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="about__block-text">
                            <span class="about__block-title">Проект “Гармония”</span>
                            <span class="about__block-description">
                                Наш проект «Гармония» объединяет читателей и авторов в реальности 
                                и в интернете. Каждую неделю проводятся встречи онлайн и вживую. 
                                Из наших регулярных рубрик вы узнаете много нового о книгах и 
                                писателях.
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>