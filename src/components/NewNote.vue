<template>
    <div class="new-note">
        <label>Заголовок</label>
        <div class="input-block">
            <input v-model="note.title" type="text">
            <select v-model="note.type">
                <option :value="noteType[0]">Обычный</option>
                <option :value="noteType[1]">Важный</option>
                <option :value="noteType[2]">Очень важный</option> 
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
            noteType: ['standart','warning','important'], 
        }
    },
    methods:{
        addNote(){
            this.$emit('addNote', this.note)
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