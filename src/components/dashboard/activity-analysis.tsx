import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ActivityData {
  lending: number
  liquidity: number
  leverage: number
  swaps: number
}

interface ActivityAnalysisProps {
  data: ActivityData
}

export function ActivityAnalysis({ data }: ActivityAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktivite Analizi</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span>Borç Verme</span>
            <span>{data.lending}%</span>
          </div>
          <Progress value={data.lending} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Likidite</span>
            <span>{data.liquidity}%</span>
          </div>
          <Progress value={data.liquidity} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Kaldıraç</span>
            <span>{data.leverage}%</span>
          </div>
          <Progress value={data.leverage} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Takas İşlemleri</span>
            <span>{data.swaps}%</span>
          </div>
          <Progress value={data.swaps} />
        </div>
      </CardContent>
    </Card>
  )
}

