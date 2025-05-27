<template>
  <div class="receipt-page">
    <h1 class="title">收據</h1>

    <div class="receipt-box">
      <div class="info-row">
        <span class="label">單據編號：</span>
        <span class="value">{{ receipt.number }}</span>
      </div>
      <div class="info-row">
        <span class="label">交易日期：</span>
        <span class="value">{{ receipt.date }}</span>
      </div>
      <div class="info-row">
        <span class="label">備註：</span>
        <span class="value">{{ receipt.note }}</span>
      </div>

      <table class="item-table">
        <thead>
          <tr>
            <th>品項</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in receipt.items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.unitPrice.toLocaleString() }}</td>
            <td>{{ (item.quantity * item.unitPrice).toLocaleString() }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="total-label">總金額</td>
            <td class="total-value">{{ totalAmount.toLocaleString() }} 元</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface ReceiptItem {
  name: string
  quantity: number
  unitPrice: number
}

interface Receipt {
  number: string
  date: string
  note: string
  items: ReceiptItem[]
}

const receipt = ref<Receipt>({
  number: 'RCPT-20240528',
  date: '2025-05-28',
  note: '珍珠奶茶店外帶訂單',
  items: [
    { name: '經典珍珠奶茶（中杯）', quantity: 2, unitPrice: 55 },
    { name: '黑糖波霸鮮奶（大杯）', quantity: 1, unitPrice: 75 },
    { name: '抹茶拿鐵（中杯）', quantity: 1, unitPrice: 65 },
    { name: '冬瓜檸檬（中杯）', quantity: 2, unitPrice: 50 },
    { name: '多多綠（大杯）', quantity: 1, unitPrice: 60 },
    { name: '芒果冰沙（大杯）', quantity: 1, unitPrice: 80 },
    { name: '仙草凍奶茶（中杯）', quantity: 1, unitPrice: 60 },
  ],
})

const totalAmount = computed(() =>
  receipt.value.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
)
</script>

<style scoped lang="scss">
.receipt-page {
  padding: 48px;
  font-family: 'Segoe UI', sans-serif;

  .title {
    font-size: 32px;
    margin-bottom: 32px;
    color: #37474f;
  }

  .receipt-box {
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
        background-color: #f0f4c3;
        color: #558b2f;
      }

      .total-label {
        text-align: right;
        font-weight: bold;
      }

      .total-value {
        font-weight: bold;
        color: #33691e;
      }
    }
  }
}
</style>
