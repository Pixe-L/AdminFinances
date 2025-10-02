<script setup>
    import closeModal from '../assets/img/cerrar.svg'

    const emit = defineEmits(['close-modal', 'update:name', 'update:amount', 'update:category']);
    const props = defineProps({
        modal: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        amount: {
            type: [String, Number],
            required: true
        },
        category: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="modal">
        <div class="closed-modal">
            <img :src="closeModal" alt="icono de cerrar" @click="$emit('close-modal')">
        </div>

        <div class="container container-form" :class="[modal.animate ? 'animate' : 'close']">
            <form class="new-expense">
                <legend>Add expense</legend>
                <div class="field">
                    <label for="name">Name expense:</label>
                    <input :value="name" type="text" id="name" placeholder="Name expense"
                    @input="$emit('update:name', $event.target.value)">
                </div>
                <div class="field">
                    <label for="amount">Name expense:</label>
                    <input :value="amount" type="number" id="amount" placeholder="Add amount of expense, ex. 300"
                    @input="$emit('update:amount', +$event.target.value)">
                </div>
                <div class="field">
                    <label for="category">Category:</label>
                    <select name="category" id="category" :value="category" @input="$emit('update:category', $event.target.value)">
                        <option value="">-- Select --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="miscellaneous_expenses">Miscellaneous Expenses</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>

                <input type="submit" value="Add Expense">
            </form>
        </div>
    </div>

</template>


<style scoped>
.modal {
    position: absolute;
    background-color: rgb(0 0 0 / 0.9);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.closed-modal {
    position: absolute;
    right: 3rem;
    top: 3rem;
}
.closed-modal  img {
    width: 3rem;
    cursor: pointer;
}
.container-form {
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
}
.container-form.animate {
    opacity: 1;
}
.container-form.close {
    opacity: 0;
}
.new-expense {
    display: grid;
    gap: 2rem;
    margin: 10rem auto 0 auto;
}
.new-expense legend {
    text-align: center;
    color: var(--white);
    font-size: 3rem;
    font-weight: 700;
}
.field {
    display: grid;
    gap: 2rem;
}
.new-expense input,
.new-expense select {
    background-color: var(--light-gray);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
}
.new-expense label {
    color: var(--white);
    font-size: 3rem;
}
.new-expense input[type="submit"] {
    background-color: var(--blue);
    cursor: pointer;
    color: var(--white);
    transition: .5s;
}
.new-expense input[type="submit"]:hover {
    background-color: #185fd1;
}
</style>