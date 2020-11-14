<template>
    
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">

                <!-- wrapper -->
                <div class="notify__wrapper">
                    
                    <!-- title -->
                    <div class="notify-title">
                        <p>Notify App </p>
                        <svg @click="getNotifyLazy" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/></svg>
                    </div>

                    <!-- notify -->
                    <div class="notify__content">
                        <preloader v-if="loading" :width="90" :heigth="90" /> 
                        <div class="error" v-if="error">
                            <p> {{ error}} </p>
                        </div>



                        <NotifyComp
                        v-if="!loading && !error"
                        :messages="messages" />
                    </div>
                
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>


import axios from 'axios'
import NotifyComp from '@/components/NotifyComp.vue'
import Preloader from '../components/UI/Preloader.vue'
export default {


    components: { NotifyComp, Preloader },
    data () {
        return {
            loading: false,
            error: null
        }
    },



    mounted () {
        this.getNotify () 
        
    },
    computed: {
        messages () {
            return this.$store.getters.getMessageMain
        }
    },
    methods: {

        getNotifyLazy () {
            this.loading = true
            setTimeout(() => {
            this.getNotify () 
            }, 1000);
        },

        getNotify () {
            this.loading = true
            axios
            .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
                .then(response => {
                    

                    let res = response.data.notify,
                        messages = [],
                        messagesMain = [];



                    for (let i = 0; i < res.length; i++) {
                        if (res[i].main) messagesMain.push(res[i])
                        else messages.push(res[i])
                    }
                    console.log({messages, messagesMain})
                    
                    this.$store.dispatch('setMessage', messages)
                    this.$store.dispatch('setMessageMain', messagesMain)
                })
                .catch(error => {
                    console.log(error)
                    this.error = 'Error: Network Error'
                }) 
                .finally( ()=> (this.loading = false))
        }                
    }
}
</script>

<style lang="scss" scoped>
    .container {
       display: flex;
       align-items: center;
       justify-content: center;
       height: 90wh; 
    }

    .notify__wrapper {
        width: 400px;
        background-color: white;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
    }

    .notify__content {
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 300px;
    }

    .notify-title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-size: 24px;
        }
        
    }
</style>