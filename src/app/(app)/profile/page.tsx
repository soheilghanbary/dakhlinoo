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
  // {
  //   href: '/settings',
  //   title: 'تنظیمات',
  //   icon: SettingsIcon,
  // },
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
        <div className="flex flex-col gap-2 rounded-lg bg-card p-3">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              className="flex items-center gap-3 rounded-lg py-3 duration-150"
            >
              <l.icon className="size-5" />
              <span className="grow text-right text-sm/[18px]">{l.title}</span>
            </Link>
          ))}
        </div>
        <div className="rounded-lg bg-card p-3">
          <LogoutButton />
        </div>
      </main>
    </Fragment>
  )
}
