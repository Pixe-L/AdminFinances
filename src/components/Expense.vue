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
}

const props = defineProps({
    expense: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="expense shade">
        <div class="content">
            <img :src="diccionarioIconos[expense.category]" class="icon" alt="Icono gasto">
            <div class="details">
                <p class="category">{{ expense.category }}</p>
                <p class="name">{{ expense.name }}</p>

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

}

.content {

}

.details p {

}

.category {

}

.name {

}

.date {

}
</style>