<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p class="text">載入中，請稍候...</p>
  </div>
</template>

<script setup lang="ts">
// 無需 props，可視需要擴充文字或尺寸
</script>

<style scoped lang="scss">
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #555;
  font-family: 'Segoe UI', sans-serif;

  .spinner {
    width: 48px;
    height: 48px;
    border: 5px solid #ccc;
    border-top-color: #26a69a;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 12px;
  }

  .text {
    font-size: 16px;
    color: #455a64;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
