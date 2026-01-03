'use client'
import { useEffect } from 'react'
import { useUserStore } from '@/store/userStore'
import defaultMockUser from '@/mockStates/MockUser'

export default function UserInitializer() {
  useEffect(() => {
    useUserStore.getState().setUser(defaultMockUser)
  }, [])

  return null
}
