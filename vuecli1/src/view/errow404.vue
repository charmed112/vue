<template>
    <navVue />
    <Banners />
</template>

<script>
import navVue from '@/components/navVue.vue'
import Banners from "@/components/Banners.vue";

export default {
    name: "404View",
    components: {
        navVue, Banners
    },
    data() {
        return {

        };
    },
};
</script>
<style scoped lang="scss"></style>