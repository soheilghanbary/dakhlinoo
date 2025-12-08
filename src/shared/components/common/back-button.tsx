'use client'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export const BackButton = () => {
  const { back } = useRouter()
  return (
    <Button onClick={back} variant={'ghost'} size={'icon'}>
      <ChevronRight className="size-5" />
    </Button>
  )
}
