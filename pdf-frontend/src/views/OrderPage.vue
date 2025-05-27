<template>
  <LoadingSpinner v-if="!order" />
  <div class="order-page" v-else>
    <h1 class="title">訂單明細</h1>

    <div class="order-box">
      <div class="info-row">
        <span class="label">訂單編號：</span>
        <span class="value">{{ order.number }}</span>
      </div>
      <div class="info-row">
        <span class="label">訂購日期：</span>
        <span class="value">{{ order.date }}</span>
      </div>
      <div class="info-row">
        <span class="label">備註：</span>
        <span class="value">{{ order.note }}</span>
      </div>

      <table class="item-table">
        <thead>
          <tr>
            <th>商品名稱</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.unitPrice.toLocaleString() }}</td>
            <td>{{ (item.quantity * item.unitPrice).toLocaleString() }}</td>
          </tr>
        </tbody>
        <!-- <tfoot>
          <tr>
            <td colspan="3" class="total-label">總金額</td>
            <td class="total-value">{{ totalAmount.toLocaleString() }} 元</td>
          </tr>
        </tfoot> -->
      </table>
      <div class="amout">
        <div class="total-label">總金額</div>
        <div class="total-value">{{ totalAmount.toLocaleString() }} 元</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { computed, ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
// import orderData from '@/assets/data/order.json'
import type { Order } from '@/types/order'
import { fetchOrder } from '@/mock/order.mock'



const order = ref<Order | null>(null)
const isLoading = ref(true)
const isError = ref(false)

const router = useRouter()

onMounted(async () => {
  try {
    order.value = await fetchOrder()
    console.log({ order: order.value })
    // 等待 DOM 更新完成（例如 v-for 渲染結束）
    await nextTick()

    // 明確通知 puppeteer 頁面已渲染完成
    window.document.renderReady = true
    console.log('[Puppeteer] renderReady set to true')
  } catch (e) {
    console.error('訂單載入失敗', e)
    window.document.renderFailed = true
    isError.value = true
    router.push({
      path: '/error',
      query: { msg: '無法載入訂單資料，請稍後再試' },
    })
  } finally {
    isLoading.value = false
  }
})

const totalAmount = computed(() =>
  order.value.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
)
</script>

<style scoped lang="scss">
.order-page {
  padding: 48px;
  font-family: 'Segoe UI', sans-serif;

  .title {
    font-size: 32px;
    margin-bottom: 32px;
    color: #37474f;
  }

  .order-box {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 24px;
    background-color: #fafafa;
    max-width: 720px;

    .info-row {
      display: flex;
      margin-bottom: 12px;

      .label {
        font-weight: bold;
        width: 120px;
        color: #455a64;
      }

      .value {
        color: #37474f;
        flex: 1;
      }
    }

    .item-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 24px;

      th,
      td {
        padding: 12px;
        border: 1px solid #ccc;
        text-align: left;
      }

      th {
        background-color: #fff3e0;
        color: #ef6c00;
      }

      .total-label {
        text-align: right;
        font-weight: bold;
      }

      .total-value {
        font-weight: bold;
        color: #bf360c;
      }
    }

    .amout {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      gap: 12px;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 2px solid #ccc;

      .total-label {
        font-size: 16px;
        font-weight: bold;
        color: #37474f;
      }

      .total-value {
        font-size: 18px;
        font-weight: bold;
        color: #d84315;
      }
    }
  }
}
</style>
