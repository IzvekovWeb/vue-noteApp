<template>
    <div class="notes"> 
        <div class="note" :class="{ full: !grid}" v-for="(note, index) in notes" :key="index">
            <div class="note-header" :class="{ full: !grid}">
                <p>{{ note.title }}</p>
                <p style="cursor: pointer" @click="remove(index)">X</p>
            </div>
            <div class="note-body">
                <p>{{ note.descr }}</p>
                <span>{{ note.date }}</span>
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
        grid:{
            type: Boolean,
            required: true
        }
    },
    methods:{
        remove(index){
            this.$emit('remove',index)
        }
    }
}
</script>


<style lang="scss" scoped>

    .notes{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0px; 
    }
    
    
    .note{
        width: 40%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: #ffffff;
        transition: all 0.25s cubic-bezier(.02,.01,.47,1);
        box-shadow: 0px 30px 30px rgba(0,0,0,.02);
        &:hover{
            box-shadow: 0 30px 30px rgba(0,0,0,.04);
            transform: translate(0, -6px);
            transition-delay: 0s !important;
        }
        &.full{
            width: 100%;
            text-align: center;
            justify-content: center;
            p{
                margin-right: 16px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
    .note-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            color: #402caf;
        } 
        &.full{
            justify-content: center;
        }
    }
    .note-body{
        p{
            margin: 20px 0;
        }
    }

</style>