<template>
    <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments"/>
    <newComment />

    </div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'

export default {
    components: {
        post,
        comments,
        newComment,
        
    },
    data () {
        return {
            post: {
        
            id: 1,
            title: 'First Post',
            descr: 'Tree Sunset',
            content: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
            img: 'https://www.office.xerox.com/business-resources/1024x1024_wallpaper_nature5.jpg'
        
            },
            comments: [
                {name: 'Hanzo', text: 'Ryuu ga waga teki wo kurau!'},
                {name: 'Genji', text: 'Ryūjin no ken wo kūrae!'},
            ]
        }
    }
}
</script>

<style lang="scss">
.post {
    max-width: 900px;
    margin: 0 auto;
    

}
.post-header {
    text-align: center;
    margin-bottom: 30px;
    img {
        max-width: 400px;
        margin-bottom: 30px;
    }
    p {
        color: black;
    }
}
.post-body {
    text-align: center;
}

</style>