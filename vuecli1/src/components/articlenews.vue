<template>
    <body>
        <section class="art-news center">
            <div class="bakgraungPhoto">
            </div>
            <div class="nav-title ">
                <div class="nav-title1">
                    <p class="nav-text">Articles & News</p>
                    <p class="nav-text2">Home / Blog</p>
                </div>
            </div>
        </section>
        <!-- ______________________________ idea disighn -->
        <section class="block-idea-disighn center">
            <p class="block-idea-disighn_title">Latest Post</p>
            <div class="block-disighn">
                <img class="img_disighn" src="../assets/Imgarticle&news/img/Photo3.jpg" alt="">
                <div class="block-disighn-content">
                    <p class="disighn_sub_title">Low Cost Latest Invented Interior <br>Designing Ideas</p>
                    <p class="disighn_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
                        maximus.posuere in.Contrary to popular belief.
                        <br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>
                    <p class="disighn_date">26 December,2022 </p>
                </div>
                <div class="buttom_disighn"><svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
        <!-- ___________________________________ cards -->
        <section class="block-news">
            <h2 class="block-news_title center">Articles & News</h2>
            <div id="app">
                <section class="block-news-both center">
                    <div class="block-news_Solution-border " v-for="item in cards" :key="item.card_pictures">
                        <div class="block-news_Solution">
                            <img class="card_pictures" :src="item.card_pictures" alt="">
                            <p class="indicator-on-pictures">{{ item.indicator_on_pictures }}</p>
                            <p class="card_title">{{ item.card_title }}</p>
                            <p class="card_date">{{ item.card_date }}</p>
                            <svg class="card_buttoms" width="52" height="53" viewBox="0 0 52 53" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </section>
            </div>
            <!-- <script src="https://unpkg.com/vue@next"></script> -->

            <div class="card-link-pages center">
                <a class="link-circles" href="">01</a>
                <a class="link-circles" href="">02</a>
                <a class="link-circles" href="">03</a>
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </section>
    </body>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { card_pictures: require('../assets/Imgarticle&news/img/Image6.jpg'), indicator_on_pictures: "Kitchan Design", card_title: "Let’s Get Solution For Building Construction  Work", card_date: "26 December,2022" },
                { card_pictures: require('../assets/Imgarticle&news/img/Image8.jpg'), indicator_on_pictures: "Living Design", card_title: "Low Cost Latest Invented Interior Designing  Ideas", card_date: "22 December,2022" },
                { card_pictures: require('../assets/Imgarticle&news/img/Image7.jpg'), indicator_on_pictures: "Interior Design", card_title: "Best For Any Office &  Business Interior  Solution", card_date: "25 December,2022" },
                { card_pictures: require('../assets/Imgarticle&news/img/Image9.jpg'), indicator_on_pictures: "Kitchan Design", card_title: "Let’s Get Solution For Building Construction  Work", card_date: "26 December,2022" },
                { card_pictures: require('../assets/Imgarticle&news/img/Image10.jpg'), indicator_on_pictures: "Living Design", card_title: "Low Cost Latest Invented Interior Designing Ideas", card_date: "22 December,2022" },
                { card_pictures: require('../assets/Imgarticle&news/img/Image11.jpg'), indicator_on_pictures: "Interior Design", card_title: "Best For Any Office &  Business Interior  Solution", card_date: "25 December,2022" },
            ]


        };
    },
    methods: {

    },


}
</script>

<style lang="scss" scoped></style>