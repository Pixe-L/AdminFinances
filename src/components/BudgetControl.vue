<script setup>
import image from '../assets/img/grafico.jpg';
import {formatMoney} from '../helpers'

const props = defineProps({
    budget: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        required: true
    },
    spent: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <div class="two-columns">
        <div class="graph-container">
            <img :src="image" alt="graph">
        </div>
        <div class="budget-container">
            <button class="reset-app">Reset App</button>

            <p><span>Budget:</span>{{ formatMoney(budget) }}</p>
            <p><span>Available: </span>{{ formatMoney(available) }}</p>
            <p><span>Spent: </span>{{formatMoney(spent)}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.two-columns {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.two-columns>:first-child {
    margin-block-end: 3rem;
}

@media (min-width: 768px) {
    .two-columns {
        flex-direction: row;
        gap: 4rem;
        align-items: center;
    }

    .two-columns>:first-child {
        margin-block-end: 0rem;
    }
}

.reset-app {
    background-color: #db2777;
    border: none;
    padding: 1rem;
    width: 100%;
    border-radius: .5rem;
    color: var(--white);
    transition: background-color  0.5s ease;
    text-transform: uppercase;
    font-weight: 900;
}

.reset-app:hover {
    background-color: #be2b6e;
    cursor: pointer;
}

.budget-container {
    width: 100%;
}

.budget-container p {
    font-size: 2.4rem;
    text-align: center;
    color: var(--dark-gray);
}

@media (min-width: 768px) {
    .budget-container p {
        text-align: left;
    }
}

.budget-container span {
    font-weight: 900;
    color: var(--blue);
}
</style>