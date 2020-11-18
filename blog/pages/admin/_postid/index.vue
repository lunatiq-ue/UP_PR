<template>
    
    <newPostFrom 
    :postEdit="post"
    @submit="onSubmit" />

</template>

<script>
import newPostFrom from '@/components/Admin/NewPostFrom.vue'

export default {
    components: { newPostFrom },
    layout: 'admin',
    data () {
        return {
            post: {
        
            id: 1,
            title: 'First Post',
            descr: 'Tree Sunset',
            content: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
            img: 'https://www.office.xerox.com/business-resources/1024x1024_wallpaper_nature5.jpg'
        
            }
        }
    },
    methods: {
        onSubmit (post) {
            console.log('Post Edited!')
            console.log(post)
        }
    }

}
</script>