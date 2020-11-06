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
                    <form>
                        <label>Name:</label>
                        <input type="text" v-model="modalSecond.name">
                    <button class="btn btnPrimary">Submit!</button>
                    </form>                
                </div>

                </modals>
            </div>
            </section>
        </div>
    </div>  

</template>

<script>
import modals from '@/components/Modal.vue'
export default {
    components: { 
        modals, 
    },
    data () {
        return {
            modalFirst: false,
            modalSecond: {
                Show: true,
                name: '',
                email:''
            }
        }
    }
}
</script>

<style>

</style>
