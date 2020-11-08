<template>

    <div class="wrapper">
        <div class="wrapper-content">


            <section>
            <div class="container">


                <!-- first modal -->
                <button class="btn btnPrimary"
                @click="modalFirst = !modalFirst">
                Show first Modal</button>

                <modals
                title="First Modal"
                v-show="modalFirst"
                @close="modalFirst = false">


                <!-- body -->
                <div slot="body">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done</button>
                </div>
                </modals>


                <!-- second modal -->
                <button class="btn btnPrimary"
                @click="modalSecond.show = !modalSecond.show">
                Show Modal with form</button>

                <modals
                title="Modal with form"
                v-show="modalSecond.show"
                @close="modalSecond.show = false">


                <!-- body -->
                <div slot="body">
                    <form @submit.prevent="submitSecondForm">
                        <label>Name:</label>
                        <input type="text" required v-model="modalSecond.name">
                        <label>Email:</label>
                        <input type="email" required v-model="modalSecond.email">
                    <button class="btn btnPrimary btnpad">Submit!</button>
                    </form>
                </div>

                </modals>
                <!-- modalValidate -->
                
                
                <button class="btn btnPrimary"
                @click="modalValidate = !modalValidate">
                Show Modal with form +Validate</button>
                <modalValidate v-show="modalValidate" @close="modalValidate = false" />
                
            </div>
            </section>
        </div>
    </div>

</template>

<script>
import modals from '@/components/UI/Modal.vue'
import modalValidate from '@/components/ModalValidate.vue'

export default {
    components: {
        modals,
        modalValidate
    },
    data () {
        return {
            modalFirst: false,
            modalSecond: {
                show: false,
                name: '',
                email: ''
            },
            modalValidate: false
        }
    },
    methods: {
        submitSecondForm () {
            console.log({
                name: this.modalSecond.name,
                email: this.modalSecond.email
            })
                this.modalSecond.name = ''
                this.modalSecond.email = ''
                this.modalSecond.show = false
        }
    }
}
</script>

<style>

</style>
