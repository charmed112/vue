<template>
    <section class="banner-box1" v-for="banner in errorBanner">
        <div class="banner__text">
            <h2 class="banner__heading">{{ banner.heading }}</h2>
            <p class="banner__paragraph">
                {{ banner.paragraph }}
            </p>
            <router-link to="/">
                <button class="Unique-home_buttoms">Back To Home <svg class="Unique-home_buttom-indicator" width="19"
                        height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </router-link>
        </div>
        <div><img :src="banner.src" :alt="banner.alt" class="banner__image" /></div>

    </section>
</template>

<script>

export default {
    data() {
        return {
            link: "/",
            errorButtonText: "Back To Home",
            errorBanner: [
                {
                    id: "errorbanner",
                    src: require("../assets/error/error.jpg"),
                    alt: "destroyed-flat",
                    heading: "404",
                    paragraph: "We are sorry, but the page you requested was not found",
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss"></style>