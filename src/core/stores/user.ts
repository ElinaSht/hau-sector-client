import { shallowRef } from '@vue/reactivity'
import {
  createGlobalState,
  tryOnMounted,
} from '@vueuse/core'
import { readonly } from 'vue'
import type { User } from '@/core/dto/user'

export const useUserStore = createGlobalState(() => {
  const user = shallowRef< User >()

  async function load() {
    user.value = {
      firstName: 'Иван',
      lastName: 'Иванов',
      middleName: 'Иванович',
      avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80',
    }
  }

  tryOnMounted(load)

  return {
    user: readonly(user),
  }
})
