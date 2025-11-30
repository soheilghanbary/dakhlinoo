'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { DotsIcon } from '@/shared/assets/icons'

export function SplashScreen() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }, [])

  if (!show) return null

  return (
    <section className="fixed top-0 left-0 z-9999 size-full">
      <div className="container-sm flex h-dvh flex-col items-center justify-center bg-linear-to-b from-60% from-[#1C39BB] to-[#0067A5] text-white">
        <motion.figure
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'tween',
            delay: 0.1,
          }}
        >
          <Image
            width={180}
            height={180}
            sizes="100vw"
            quality={100}
            alt="Kharjino"
            src="/kharjino.webp"
            loading="eager"
            draggable="false"
            priority
          />
        </motion.figure>
        <h1 className="mt-4 mb-2 animate-duration-500 animate-fade-up font-black text-3xl delay-300">
          خرجینو
        </h1>
        <p className="my-1 animate-duration-500 animate-fade-up text-sm delay-500">
          اپلیکیشن مدیریت مخارج شخصی
        </p>
        <DotsIcon className="size-10 animate-duration-500 animate-fade-up delay-700" />
      </div>
    </section>
  )
}
