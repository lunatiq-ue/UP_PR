<template>
    <modal
                title="Modal with form + validate"
                @close="$emit('close')">


                <!-- body -->
                <div slot="body">
                    <form @submit.prevent=""> 
                        <label>Name:</label>
                        <input v-bind="name">
                        <label>Email:</label>
                        <input v-bind="email" >
                    <button class="btn btnPrimary btnpad">Submit!</button>
                    </form>                
                </div>
            </modal>
</template>

<script>

import { required, minLength, email } from '/vuelidate/lib/validators'
    import modal from '@/components/UI/Modal.vue'
    export default {
        components: {
            modal
        },
        data () {
            return {
                name: '',
                email: ''
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(4)
            },
        email: {
            required, 
            email
        }
        }
    }
</script>