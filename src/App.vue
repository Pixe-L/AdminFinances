<script setup>
import { ref, reactive, watch } from 'vue';
import Budget from './components/Budget.vue';
import BudgetControl from './components/BudgetControl.vue';
import Modal from './components/Modal.vue';
import Expense from './components/Expense.vue';
import iconNewBudget from './assets/img/nuevo-gasto.svg'
import {idGenerator} from './helpers'

const modal = reactive({
  show: false,
  animate: false
});

const budget = ref(0);
const available = ref(0);
const spent = ref(0);

const expense = reactive({
  name: '',
  amount: '',
  category: '',
  id: null,
  date: Date.now()
});
const expenses = ref([]);

watch(expenses, () => {
  const totalExpense = expenses.value.reduce((total, expense) => expense.amount + total, 0);
  spent.value = totalExpense;
  available.value = budget.value - spent.value;
}, {
  deep: true
});

const defineBudget = (amount) => {
  budget.value = amount;
  available.value = amount;
};

const showModal = () => {
  setTimeout(() => {
    modal.animate = true;
  }, 300);
  modal.show = true;
};

const closeModal = () => {
  modal.animate = false;
  setTimeout(() => {
    modal.show = false;
  }, 300);
};

const saveExpense = () => {
  expenses.value.push({
    ...expense,
    id: idGenerator()
  });
  closeModal();

  // Reset modal
  Object.assign(expense, {
    name: '',
    amount: '',
    category: '',
    id: null,
    date: Date.now()
  })
};
</script>

<template>
  <div :class="{set: modal.show}">
    <header>
      <h1>Expense Manager</h1>

      <div class="header-container container shade">
        <budget v-if="budget === 0" @define-budget="defineBudget" />

        <!-- Budget Control -->
        <budget-control v-else :budget="budget" :available="available" :spent="spent"/>
      </div>
    </header>

    <main v-if="budget > 0">

      <div class="expense-list container">
        <h2>{{expenses.length > 0 ? 'Expenses' : 'Not expenses'}}</h2>

        <expense v-for="expense in expenses" :key="expense.id" :expense="expense"/>
      </div>

      <div class="budget-create">
        <img :src="iconNewBudget" alt="Icon new budget" @click="showModal">
      </div>

      <Modal v-if="modal.show" @close-modal="closeModal" @save-expense="saveExpense" :modal="modal" :available="available"
      v-model:name="expense.name" v-model:amount="expense.amount" v-model:category="expense.category"/>
    </main>
  </div>
</template>

<style>
:root {
  --blue: #3b82f6;
  --white: #fff;
  --light-gray: #f5f5f5;
  --gray: #94a3b8;
  --dark-gray: #64748b;
  --dark: #000;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
  background-color: var(--light-gray);
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

.set {
  overflow: hidden;
  height: 100vh;
}

header {
  background-color: var(--blue);
}

header h1 {
  padding: 3rem 0;
  margin: 0;
  color: var(--white);
  text-align: center;
}

.container {
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}

.header-container {
  margin-top: -5rem;
  transform: translateY(5rem);
  padding: 5rem;
}

.shade {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  border-radius: 1.2rem;
}

.budget-create {
  position: fixed;
  bottom: 5rem;
  right: 5rem;
}

.budget-create img {
  width: 5rem;
  cursor: pointer;
}

.expense-list {
  margin-top: 10rem;
}

.expense-list h2 {
  font-weight: 900;
  color: var(--dark-gray);
}
</style>
