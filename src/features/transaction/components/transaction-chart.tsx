'use client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { ChevronLeft, LoaderIcon, TrendingDown, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { Cell, Pie, PieChart } from 'recharts'
import type { TransactionType } from '@/server/db/schema'
import { client } from '@/server/lib/orpc.client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/components/ui/chart'
import { Separator } from '@/shared/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs'

const chartColors = [
  'var(--color-chart-1)',
  'var(--color-chart-2)',
  'var(--color-chart-3)',
  'var(--color-chart-4)',
  'var(--color-chart-5)',
]

const chartConfig = {
  total: { label: 'مبلغ', color: 'var(--chart-1)' },
} satisfies ChartConfig

const ChartView = ({ type = 'expense' }: { type?: TransactionType }) => {
  const { data: chartData } = useSuspenseQuery(
    client.transaction.byCategory.queryOptions({ input: type })
  )
  return (
    <>
      <ChartContainer config={chartConfig}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={50}
          >
            {chartData.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[index % chartColors.length]}
              />
            ))}
          </Pie>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
      <div className="mt-4 space-y-2">
        {chartData.map((cd) => (
          <Link
            key={cd.icon}
            href={`/category/${cd.id}`}
            className="-mx-4 flex items-center p-1"
          >
            <p className="flex grow items-center gap-2 text-sm">
              <span className="grid place-items-center rounded-full bg-primary/10 p-2">
                {cd.icon}
              </span>
              <span>{cd.category}</span>
            </p>
            <p className="flex items-center gap-0.5 text-sm">
              {cd.total.toLocaleString('fa-IR')} تومان
              <ChevronLeft className="size-5 text-muted-foreground" />
            </p>
          </Link>
        ))}
      </div>
    </>
  )
}

export function TransactionChart() {
  const [tType, setTType] = useState<TransactionType>('expense')
  return (
    <Fragment>
      <Tabs
        defaultValue={tType}
        onValueChange={(e) => setTType(e as TransactionType)}
      >
        <TabsList className="mt-4 flex w-full items-center justify-center border-0 bg-transparent">
          <TabsTrigger value="expense" className="h-10 flex-0 px-8">
            <TrendingDown />
            هزینه ها
          </TabsTrigger>
          <div className="mx-2 h-7">
            <Separator orientation="vertical" />
          </div>
          <TabsTrigger value="income" className="h-10 flex-0 px-8">
            <TrendingUp />
            درآمد ها
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Card className="mt-2 mb-4 shadow-none">
        <CardHeader>
          <CardTitle>گزارش دسته‌بندی‌ها</CardTitle>
          <CardDescription>خلاصه خرج‌ها بر اساس دسته‌بندی</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <div className="grid h-[170px] place-items-center">
                <LoaderIcon className="size-5 animate-spin" />
              </div>
            }
          >
            <ChartView type={tType} />
          </Suspense>
        </CardContent>
      </Card>
    </Fragment>
  )
}
