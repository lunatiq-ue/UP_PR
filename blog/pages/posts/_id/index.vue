<template>
<section class="wrapper-left wrapper-content wrapper-content--fixed">
    <h1> Post id: {{ $route.params.id }} </h1>
</section>    
</template>

<script>
export default {
    validate  ({params}) {
        // number !
        return /^\d+$/.test(params.id)
    }
}
</script>

<style lang="scss" >
    .wrapper-left {
    h1 {
        margin-left: 125px;
    }
}
</style>