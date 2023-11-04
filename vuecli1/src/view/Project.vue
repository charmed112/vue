<template>
    <div>
        <navVue />
        <our-project />
        <footerVue />
    </div>
</template>

<script>
import navVue from '@/components/navVue.vue'
import ourProject from '@/components/ourProject.vue'
import footerVue from '@/components/footerVue.vue'
export default {
    name:'projectpage',
    components: { navVue, ourProject, footerVue }
}
</script>

<style lang="scss" scoped></style>