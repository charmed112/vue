<template>
    <div class="picturebegr">
    </div>
    <div class="skidercenter center" v-for="info in getProjectInfo">
        <h2 class="slider-title">{{ info.heading }}</h2>
        <span class="firstparagraph">{{ info.firstparagraph }}</span>
        <p class="secondparagraph">{{ info.secondparagraph }}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters(['getProjectInfo', 'getSliderPictures']),


};
</script>