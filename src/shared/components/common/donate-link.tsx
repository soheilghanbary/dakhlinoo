import Link from 'next/link'
import { StarsPattern } from '@/shared/assets/icons/stars'
import { Label } from '../ui/label'

export const DonateLink = () => (
  <div className="relative grid gap-3">
    <Label className="text-right">🍵 لینک حمایت مالی</Label>
    <Link
      href="https://daramet.com/soly"
      target="_blank"
      className="relative flex w-full items-center justify-center overflow-hidden rounded-full bg-primary p-2 text-primary-foreground text-sm shadow-md transition-all hover:scale-105 active:scale-90"
    >
      <StarsPattern className="pointer-events-none absolute inset-0 size-full opacity-10" />
      <span className="relative z-10 w-full rounded-[inherit] bg-white/15 p-3 text-center dark:text-white">
        daramet.com/soly
      </span>
    </Link>
    <p className="text-center text-muted-foreground text-tiny">
      چو لطفِ تو بر کارِ ما بتابد، این دستاوردِ گشوده راهِ بالندگی و فَرّ در پیش گیرد.
    </p>
  </div>
)

export const CoffeeLink = () => (
  <a href="https://www.coffeebede.com/soheildev">
    {/** biome-ignore lint/performance/noImgElement: <explanation> */}
    <img
      alt="coffeebede"
      loading="lazy"
      draggable="false"
      className="img-fluid"
      src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg"
    />
  </a>
)
