<template>
  <h1 v-text="header.mainHeader"></h1>
  <div class="support"><p>Welcome...</p></div>
  <button @click="toggleModal">Open Modal</button>
  <div v-show="showModal">
    <Modal @closeModal="toggleModal" >
      <h1 class="modal-items" v-text="header.modalHeader"></h1>
      <p class="modal-items">{{ data.modalContent }}</p>
      <template v-slot:linkLists>
        <ul class="links-list">
          <li>
            <a href="#">Login</a>
          </li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </template>
    </Modal>
  </div>
  <div></div>
</template>

<script>
import Modal from './components/Modal.vue';

let dataObj = {
  header: {
    mainHeader: "App Vue header",
    modalHeader: "It's a slot Modal",
  },
  data: {
    modalContent: "Hello It's the slot modal content",
  }
};

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      ...dataObj,
      showModal: false,
    }
  },
  methods: {
    toggleModal(){
      return this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.support {
  min-height: 20px;
  align-items: center;
  padding: 20px;
}
</style>
