<template>
<div class="wrapper"> 



  <div class="wrapper-content">
    <section>
      <div class="container">
    <h1> {{ title }} </h1>
         

         <message v-if="message" :message="message" />

        <newNote 
        :note="note" 
        @addNote="addNote" />
     
        <!-- new note -->
        <div class="new-note">
            <input v-model="note.title" type="text">
            <textarea v-model="note.descr"></textarea>
            <button @click="addNote">New Note</button>
        </div>

        <!-- note list -->
        <div class="notes">  
            <div class="note" v-for="(note, index) in notes" :key="index">
                <div class="note-header">
                    <p> {{ note.title }} </p>
                </div>
                <div class="note-body">
                    <p> {{ note.descr }} </p>
                    <span> {{ note.date }} </span>
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>


  
</div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
export default {
  components: {
    message,
    newNote
  },
  data () {
    return {
      title: 'Notes App',
                message: null, 
                note: {
                    title: '',
                    descr: ''
                }, 
                notes: [
                       {
                        title: 'First Note',
                        descr: 'Describtion for first note',
                        date: new Date(Date.now()).toLocaleString()
                       },
                       {
                        title: 'Second Note',
                        descr: 'Describtion for second note',
                        date: new Date(Date.now()).toLocaleString()
                       },
                       {
                        title: 'Third Note',
                        descr: 'Describtion for third note',
                        date: new Date(Date.now()).toLocaleString()
                       }                                    
                       ]
    }
  },
  methods: {
                addNote () {
                    // console.log(this.note)
                    let {title, descr} = this.note

                    if (title === '') {
                    this.message = 'title cant be blank'
                    return false
                    }

                    this.notes.push({
                        title,
                        descr,
                        date: new Date(Date.now()).toLocaleString()
                    })
                    this.message = null
                    this.note.title = ''
                    this.note.descr = ''
                }
            }
}
</script>

<style>

</style>
