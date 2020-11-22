<template>
    <section class="auth "> 
        <div class="container  ">
            
            <form @submit.prevent="onSubmit" class="auth__form">
                
                <div class="colorb">
                <AppInput type="email" v-model="user.email"> Login: </AppInput> 
                <AppInput type="password" v-model="user.password"> Password: </AppInput>
                <div class="contorls">
                    <AppButton class="btnwhite"> Login! </AppButton>
                </div>
                </div>
            </form>
            </div>
        
    </section>
</template>

<script>

export default {
    // layout: 'admin',
    data () {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('authUser', this.user)
            .then((res) => {
                 this.$router.push('/admin')
            })
            .catch((e) => {
                console.log(e)
                this.user.email = ''
                this.user.password = ''
            })
        }
    }
}
</script>

<style lang="scss">

.auth {
    text-align: center;
}
.colorb{
    padding: 20px;
    background-color: #37c0f7;
    border-radius: 50px;
}
.auth__form {
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50vh;
    label {
        color: white;
    }
    input {
        min-width: 360px;
    }
    .flex {
        background-color:black;
    }
}

</style>