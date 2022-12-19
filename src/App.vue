<template>
  <div class="inventory__wrapper">
    <div class="inventory">
      <LeftBar></LeftBar>
      <div class="grid__wrapper">
        <Popup :color="this.color">
        <Modal :item="this.item"></Modal>
        </Popup>
        <div class="grid">
          <div class="item" 
            v-for="item in this.items.sort(Sort)" 
            :key="item.id" 
            @dragover.prevent 
            @dragenter.prevent
          >
            <div 
              @dragstart="dragStart($event, item)"
              @dragleave="dragEnd($event)"
              @dragend="dragEnd($event)"
              @dragover="dragOver($event)" 
              class="draggable" 
              draggable="true" 
              @drop.prevent="onDrop($event, item)"
            >
              <div 
                :class="'icon-second ' + item.color" 
                v-if="item.color" 
                @click="Show(item)"
              />
              <div 
                :class="'icon ' + item.color" 
                v-if="item.color" 
                @click="Show(item)"
              />
              <div class="counter" v-if="item.count">{{ item.count }}</div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar></BottomBar>
    </div>
  </div>

</template>

<script>

import Modal from './components/modal.vue';
import { mapMutations, mapState } from 'vuex';
import Popup from './components/popup.vue';
import LeftBar from './components/leftBar.vue';
import BottomBar from './components/bottomBar.vue';


export default {
  data() {
    return {
      color: '',
      item: {},
      currentItem: {},
    };
  },
  components: { Modal, Popup, LeftBar, BottomBar },
  methods: {
    Show(item) {
      this.color = item.color
      this.item = item
      this.showPopup()
    },
    dragStart(e, item) {
      this.currentItem = item      
    },
    dragEnd(e) {
    },
    dragOver(e) {

    },
    onDrop(e, item) {
    let currentPosition = this.currentItem.position
    let previousPosition = item.position
    this.items.map(i => {
        if (i.id == item.id) {
          i.position = currentPosition
        }
        if (i.id == this.currentItem.id) {
          i.position = previousPosition
        }
        return i
      })
      window.localStorage.setItem('cachedItems', JSON.stringify(this.items))
    },
    Sort(a, b) {
      if (a.position > b.position) {
        return 1
      } else {
        return -1
      }
    },
    ...mapMutations({
            showPopup: 'showPopup'
        }),
  },
  computed: {
    ...mapState({
            items: state => state.items
        }),
  } 
}
</script>


<style lang="scss" >
@import '@/Style.scss';
</style>
