<template>
        <div v-if="$store.state.show" class="modal" >
            <input placeholder="Введите количество" type="number" v-model="value">
            <div class="btn__wrapper">
                <button class="btn1" @click="$store.state.show = false">Отмена</button>
                <button class="btn2" @click="onDelete(item, value )">Подтвердить</button>
            </div>   
        </div>
</template>
<script>
import { mapMutations } from 'vuex';
    export default {
        data(){
            return {
                value: Number
            }
        },
        props:{
            item: [Object],
        },
        methods: {
            ...mapMutations({
            Delete: 'Delete',
        }),
            onDelete(item, value) {
                if (item.count < value) {
                    alert("Введите корректное число")
                }
                if (item.count >= value) {
                   this.Delete({...item, count: item.count - value} )
                }
            },
        }
    }
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}
.modal {
    position: absolute;
    margin-top: 366px;
    margin-left: 10px;
    width: 250px;
    height: 133px;
    background: rgba(38, 38, 38, 0.6);
    border: 1px solid #4D4D4D;
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.btn__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: none;
    margin: 0;
    padding: 0;
}
.btn1 {
display: flex;
justify-content: center;
align-items: center;
width: 88px;
height: 33px;
background: #FFFFFF;
border-radius: 8px;
border: 1px solid #FFFFFF;
color: black;
margin: 0;
}
.btn2 {
display: flex;
justify-content: center;
align-items: center;
width: 112px;
height: 33px;
background: #FA7272;
border-radius: 8px;
margin: 0;
}
.modal input {
width: 210px;
height: 40px;
border: 1px solid #4D4D4D;
border-radius: 4px;
margin-bottom: 20px;
margin-top: 20px;
padding-left: 12px;
padding-right: 12px;
outline: none;
color: #FA7272;
}
</style>