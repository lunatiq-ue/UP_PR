<template>
    
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">


                
                <h1 class="title">You should(n't) be here</h1>
                <search :value="search"
                placeholder="Type username" 
                @search="search = $event" />

                <div class="error" v-if="error">
                        <p> {{ error }} </p>
                </div>


                <button v-if="!repos" class="btn btnPrimary" @click="getRepos"> Search! </button>
                <button v-else class="btn btnPrimary" @click="getRepos"> Search again!</button>


                <axios />

                    


                <div class="repo_wrapper" v-if="repos">
                    <div class="repo-item" v-for="repo in repos" :key="repo.id">
                        <div class="repo-info">
                            <a target="_blank" :href="repo.html_url"> {{ repo.name }} </a>
                            <span> {{ repo.stargazers_count}}⭐ </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
    
</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .repo_wrapper {
        width: 400px;
        margin: 30px 0;
    }
    .repo-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 10px 0 ;
        border-bottom: 1px solid #dbdbdb;
    }

    .error {
        margin-top: 25px;
    }
</style>

<script>

import search from '@/components/Search.vue'
import axios from 'axios'

export default {
    components: {search, axios},
    data () {
        return {
            search: '',
            error: null,
            repos: null
        }
    },
    methods: {
        getRepos () {
            // https://api.github.com/users/lunatiq-ue/repos
            axios
                .get(`https://api.github.com/users/${this.search}/repos`)
                    .then(res => {
                        console.log(res)
                        this.error = null
                        this.repos = res.data
                    })
                    .catch(err => {
                        console.log(err)
                        this.repos = null
                        this.error = 'Can`t find this user!'
                    })       
        }           
    }
}
</script>