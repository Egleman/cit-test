<template>
    <ul class="header__pagelist">
        <li class="header__pagelist-item">
            <router-link to="/" class="header__pagelist-link">
              Главная
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z" fill="black"/>
              </svg>
            </router-link>
        </li>
        <li class="header__pagelist-item">
            <router-link to="/catalog" class="header__pagelist-link">
              Каталог
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z" fill="black"/>
              </svg>
            </router-link>
        </li>
    </ul>
</template>