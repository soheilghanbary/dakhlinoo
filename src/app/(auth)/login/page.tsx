import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Separator } from '@/shared/components/ui/separator'
import { siteConfig } from '@/shared/config/site'
import { getUserId } from '@/shared/lib/helpers'
import OAuthButton from '../components/oauth-button'

export default async function Page() {
  const userId = await getUserId()
  if (userId) return redirect('/home')
  return (
    <section className="container-sm min-h-svh bg-background p-4">
      <div className="animate-duration-500 animate-fade">
        <Image
          width={120}
          height={120}
          sizes="100vw"
          quality={100}
          alt="دخل"
          src="/min-logo.webp"
          draggable="false"
          className="mx-auto mt-36"
        />
        <h1 className="text-center font-bold text-3xl text-primary">
          {siteConfig.title}
        </h1>
        <h3 className="my-4 text-center font-medium">ورود به حساب کاربری</h3>
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-muted-foreground text-xs">ورود با</span>
            <Separator className="flex-1" />
          </div>
          <OAuthButton />
        </div>
      </div>
    </section>
  )
}
