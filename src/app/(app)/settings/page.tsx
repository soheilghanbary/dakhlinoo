import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { db } from '@/server/db'
import { transactions } from '@/server/db/schema'
import { AppHeader } from '@/shared/components/layouts/app-header'
import { Button } from '@/shared/components/ui/button'
import { getUserId } from '@/shared/lib/helpers'

export default async () => {
  const userId = await getUserId()
  const deleteAllTransactions = async () => {
    'use server'
    await db.delete(transactions).where(eq(transactions.userId, userId))
    redirect('/home')
  }
  return (
    <>
      <AppHeader title="تنظیمات" />
      <form action={deleteAllTransactions}>
        <Button variant={'destructive'} size={'sm'} type="submit">
          پاک کردن تمام تراکنش ها
        </Button>
      </form>
    </>
  )
}
