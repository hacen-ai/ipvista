<template>
  <div>
    <select v-model="selectedOption">
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
    <ul>
      <li v-for="(faq, index) in faqs" :key="index">{{ faq }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Define options for dropdown
const options = ref(["Option 1", "Option 2", "Option 3"]);

// Define selected option
const selectedOption = ref(options.value[0]);

// Define FAQs array
const faqs = ref([]);

// Function to update FAQs based on selected option
const updateFAQs = () => {
  // Logic to update FAQs based on selectedOption.value
  if (selectedOption.value === "Option 1") {
    faqs.value = [
      "FAQ 1 for Option 1",
      "FAQ 2 for Option 1",
      "FAQ 3 for Option 1",
    ];
  } else if (selectedOption.value === "Option 2") {
    faqs.value = ["FAQ 1 for Option 2", "FAQ 2 for Option 2"];
  } else if (selectedOption.value === "Option 3") {
    faqs.value = ["FAQ 1 for Option 3"];
  }
};

// Watch for changes in selectedOption and update FAQs accordingly
watch(selectedOption, () => {
  updateFAQs();
});

// Initial call to update FAQs when the component mounts
updateFAQs();
</script>
