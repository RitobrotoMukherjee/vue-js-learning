<template>
  <h1 v-text="header.mainHeader"></h1>
  <div class="support"><p>Welcome...</p></div>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
  <Modal :header="header.modalHeader" :content="data.modalContent" v-show="showModal" @closeModal="toggleModal" />

  <teleport to="#modals" >
    <Modal v-show="showModalTwo" :header="header.modalHeaderTwo" :content="data.teleportModalContent" @closeModal="toggleModalTwo" />
  </teleport>
  

</template>

<script>
import Modal from './components/Modal.vue';

let dataObj = {
  header: {
    mainHeader: "App Vue header",
    modalHeader: "It's a Modal",
    modalHeaderTwo: "It's Teleport Modal",
  },
  data: {
    modalContent: "Hello It's the modal content",
    teleportModalContent: "It's teleport modal content",
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
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal(){
      return this.showModal = !this.showModal;
    },
    toggleModalTwo(){
      return this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
#app, .allmodals {
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
