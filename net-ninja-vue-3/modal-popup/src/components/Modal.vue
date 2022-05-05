<template>
    <div class="backdrop">
        <div class="modal">
            <p class="close-modal" @click.self="closeModalFunction">x</p>
            <h1 class="modal-items">{{ header }}</h1>
            <p class="modal-items">{{ content }}</p>
        </div>
    </div>
</template>

<script>

export default ({
    props: ['header', 'content'],
    methods: {
        closeModalFunction() {
            return this.$emit('closeModal');
        }
    }
});
</script>


<style >
    .backdrop{
        top: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .modal{
        position: relative;
        margin: 100px auto;
        padding: 20px;
        border-radius: 15px;
        background-color: #fff;
        width: 400px;
        transition: all 1s ease;
    }
    .modal-enter-from {
        scale: (1.1);
    }
    .modal h1 {
        border-bottom: 1px solid rgba(238, 238, 17, 0.5) ;
    }
    .modal p {
        font-style: oblique;
    }
    .modal-items {
        margin: 15px 0px;
        padding: 10px;
    }
    .modal .close-modal {
        position: absolute;
        right: 5%;
        top: 3%;
        color: #c50505;
        border: 1px solid #c50505;
        border-radius: 50px;
        width: 19px;
        transition: background-color 0.5s, color 0.4s, transform 1s;
    }
    .modal .close-modal:hover {
        cursor: pointer;
        background-color: #c50505;
        color: #fff;
        transform: rotate(180deg);
    }
</style>