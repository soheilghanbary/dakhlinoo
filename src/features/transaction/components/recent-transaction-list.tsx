'use client'
import Link from 'next/link'
import { EmptyTransactionList } from '@/features/transaction'
import { useGetRecentTransactions } from '../hooks'
import { TransactionCard } from './transaction-card'

export function RecentTransactionList() {
  const { data: transactions } = useGetRecentTransactions()
  if (transactions.length === 0) return <EmptyTransactionList />
  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-medium text-sm">تراکنش های اخیر</p>
        <Link
          href={'/transactions'}
          className="p-1 text-muted-foreground text-tiny hover:text-primary sm:text-xs"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="grid gap-2">
        {transactions.map((t) => (
          <TransactionCard key={t.id} {...t} />
        ))}
      </div>
    </>
  )
}
