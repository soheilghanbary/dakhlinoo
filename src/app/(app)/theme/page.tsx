'use client'
import { CircleCheck, CircleIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Fragment } from 'react/jsx-runtime'
import { MoonIcon, SunIcon, SystemIcon } from '@/shared/assets/icons/bulk'
import { AppHeader } from '@/shared/components/layouts/app-header'

export default function ThemePage() {
  const { theme, setTheme } = useTheme()
  const handleThemeChange = (t: string) => setTheme(t)

  return (
    <Fragment>
      <AppHeader title="تم اپلیکیشن" />
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => handleThemeChange('light')}
          className="relative grid place-items-center gap-2 rounded-lg bg-card p-3 text-muted-foreground ring-primary/50 transition-all hover:ring-2 active:scale-95"
        >
          {theme === 'light' ? (
            <CircleCheck className="absolute top-2 right-2 size-4 text-primary" />
          ) : (
            <CircleIcon className="absolute top-2 right-2 size-4 text-muted-foreground/60" />
          )}
          <SunIcon className="size-6" />
          <span className="font-medium text-xs">روشن</span>
        </button>
        <button
          type="button"
          onClick={() => handleThemeChange('dark')}
          className="relative grid place-items-center gap-2 rounded-lg bg-card p-3 text-muted-foreground ring-primary/50 transition-all hover:ring-2 active:scale-95"
        >
          {theme === 'dark' ? (
            <CircleCheck className="absolute top-2 right-2 size-4 text-primary" />
          ) : (
            <CircleIcon className="absolute top-2 right-2 size-4 text-muted-foreground/60" />
          )}
          <MoonIcon className="size-6" />
          <span className="font-medium text-xs">تاریک</span>
        </button>
        <button
          type="button"
          onClick={() => handleThemeChange('system')}
          className="relative grid place-items-center gap-2 rounded-lg bg-card p-3 text-muted-foreground ring-primary/50 transition-all hover:ring-2 active:scale-95"
        >
          {theme === 'system' ? (
            <CircleCheck className="absolute top-2 right-2 size-4 text-primary" />
          ) : (
            <CircleIcon className="absolute top-2 right-2 size-4 text-muted-foreground/60" />
          )}
          <SystemIcon className="size-6" />
          <span className="font-medium text-xs">سیستم</span>
        </button>
      </div>
    </Fragment>
  )
}
