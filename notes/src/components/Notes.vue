<template>
    <!-- note list -->
        <div class="notes">  
            <div class="note" :class="[{ full: !grid }, note.priority]" v-for="(note, index) in notes" :key="index">
                <div class="note-header" :class=" { full: !grid } " >
                    <p> {{ note.title }} </p>
                    <p style="cursor: pointer;" @click="removeNote(index)"> x </p>
                </div>
                <div class="note-body">
                    <p> {{ note.descr }} </p>
                    <span> {{ note.date }} </span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        removeNote (index) {
            console.log(`Note id - ${index} removed`)
            this.$emit('remove', index)
        }
    }
}
</script>

<style lang="scss">
.notes {
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
}

.full {
    width: 100%;
    text-align: center;
}

.header-container {
    font-size: 32px;
    text-align: center;
    background: linear-gradient(-78deg, #FFC6A6, #FFD4CF,  )
    
}

.note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background: whitesmoke;
    border-radius: 20px;

    &.full {
        width: 100%;
        justify-content: center;
    } 

    &.first {
    border: 5px solid greenyellow;
    }

    &.second {
    border: 5px solid orange;
    }

    &.third {
    border: 5px solid red;
    }
}
.note-header{
        display:flex;
        align-items: center;
        justify-content: space-between;
        
    h1 {
        font-size: 32px;
    }

    p { 
        font-size: 22px;
        color:#FF6F61;
    }
    
    svg {
        margin-right: 12px;
        color: gray;
        &.active {
        color: #402caf;
        }
        &:last-child {
            margin-right: 0;
        }
    }
}



.note-body {
    p {
        margin: 20px 0;
    } 
    
    span {
        font-size: 14px;
        color: #999999;
    }
}


</style>
