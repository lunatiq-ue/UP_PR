<template>
<header>
                <div class="navbar">
                    <div class="container">
                        <div class="navbar-content">
                            <div class="logo"><nuxt-link to="/">Shimada clan blog</nuxt-link></div>
                                
                                <ul class="navbar-list">
                                    
                                    <li class="navbar-item" v-for="link in links" :key="link.title">
                                        <nuxt-link class="navbar-link" :title="link.title" :to="link.url"> {{ link.title}} </nuxt-link>
                                    </li>

                                </ul>   
                        </div> 
                    </div>
                </div>
            </header>
    

</template>

<script>
export default {
    data () {
        return {
            links: [
                { title: 'About', url: '/about'},
                { title: 'Posts', url: '/blog'}
            ]
        }
    }
}
</script>

<style lang="scss">
.logo a {
    color: #37c0f7;
}
.navbar-link {
    &.nuxt-link-exact-active {
            color: #37c0f7;
            // color: #b00b69;
        }
    }
</style>