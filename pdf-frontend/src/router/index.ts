import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/', component: () => import('../views/Home.vue'),
    children: [
      { path: '', redirect: 'order' },
      { path: 'order', name: 'order', component: () => import('../views/OrderPage.vue') },
      { path: 'receipt', name: 'receipt', component: () => import('../views/ReceiptPage.vue') },
      { path: 'quotation', name: 'quotation', component: () => import('../views/QuotationPage.vue') },
      { path: 'credit_note', name: 'credit_note', component: () => import('../views/CreditNotePage.vue') },
      { path: 'statement', name: 'statement', component: () => import('../views/StatementPage.vue') },
      { path: 'packing', name: 'packing', component: () => import('../views/PackingPage.vue') },
      { path: 'delivery', name: 'delivery', component: () => import('../views/DeliveryPage.vue') },
      { path: 'tax', name: 'tax', component: () => import('../views/TaxPage.vue') },
      { path: 'certificate', name: 'certificate', component: () => import('../views/CertificatePage.vue') },
    ],
  },
  {
    path: '/error',
    component: () => import('../views/ErrorPage.vue'),
    props: { message: '發生錯誤，請稍後再試' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/ErrorPage.vue'),
    props: { message: '您所尋找的頁面不存在' },
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

