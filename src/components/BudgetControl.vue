<script setup>
import image from '../assets/img/grafico.jpg';

const budget = defineProps({
    budget: Number,
    
})
</script>

<template>
    <div class="two-columns">
        <div class="graph-container">
            <img :src="image" alt="graph">
        </div>
        <div class="budget-container">
            <button class="reset-app">Reset App</button>

            <p><span>Budget: </span>$0</p>
            <p><span>Available: </span>$0</p>
            <p><span>Spent: </span>$0</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>