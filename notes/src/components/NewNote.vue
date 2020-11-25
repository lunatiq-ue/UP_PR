<template>
    <div class="new-note">
        <label>Title</label> 
            <div class="selectedb">
            
            <input v-model="note.title" type="text">
            <select v-model="note.priority">
                <option selected="selected">first</option> <option>second</option> <option>third</option>
            </select>
            
            </div>

            <label>Description</label>
            <textarea v-model="note.descr"></textarea>
            <button class="btn btnPrimary btnsec" @click="addNote">New Note</button>
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
        addNote () {
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
.new-note {
    text-align: center;
    
}
.btnsec {
    margin-top: 25px;
}

.selectedb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    &>input{
        width: 70%;
        
    }
    &>select{
        min-width: 30%;
        padding: 16px 26px;
        border-radius: 20px;
        
    }
    
}
</style>
