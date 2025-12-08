'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AddBoldIcon,
  HomeBoldIcon,
  NotesBoldIcon,
  TransactionBoldIcon,
  UserBoldIcon,
} from '@/shared/assets/icons/bold'
import {
  AddIcon,
  HomeIcon,
  NotesIcon,
  TransactionIcon,
  UserIcon,
} from '@/shared/assets/icons/outline'
import { cn } from '@/shared/lib/utils'

const navItems = [
  {
    href: '/home',
    label: 'خانه',
    icon: HomeIcon,
    activeIcon: HomeBoldIcon,
  },
  {
    href: '/transactions',
    label: 'تراکنش ها',
    icon: TransactionIcon,
    activeIcon: TransactionBoldIcon,
  },
  {
    href: '/new',
    label: 'افزودن',
    icon: AddIcon,
    activeIcon: AddBoldIcon,
  },
  {
    href: '/notes',
    label: 'دست نویس',
    icon: NotesIcon,
    activeIcon: NotesBoldIcon,
  },
  {
    href: '/profile',
    label: 'پروفایل',
    icon: UserIcon,
    activeIcon: UserBoldIcon,
  },
]

const NavigationItem = ({
  href,
  label,
  icon,
  activeIcon,
}: (typeof navItems)[0]) => {
  const pathname = usePathname()
  const active = pathname === href
  const IconComponent = active ? activeIcon : icon

  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center gap-1 text-muted-foreground',
        active && 'text-primary'
      )}
    >
      <IconComponent className="size-6" />
      <p className="font-medium text-tiny/[16px]">{label}</p>
    </Link>
  )
}

export const AppNavigation = () => {
  return (
    <footer className="container-sm fixed inset-x-0 bottom-0 left-0 z-10 bg-card/85 backdrop-blur-lg">
      <section className="grid w-full grid-cols-5 gap-x-3 px-3 py-2.5">
        {navItems.map((item) => (
          <NavigationItem key={item.href} {...item} />
        ))}
      </section>
    </footer>
  )
}
