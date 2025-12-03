'use client'
import { useQuery } from '@tanstack/react-query'
import { notFound, useParams } from 'next/navigation'
import { Suspense } from 'react'
import { TransactionLoading } from '@/features/transaction'
import { CategoryTransactionList } from '@/features/transaction/components/category-transaction-list'
import { client } from '@/server/lib/orpc.client'
import { AppHeader } from '@/shared/components/layouts/app-header'
import Loading from '../../loading'

export default function CategoryPage() {
  const { id } = useParams() as { id: string }
  const { data, isPending } = useQuery(
    client.category.getById.queryOptions({
      input: id,
    })
  )

  if (isPending) return <Loading />
  if (!data) notFound()

  return (
    <>
      <AppHeader title={data.name} />
      <section className="fade-up-transition grid gap-4">
        <Suspense fallback={<TransactionLoading />}>
          <CategoryTransactionList categoryId={data.id} />
        </Suspense>
      </section>
    </>
  )
}
