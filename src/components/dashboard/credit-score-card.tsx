import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditScore } from "@/types"

interface CreditScoreCardProps {
  creditScore: CreditScore;
}

export function CreditScoreCard({ creditScore }: CreditScoreCardProps) {
  const getGradeColor = (grade: CreditScore['grade']) => {
    switch (grade) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-blue-600';
      case 'C': return 'text-yellow-600';
      case 'D': return 'text-orange-600';
      case 'F': return 'text-red-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kredi Puanınız</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="text-6xl font-bold mb-4">
          {creditScore.score.toFixed(0)}
        </div>
        <div className={`text-4xl font-bold ${getGradeColor(creditScore.grade)}`}>
          {creditScore.grade}
        </div>
        <div className="mt-4 space-y-2">
          {creditScore.improvements.map((improvement, index) => (
            <p key={index} className="text-sm text-gray-600">
              • {improvement}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

