<template>
    
    <TransitionGroup name="list" tag="div">
        <div class="popup" v-if="$store.state.showPopup == true">
          <img src="@/assets/cross.svg" alt="logo" @click="showPopup()">
          <div :class="'popup-second-icon ' + color"/>
          <div :class="'popup-icon ' + color"/>
          <div class="line"/>
          <div class="popup-ghost-name"/>
          <div class="ghost-discription"/>
          <div class="ghost-discription"/>
          <div class="ghost-discription"/>
          <div class="ghost-discription" style="width:180px ;"/>
          <div class="ghost-discription" style="width:80px ;"/>
          <div class="line"/>
          <button @click="showModal()">
            <h5>Удалить предмет</h5>
          </button>
          <slot></slot>
        </div>
      </TransitionGroup>

</template>
<script>
import { TransitionGroup } from 'vue';
import { mapMutations } from 'vuex';
export default {
    components:{TransitionGroup},
    methods: {
            ...mapMutations({
            showPopup: 'showPopup',
            showModal: 'showModal',
        }),
    },
    props: {
        color: [String]
    }

}


</script>
<style lang="scss">
@import '@/Style.scss';
</style>