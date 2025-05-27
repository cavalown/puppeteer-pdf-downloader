<template>
  <div class="error-container">
    <span class="emoji">⚠️</span>
    <h2 class="title">發生錯誤</h2>
    <p class="message">{{ message }}</p>
    <button class="retry-button" @click="onRetry">重試</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message?: string
}>()

const emit = defineEmits(['retry'])

function onRetry() {
  emit('retry')
}
</script>

<style scoped lang="scss">
.error-container {
  text-align: center;
  padding: 48px 24px;
  color: #37474f;
  font-family: 'Segoe UI', sans-serif;

  .emoji {
    font-size: 48px;
    display: block;
    margin-bottom: 16px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .message {
    font-size: 16px;
    margin-bottom: 24px;
    color: #607d8b;
  }

  .retry-button {
    background-color: #26a69a;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00796b;
    }
  }
}
</style>
