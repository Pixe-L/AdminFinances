<script setup>
import { computed } from "vue";
import { formatMoney } from "../helpers";
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";

const props = defineProps({
  budget: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
  spent: {
    type: Number,
    required: true,
  },
});

defineEmits(["reset-app"]);

const porcent = computed(() => {
  return parseInt(((props.budget - props.available) / props.budget) * 100);
});
</script>

<template>
  <div class="two-columns">
    <div class="graph-container">
      <p class="porcent">{{ porcent }}%</p>
      <circle-progress
        :percent="porcent"
        :size="250"
        :border-width="30"
        :border-bg-width="30"
        fill-color="#3b82f6"
        empty-color="#e1e1e1"
      />
    </div>
    <div class="budget-container">
      <button type="button" class="reset-app" @click="$emit('reset-app')">
        Reset App
      </button>

      <p><span>Budget:</span>{{ formatMoney(budget) }}</p>
      <p><span>Available: </span>{{ formatMoney(available) }}</p>
      <p><span>Spent: </span>{{ formatMoney(spent) }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.two-columns {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.two-columns > :first-child {
  margin-block-end: 3rem;
}

@media (min-width: 768px) {
  .two-columns {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }

  .two-columns > :first-child {
    margin-block-end: 0rem;
  }
}

.reset-app {
  background-color: #db2777;
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  color: var(--white);
  transition: background-color 0.5s ease;
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

.graph-container {
  position: relative;
}

.porcent {
  font-size: 3rem;
  font-weight: 900;
  color: var(--dark-gray);
  text-align: center;
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
