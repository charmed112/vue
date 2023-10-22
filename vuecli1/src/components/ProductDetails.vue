<template>
    <div>
        <p>name: {{ product.name }}</p>
        <p>price: {{ formattedPrice }}</p>
        <p v-if="available">Available</p>
        <p v-else>Out of stock</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product:
            {
                name: 'telephone',
                price: 99.99,
                available: "",
            },
        };
    },
    computed: {
        formattedPrice: function () {
            return `$ ${this.product.price}`;
        }
    },
    props: {
        available: Boolean,
    }
}
</script>

<style lang="scss" scoped></style>