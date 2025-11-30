'use client'
import { format } from 'date-fns-jalali'
import Image from 'next/image'
import { Fragment } from 'react'
import { AppHeader } from '@/shared/components/layouts/app-header'
import { Separator } from '@/shared/components/ui/separator'
import { siteConfig } from '@/shared/config/site'

const Signature = () => (
  <Image
    src="/signature.png"
    alt="Vercel"
    width={100}
    height={50}
    quality={100}
    sizes="100vw"
    className="mx-auto mt-6 dark:invert"
  />
)

export default function About() {
  return (
    <Fragment>
      <AppHeader title="درباره ما" />
      <Separator className="my-4" />
      <Image
        width={120}
        height={120}
        sizes="100vw"
        quality={100}
        alt="دخل"
        src="/kharjino.webp"
        draggable="false"
        className="mx-auto"
      />
      <div className="mt-4 space-y-2 text-xs/6">
        <p className="text-center">
          دخل یک وب اپلیکیشن مدرن و مینیمال برای مدیریت مخارج شخصی که به صورت
          کاملا رایگان و اوپن سورس توسعه داده شده. همچنین از جدیدترین تکنولوژی
          های روز وب استفاده شده.
        </p>
        <div className="space-y-2 text-center font-medium">
          <p>
            ورژن: {siteConfig.v} <br />
            <a target="_blank" href="https://soheilghanbary.ir" rel="noopener">
              توسعه دهنده: سهیل قنبری
            </a>{' '}
            <br />
            آخرین بروزرسانی: {format(new Date(), 'd MMMM yyyy')}
          </p>
          <Signature />
        </div>
      </div>
    </Fragment>
  )
}
