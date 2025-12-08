import { BackButton } from '@/shared/components/common/back-button'

type Props = {
  title: string
  leftChild?: React.ReactNode
}

export function AppHeader({ title, leftChild }: Props) {
  return (
    <header className="-m-4 relative mb-2 flex items-center justify-between p-3">
      <BackButton />
      <h1 className="-translate-x-1/2 absolute left-1/2 font-medium text-base">
        {title}
      </h1>
      {leftChild}
    </header>
  )
}
