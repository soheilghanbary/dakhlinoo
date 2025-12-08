import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import { UserInfo, UserInfoSkeleton } from '@/features/auth'
import {
  RecentTransactionList,
  TransactionChart,
  TransactionLoading,
  TransactionSummary,
  TransactionSummarySkeleton,
} from '@/features/transaction'
import { UserIcon } from '@/shared/assets/icons/outline'
import { buttonVariants } from '@/shared/components/ui/button'

export default function Page() {
  return (
    <Fragment>
      <header className="-m-4 h-50 rounded-b-2xl bg-primary p-4">
        <div className="flex items-center justify-between gap-2">
          <Suspense fallback={<UserInfoSkeleton />}>
            <UserInfo />
          </Suspense>
          <Link
            href={'/profile'}
            className={buttonVariants({ variant: 'secondary', size: 'icon' })}
          >
            <UserIcon className="size-5" />
          </Link>
        </div>
        <Suspense fallback={<TransactionSummarySkeleton />}>
          <TransactionSummary />
        </Suspense>
      </header>
      <section className="mt-28">
        <TransactionChart />
        <Suspense fallback={<TransactionLoading />}>
          <RecentTransactionList />
        </Suspense>
      </section>
    </Fragment>
  )
}
