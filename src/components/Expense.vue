<script setup>
import { formatMoney, formatDate } from '../helpers/index'
import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'

const diccionarioIconos = {
    saving: IconoAhorro,
    food: IconoComida,
    home: IconoCasa,
    miscellaneous: IconoGastos,
    leisure: IconoOcio,
    health: IconoSalud,
    subscriptions: IconoSuscripciones
};

const props = defineProps({
    expense: {
        type: Object,
        required: true
    }
});

defineEmits(['select-expense']); 
</script>

<template>
    <div class="expense shade">
        <div class="content">
            <img :src="diccionarioIconos[expense.category]" class="icon" alt="Icono gasto">
            <div class="details">
                <p class="category">{{ expense.category }}</p>
                <p @click="$emit('select-expense', expense.id)" class="name">{{ expense.name }}</p>
                <p class="date">
                    Fecha:
                    <span>{{ formatDate(expense.date) }}</span>
                </p>
            </div>
        </div>
        <p class="amount">{{ formatMoney(expense.amount) }}</p>
    </div>
</template>


<style scoped>
.expense {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 5rem;
}

.content {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.icon {
    width: 5rem;
}

.details p {
    margin: 0 0 1rem 0;
}

.category {
    color: var(--gray);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
}

.name {
    color: var(--dark-gray);
    font-size: 2.4rem;
    font-weight: 700;
    cursor: pointer;
    width: max-content;
}

.date {
    font-size: 1.6rem;
    font-weight: 900;
}

.date span {
    font-weight: 400;
    color: var(--dark-gray);
}

.amount {
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
}
</style>