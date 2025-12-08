'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LogoutIcon } from '@/shared/assets/icons/outline'
import { signOut } from '@/shared/lib/auth'
import { Button } from '../ui/button'
import { Spinner } from '../ui/spinner'

export function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const onSignOut = async () => {
    setLoading(true)
    await signOut()
    router.push('/')
  }

  return (
    <Button
      disabled={loading}
      onClick={onSignOut}
      variant={'ghost'}
      className="w-fit p-0 text-destructive shadow-none hover:bg-card hover:text-destructive"
    >
      {loading ? <Spinner /> : <LogoutIcon className="size-5" />}
      خروج از حساب
    </Button>
  )
}
