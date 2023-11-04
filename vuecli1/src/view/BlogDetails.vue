<template>
    <div>
        <navVue />
        <Blogs />
        <footerVue />
    </div>
</template>

<script>
import navVue from '@/components/navVue.vue'
import Blogs from '@/components/Blogs.vue'
import footerVue from '@/components/footerVue.vue'
export default {
    name: 'blogedetailpage',
    components: { navVue, Blogs, footerVue }
}
</script>

<style lang="scss" scoped></style>