<template>
    <div>
        <navVue />
        <articlenews />
        <footerVue />
    </div>
</template>

<script>
import navVue from '@/components/navVue.vue'
import articlenews from '@/components/articlenews.vue'
import footerVue from '@/components/footerVue.vue'
export default {
    name: 'blogpage',
    components: { navVue, articlenews, footerVue }
}
</script>

<style lang="scss" scoped></style>