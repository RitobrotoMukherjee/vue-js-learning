<template>
    <div class="backdrop">
        <div class="modal">
            <p class="close-modal" @click.self="closeModal">x</p>
            <slot>Default content( Fallback if no content passed) </slot>
            <h2>The Links From Named slots Below</h2>
            <slot name="linkLists">
                <p> Default slot content for 'List of Links'. </p>
            </slot>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        closeModal() {
            return this.$emit('closeModal');
        }
    }
};
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
    }
    .modal h1 {
        border-bottom: 1px solid rgba(238, 238, 17, 0.5) ;
    }
    .modal h2 {
        border-bottom: 1px solid rgba(249, 148, 148, 0.932) ;
        font-size: 20px;
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

    .modal .links-list {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
    }
    .links-list li {
        flex: 1;
        margin: 5px 3px;
        width: calc(100% / 2);
    }
    .links-list li a {
        padding: 10px;
        border: 1px solid rgb(5, 5, 174, 0.8);
        border-radius: 4px;
        text-align: center
    }
</style>