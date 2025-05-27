<template>
  <div class="app-container">
    <div class="left">
      <Sidebar />
    </div>
    <div class="right">
      <Navbar />
      <div class="printable">
        <Home />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
</script>

<style scoped lang="scss">
.app-container {
  --sidebar-width: 240px;
  display: flex;
  justify-content: flex-start;

  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: 100vh;
    // border-right: 2px solid gray;
    padding: 16px;
  }

  .right {
    width: calc(100vw - var(--sidebar-width));
    margin-left: var(--sidebar-width);
    padding: 16px;
  }
}

@media print {

  .left,
  .right> :not(.printable) {
    display: none !important;
  }

  .right {
    margin-left: 0 !important;
    width: 100vw !important;
    padding: 0 !important;
  }

  .printable {
    display: block !important;
    width: 100%;
    margin: 0;
  }
}
</style>
