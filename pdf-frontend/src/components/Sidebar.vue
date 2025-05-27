<template>
  <div class="sidebar-container">
    <div class="logo">
      <div class="logo-line">
        <span class="material-symbols-outlined">
          library_books
        </span>
        <p>Document</p>
      </div>
      <div class="logo-line">
        <p>PDF</p>
        <p>Downloader</p>
      </div>
    </div>
    <router-link class="sidebar-item" v-for="item in sidebarItems" :key="item.key" :to="{ name: item.name }"
      :class="{ active: route.path === item.route }">
      <span class="material-symbols-outlined">
        {{ item.icon }}
      </span>
      <h3>{{ item.label }}</h3>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


interface SidebarItem {
  label: string
  icon: string
  key: string
}

const sidebarItems = [
  { label: 'Order', name: 'order', icon: 'request_page', key: 'order', route: '/order' },// 發票
  { label: 'Receipt', name: 'receipt', icon: 'receipt_long', key: 'receipt', route: '/receipt' },// 收據
  { label: 'Quotation', name: 'quotation', icon: 'description', key: 'quotation', route: '/quotation' },// 報價單
  { label: 'Credit Note', name: 'credit_note', icon: 'note_alt', key: 'credit_note', route: '/credit_note' },// 折讓單
  { label: 'Statement', name: 'statement', icon: 'summarize', key: 'statement', route: '/statement' },// 對帳單
  { label: 'Packing Slip', name: 'packing', icon: 'inventory_2', key: 'packing', route: '/packing' },// 裝箱單
  { label: 'Delivery Note', name: 'delivery', icon: 'local_shipping', key: 'delivery', route: '/delivery' },// 交貨單
  { label: 'Tax Report', name: 'tax', icon: 'analytics', key: 'tax', route: '/tax' },// 報稅文件
  { label: 'Certificate', name: 'certificate', icon: 'verified', key: 'certificate', route: '/certificate' },// 證明文件   
]

const router = useRouter()
const route = useRoute()

function goTo(item: SidebarItem) {
  if (route.path !== item.route) {
    router.push(item.route)
  }
}

</script>
<style scoped lang="scss">
.sidebar-container {
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 16px 12px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);

  .logo {
    margin-bottom: 32px;
    width: 100%;
    text-align: center;

    .logo-line {
      font-weight: bold;
      font-size: 26px;
      color: #37474f;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;

      &:last-child {
        font-size: 18px;
        font-weight: normal;
        color: #607d8b;
      }

      .material-symbols-outlined {
        font-size: 26px;
        color: #26a69a;
      }
    }
  }

  .sidebar-item {
    width: 100%;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #455a64;
    transition: all 0.2s ease-in-out;

    .material-symbols-outlined {
      font-size: 22px;
      color: #26a69a;
    }

    &:hover {
      background-color: #e0f2f1;
      color: #00695c;

      .material-symbols-outlined {
        color: #00796b;
      }

      transform: translateX(4px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      cursor: pointer;
    }

    &.active {
      background-color: #b2dfdb;
      font-weight: bold;
    }
  }
}
</style>