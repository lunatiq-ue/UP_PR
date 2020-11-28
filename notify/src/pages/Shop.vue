<template>
    
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <h1>Ryūjin no ken wo kūrae!</h1>
                <h1>Hello, its Shop Page</h1>
                <div class="item_wrapper">
                
            </div>
        </section>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            shopList: null
        }

    },
    created () {
        this.shopList = this.$store.getters.getShopList
        console.log (this.shopList)    
    }
}
</script>

