import { Fragment } from 'react'
import { TransactionForm } from '@/features/transaction'
import { AppHeader } from '@/shared/components/layouts/app-header'
import { getUserId } from '@/shared/lib/helpers'

export default async function NewPage() {
  const userId = await getUserId()
  return (
    <Fragment>
      <AppHeader title="تراکنش جدید" />
      <TransactionForm mode="add" userId={userId} />
    </Fragment>
  )
}
