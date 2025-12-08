import Link from 'next/link'
import { Fragment } from 'react'
import {
  HeadphoneIcon,
  InfoIcon,
  MagicIcon,
  MoneyIcon,
  UserIcon,
} from '@/assets/icons/outline'
import { LogoutButton } from '@/shared/components/common/logout-button'
import { AppHeader } from '@/shared/components/layouts/app-header'
import { Separator } from '@/shared/components/ui/separator'

const links = [
  {
    href: '/account',
    title: 'ویرایش حساب کاربری',
    icon: UserIcon,
  },
  {
    href: '/market',
    title: 'قیمت لحظه ای بازار',
    icon: MoneyIcon,
  },
  {
    href: '/theme',
    title: 'تغییر پوسته اپلیکیشن',
    icon: MagicIcon,
  },
  {
    href: '/support',
    title: 'پشتیبان آنلاین',
    icon: HeadphoneIcon,
  },
  {
    href: '/about',
    title: 'درباره ما',
    icon: InfoIcon,
  },
]

export default function ProfilePage() {
  return (
    <Fragment>
      <AppHeader title="پروفایل" />
      <main className="space-y-2">
        <div className="fade-up-transition -mx-4 flex flex-col gap-2 bg-card p-4">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              className="flex h-12 items-center gap-3 rounded-lg duration-150"
            >
              <l.icon className="size-5" />
              <span className="grow text-right text-sm/[18px]">{l.title}</span>
            </Link>
          ))}
          <Separator className="my-1" />
          <LogoutButton />
        </div>
      </main>
    </Fragment>
  )
}
