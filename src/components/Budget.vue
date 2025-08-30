<script setup>
    import {ref} from 'vue';
    import Alert from './Alert.vue';


    const budget = ref(0);
    const error = ref('');

    const defineBudget = () => {
        if (budget.value <= 0) {
            error.value = 'Presupuesto no valido'

            setTimeout(() => {
                error.value = '';
            }, 3000);
        } 
    }

</script>

<template>
    <form class="budget" @submit.prevent="defineBudget">

        <alert v-if="error">
            {{ error }}
        </alert>


        <div class="field">
            <label for="budget-new">Define budget</label>
            <input type="number" id="budget-new" class="budget-new" placeholder="Add your budget" v-model="budget">
        </div>

        <input type="submit" value="Define budget">
    </form>
</template>


<style scoped>
.budget {
    width: 100%;
}
.field {
    display: grid;
    gap: 2rem;
}
.budget label {
    font-size: 2.2rem;
    text-align: center;
    color: var(--blue);
}
.budget input[type="number"] {
    background-color: var(--light-gray);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
    text-align: center;
}
.budget input[type="submit"] {
    background-color: var(--blue);
    border-radius: 0.5rem;
    border: none;
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    margin-block-start: 2rem;
    color: var(--white);
    width: 100%;
    cursor: pointer;
    transition: background-color 0.5s ease;
}
.budget input[type="submit"]:hover {
    background-color: #1048a4;
}
</style>