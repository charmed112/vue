<template>
    <div class="picturebegr">
    </div>
    <div class="skidercenter center" v-for="info in getProjectInfo">
        <h2 class="slider-title">{{ info.heading }}</h2>
        <span class="firstparagraph">{{ info.firstparagraph }}</span>
        <p class="secondparagraph">{{ info.secondparagraph }}</p>
    </div>
    <div class="slider-size center">
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
            <swiper-slide v-for="item in getSliderPictures" :key="item.src">
                <div class="swiper-zoom-container">
                    <img :src="item.src" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    computed: mapGetters(['getProjectInfo', 'getSliderPictures']),
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },

};
</script>