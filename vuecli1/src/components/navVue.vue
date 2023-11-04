<template>
    <div>
        <section class="navigation-site center">
            <span class="navigation-site_text-logo"><img class="navigation-site_logo"
                    src="../assets/imginterno/img/Logo.svg" alt="">Interno</span>
            <nav class="navigation-site_link">
                <!-- <a href="index.html">Home</a> -->
                <router-link to="/">Home</router-link>
                <!-- <a href="./articlenews.vue">Project</a> -->
                <router-link to="/Project">Project</router-link>
                <!-- <a href="/vue3-1/articles.html">Blog</a> -->
                <router-link to="/Blog">Blog</router-link>
            </nav>
        </section>
    </div>
</template>

<script>
export default {


}
</script>

<style lang="scss" scoped></style>