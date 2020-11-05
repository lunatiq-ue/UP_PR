<template>
    <div class="new-priority-note">
            <button class="btn btnPrimarysecond secondbtn" @click="secondNote">New Priority Note</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    methods: {
        secondNote () {
            this.$emit('secondNote', this.note)
        }
    }
}
</script>

<style lang="scss">
.new-priority-note {
    
    text-align: center;
    
}
.btnsec {
    
    margin-top: 25px;
    
}


</style>
