<template>
    
    <section class="new-comment">
        <div class="container">
            
            <h2 class="title"> Write comment </h2>
            
            <form class="comment-form"  @submit.prevent="onSubmit">
            
            <Message v-if="message" :message="message" />

            <AppInput v-model="comment.name" type="text"> Name: </AppInput>
            
            <AppTextArea class="textpad" v-model="comment.text"> Text:</AppTextArea> 

            <div class="controls">
                <AppButton> Submit! </AppButton>
            </div>
            </form>
            </div>
            
        
    </section>

</template>

<script>


export default {
   
    data () {
        return {
            message: null,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log(this.comment)
            this.message = 'Submitted'
            
        }
    }
}
</script>

<style lang="scss">
    .new-comment {
        text-align: center;
        background-color: #37c0f7;
        
    }
    
    .new-comment {
        h2 {
            color: white;
        }
        label {
            color: white;
        }
    }
    
</style>
