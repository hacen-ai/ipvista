<template>
  <div class="container">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="{ active: index === selected }"
        class="tab-btn"
      >
        Tab {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Number of tabs
const numTabs = 3;

// Current tab
const selected = ref(0);

// Array to hold tabs
const tabs = ref([...Array(numTabs).keys()].map((i) => i + 1));

// Interval ID for auto-incrementing
let intervalId = null;

// Function to change tab
const changeTab = (index) => {
  clearInterval(intervalId);
  selected.value = index;
  startAutoIncrement();
};

// Function to increment tab
const incrementTab = () => {
  selected.value = (selected.value % numTabs) + 1;
};

// Function to start auto-incrementing
const startAutoIncrement = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    incrementTab();
  }, 3000);
};

onMounted(() => {
  startAutoIncrement();
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.tab-btn {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #e2e8f0;
  cursor: pointer;
}

.tab-btn.active {
  background-color: #4a90e2;
  color: white;
}
</style>
