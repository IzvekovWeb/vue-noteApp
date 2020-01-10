<template>
    <div class="new-note">
        <label>Заголовок</label>
        <div class="input-block">
            <input v-model="note.title" type="text">
            <select v-model="note.type">
                <option :value="option.type" v-for="(option, index) in noteType" :key="index">{{option.name}}</option>
            </select> 
        </div>
        
        <label>Описание</label>
        <textarea v-model="note.descr" ></textarea>
        <button class="btn btnPrimary" @click="addNote">Добавить запись</button>
    </div>
</template>

<script>
export default {
    props:{
        note:{
            type: Object,
            required: true
        }
    },
    data(){
        return{ 
            noteType: this.$store.getters.getNoteType, 
        }
    },
    methods:{
        addNote(){
            let {title, descr, type} = this.note
            this.we  = type
            if (title === "") { 
                this.message = "Заголовок не может быть пустым!"
                return false
            }

            this.$store.dispatch('addNote', { 
                title,
                descr,
                date: new Date(Date.now()).toLocaleString(),
                type,
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .new-note{ 
        text-align: center;
    }
    button{
        margin: 20px auto;
    }
    .input-block{
        display: flex;
        justify-content: space-between;
        input{ 
            margin-right: 20px;
        }
    }
</style>