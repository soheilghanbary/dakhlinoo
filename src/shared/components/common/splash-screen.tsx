'use client'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { DotsIcon, Logo } from '@/shared/assets/icons'

export function SplashScreen() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }, [])

  if (process.env.NODE_ENV === 'development') return null
  if (!show) return null

  return (
    <section className="fixed top-0 left-0 z-9999 size-full">
      <div className="container-sm flex h-dvh flex-col items-center justify-center bg-background text-primary">
        <motion.figure
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'tween',
            delay: 0.1,
          }}
        >
          <div className="mx-auto size-fit rounded-full bg-primary/20 p-3 ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
            <Logo className="mx-auto size-16 text-primary" />
          </div>
        </motion.figure>
        <h1 className="mt-4 mb-2 animate-duration-500 animate-fade-up font-black text-3xl delay-300">
          دخلینو
        </h1>
        <p className="my-1 animate-duration-500 animate-fade-up text-foreground text-sm delay-500">
          اپلیکیشن مدیریت مخارج شخصی
        </p>
        <DotsIcon className="size-10 animate-duration-500 animate-fade-up delay-700" />
      </div>
    </section>
  )
}
