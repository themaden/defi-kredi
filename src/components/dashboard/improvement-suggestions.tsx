import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ImprovementSuggestionsProps {
  suggestions: string[]
}

export function ImprovementSuggestions({ suggestions }: ImprovementSuggestionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>İyileştirme Önerileri</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

