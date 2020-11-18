<template>
  <div>
    <Button @click="onClick">按钮</Button>
    <p>
      <span style="padding: 0 16px 0 4px; font-size: 14px; color: #777"
        >点击次数:</span
      >
      <span>{{ count }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Button } from 'projectName';
import { ref } from 'vue';

export default {
  components: {
    Button,
  },
  setup() {
    const count = ref(0);
    function onClick() {
      count.value++;
    }

    return {
      count,
      onClick,
    };
  },
};
</script>
