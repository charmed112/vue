<template>
    <div>
        <navVue />
        <sliderProject />
        <footerVue />
    </div>
</template>

<script>
import navVue from '@/components/navVue.vue'
import sliderProject from '@/components/sliderProject.vue'
import footerVue from '@/components/footerVue.vue'

export default {
    name:'profuctdetailspage',
    components: { navVue, sliderProject, footerVue }
}
</script>

<style lang="scss" scoped></style>