<template>
  <div>
    <p>{{ state }}</p>
    <button @click="toggle()">点击</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const state = ref(false);
    const toggle = () => (state.value = !state.value);

    onMounted(() => {
      console.log(123);
    });

    return {
      state,
      toggle,
    };
  },
};
</script>
