import { BackButton } from '@/shared/components/common/back-button'

type Props = {
  title: string
  leftChild?: React.ReactNode
}

export function AppHeader({ title, leftChild }: Props) {
  return (
    <header className="relative mb-4 flex items-center justify-between">
      <BackButton />
      <h1 className="absolute left-1/2 -translate-x-1/2 font-medium text-base">
        {title}
      </h1>
      {leftChild}
    </header>
  )
}
