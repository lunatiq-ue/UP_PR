<template>
    <modal
        title="Modal with form +Validate"
        @close="$emit('close')">


        <!-- body -->
        <div slot="body">
            <form @submit.prevent="OnSubmit">

            <!-- 1 -->
            <div class="form-item" :class=" { errorInput: $v.name.$error } ">
                <label>Name:</label>
                <p class="errorText" v-if=" !$v.name.required "> This field is required! </p>
                <p class="errorText" v-if=" !$v.name.minLength "> Name must have at least {{ $v.name.$params.minLength.min }}! </p>
                <input  v-model="name" :class=" { error: $v.name.$error } " @change=" $v.name.$touch() ">
            </div>  

            <!-- 2  -->
            <div class="form-item" :class=" { errorInput: $v.email.$error } ">
                <label>Email:</label>
                <p class="errorText" v-if=" !$v.email.required "> This field is required! </p>
                <p class="errorText" v-if=" !$v.email.email "> Email isn't correct!</p>
                <input  v-model="email" :class=" { error: $v.email.$error } " @change=" $v.email.$touch() ">
            </div>     

            <!-- password -->
             <div>
                    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                        <label class="form__label">Password</label>
                        <div class="error error-req" v-if="!$v.password.minLength">
                            Password must have at least {{ $v.password.$params.minLength.min }} letters.
                            </div>
                         <div class="error error-req" v-if="!$v.password.required">Password is required.</div>
                        <input class="form__input" v-model.trim="$v.password.$model"/>
                    </div>

                    
                    <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
                        <label class="form__label">Repeat password</label>
                        <div class="error error-req" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
                        
                        <div class="error error-req" v-if="!$v.password.required">Password is required.</div>
                        <input class="form__input" v-model.trim="$v.repeatPassword.$model"/>
                    </div>
                    
            </div>

            <button class="btn btnPrimary btnpad">Submit!</button>
            
            </form>
        </div>

    </modal>
</template>

<script>

import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import modal // s 
from '@/components/UI/Modal.vue'

export default {
    components: {
        modal //s
    },
    data () {
        return {
            name: '',
            email: '',
            password: '',
            repeatPassword:''
        }
    },
    validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    name: {
      required,
      minLength: minLength(4)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    email: {
        required,
        email
    }
},
    methods: {
        OnSubmit () {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                const user = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    repeatPassword: this.repeatPassword
                }
                console.log (user)
                this.name = ""
                this.email = ""
                this.password = ""
                this.repeatPassword = ""
                this.$v.$reset()
                this.$emit ('close')
            }
        },

        
    }
  
    
}
</script>

<style lang="scss">
.form-item .errorText {
    display: none;
    margin-bottom: 8px;
    font-size: 13.5px;
    color: #f05c5c;
}
.form-item {
    &.errorInput .errorText {
    display: block;
    }
}


input.error {
    border-color: #f05c5c;
}

.form-group {
    display: block; 
}

.error-req {
    font-size: 13.5px;
    margin-bottom: 8px;
}
</style>