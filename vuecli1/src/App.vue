<template>
  <!-- <ProductDetails :available="false" /> -->
  <navVue />
  <interno />
  <articleNews />
  <Blog />
  <our-project />
  <sliderProject />
  <footerVue />
</template>

<script>
import ProductDetails from './components/ProductDetails.vue'
import navVue from './components/navVue.vue'
import interno from './components/interno.vue'
import articleNews from './components/articlenews.vue'
import Blog from './components/Blog.vue'
import footerVue from './components/footerVue.vue'
import ourProject from './components/ourProject.vue'
import sliderProject from './components/sliderProject.vue'

export default {
  components: { ProductDetails, navVue, interno, articleNews, Blog, ourProject, sliderProject, footerVue, }
}
</script>

<style lang="scss"></style>
