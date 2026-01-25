<script setup>
defineProps(["filter"]);
defineEmits(["update:filter"]);
</script>
<template>
  <div class="filter containers shade">
    <form>
      <div class="field">
        <label for="filter">Filter expenses</label>
        <select
          id="filter"
          :value="filter"
          @input="$emit('update:filter', $event.target.value)"
        >
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
    </form>
  </div>
</template>

<style scoped>
.filter {
  margin-top: 10rem;
}

.filter .field {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.filter label {
  font-size: 3rem;
  font-weight: 900;
  color: var(--dark-gray);
}

.filter select {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--light-gray);
  text-align: center;
}
</style>
