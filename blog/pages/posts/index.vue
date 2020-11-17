<template>
<section class="wrapper-content wrapper-content--fixed">
  
    <div class="posts">
        <input type="text" v-model="postId">
        <button class="btn btnPrimary" @click="loadPost"> Get Post </button>
    </div>
  
</section>
</template>

<script>
export default {
    data () {
        return{
            postId: ''
        }
    },
    methods: {
        loadPost () {
            this.$router.push(`/posts/${this.postId}`)
        }
    }
}
</script>

<style lang="scss">
    .posts {
        padding-left: 125px;
        max-width: 92%;
        text-align: center;    
        
    }
    
</style>