<template>
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
    <!-- ________________________buttoms -->
    <section>
        <div class="buttoms-for-project center v">
            <button class="Buttom-Cards" @click="changeArticle(item.id)" v-for="item in buttoms" :key="item.id">{{
                item.namebuttom }}</button>

        </div>
    </section>
<div id="app">
    <section  class="project-cards center">
            <div class="project-card" v-for="item in articles" :key="item.id">
                <img class="cards-photo" :src="item.cards_photo" alt="">
                <div class="text-writing">
                    <p class="title-description">{{ item.title_description }}</p>
                    <p class="title-decor">{{ item.title_decor }}</p>
                    <svg class="card-buttom" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                        fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="for-star">
                        <svg class="cards-star" xmlns="http://www.w3.org/2000/svg" width="36" height="35"
                            viewBox="0 0 36 35" fill="none">
                            <g filter="url(#filter0_d_993_156)">
                                <path
                                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                                    fill="#ffff" />
                            </g>
                            <defs>
                                <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="/">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
    </section>
</div>
</template>
<script>
export default {
    data() {
        return {
            articles: [
                { id: 'Bathroom1', cards_photo: require('../assets/imgOurProject/img/Photo2.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom2', cards_photo: require('../assets/imgOurProject/img/Photo3.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom3', cards_photo: require('../assets/imgOurProject/img/Photo4.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom4', cards_photo: require('../assets/imgOurProject/img/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom5', cards_photo: require('../assets/imgOurProject/img/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom6', cards_photo: require('../assets/imgOurProject/img/Photo7.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom7', cards_photo: require('../assets/imgOurProject/img/Photo8.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture' },
                { id: 'Bathroom8', cards_photo: require('../assets/imgOurProject/img/Photo9.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture' },
                ,
                // {
                //     id: 'BedRoom',
                //     cards_photo: require('../assets/imgOurProject/img/Photo2.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo3.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo4.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo7.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo8.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo9.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture',
                // },
                // {
                //     id: 'Kitchan',
                //     cards_photo: require('../assets/imgOurProject/img/Photo2.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo3.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo4.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo7.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo8.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo9.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture',
                // },
                // {
                //     id: 'LivingArea',
                //     cards_photo: require('../assets/imgOurProject/img/Photo2.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo3.jpg'), title_description: 'Classic Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo4.jpg'), title_description: 'Minimal Bedroom table', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo5.jpg'), title_description: 'Modern Medroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo6.jpg'), title_description: 'Minimal Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo7.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo8.jpg'), title_description: 'System Table', title_decor: 'Decor / Artchitecture',
                //     cards_photo: require('../assets/imgOurProject/img/Photo9.jpg'), title_description: 'Modern Bedroom', title_decor: 'Decor / Artchitecture',
                // },


            ],
            currentArticle: [
                {

                },

            ],
            buttoms: [
                { id: 'Bathroom', namebuttom: 'Bathroom' },
                { id: 'BedRoom', namebuttom: 'Bed Room' },
                { id: 'Kitchan', namebuttom: 'Kitchan' },
                { id: 'LivingArea', namebuttom: 'Living Area' },
            ],
        };
    },
    methods: {
        // changeArticle(id) {
        //     this.currentArticle = this.articles.filter((el) => el.id === id);
        // },
    },
}
</script>

<style lang="scss" scoped></style>