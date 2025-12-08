'use client'
import { format } from 'date-fns-jalali'
import Image from 'next/image'
import { Fragment } from 'react'
import { Logo } from '@/shared/assets/icons'
import { CoffeeLink, DonateLink } from '@/shared/components/common/donate-link'
import { AppHeader } from '@/shared/components/layouts/app-header'
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
      <section className="fade-up-transition -mx-4 mb-4 bg-card p-4">
        <div className="mx-auto size-fit rounded-full bg-primary/20 p-3 ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
          <Logo className="mx-auto size-12 text-primary" />
        </div>
        <div className="mt-4 space-y-2 text-xs/6">
          <p className="text-center">
            دخلینو یک وب‌اپلیکیشن مدرن و مینیمال برای مدیریت مخارج شخصی است که به
            شکل کاملاً رایگان و متن‌باز عرضه شده. این پروژه با بهره‌گیری از
            جدیدترین استانداردها و تکنولوژی‌های وب توسعه یافته تا تجربه‌ای سریع،
            ساده و قابل‌اعتماد ارائه دهد.
          </p>
          <div className="space-y-2 text-center font-medium">
            <p>
              ورژن: {siteConfig.v} <br />
              <a
                target="_blank"
                href="https://soheilghanbary.ir"
                rel="noopener"
              >
                توسعه دهنده: سهیل قنبری
              </a>{' '}
              <br />
              آخرین بروزرسانی: {format(new Date(), 'd MMMM yyyy')}
            </p>
            <Signature />
            <DonateLink />
            <CoffeeLink />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
