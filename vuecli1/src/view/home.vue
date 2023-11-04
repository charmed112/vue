<template>
    <div>
        <navVue />
        <interno />
        <footerVue />
    </div>
</template>

<script>
import navVue from '@/components/navVue.vue'
import interno from '@/components/interno.vue'
import footerVue from '@/components/footerVue.vue'

export default {
    name: 'homepage',
    components: { navVue, interno, footerVue }
}
</script>

<style lang="scss" scoped></style>