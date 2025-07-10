import { createRouter, createWebHistory } from 'vue-router'
import GiftCard from '@/views/GiftCard.vue'
import Payment from '@/views/Payment.vue'
import { checkIfBlocked } from '../../composables/blocked'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'GiftCard',
      component: GiftCard,
    },

    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
    },

  ],
})

router.beforeEach(async (to, from, next) => {
  await checkIfBlocked()
  next()
})

export default router
