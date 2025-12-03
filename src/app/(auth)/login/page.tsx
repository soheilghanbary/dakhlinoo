import { redirect } from 'next/navigation'
import walletAnimation from '@/shared/assets/lotties/wallet.json'
import { Lottie } from '@/shared/components/ui/lottie'
import { getUserId } from '@/shared/lib/helpers'
import OAuthButton from '../components/oauth-button'

export default async function Page() {
  const userId = await getUserId()
  if (userId) return redirect('/home')
  return (
    <div className="container-sm min-h-svh bg-background p-4 pt-32">
      <div className="mx-auto size-60">
        <Lottie animationData={walletAnimation} loop={false} />
      </div>
      <div className="-mt-8 flex flex-col gap-2 text-center">
        <h1 className="font-black text-2xl">دخلینو</h1>
        <p className="mb-4 text-muted-foreground text-sm/6">
          وب اپلیکیشن مدیریت مخارج شخصی
        </p>
        <OAuthButton />
      </div>
    </div>
  )
}
