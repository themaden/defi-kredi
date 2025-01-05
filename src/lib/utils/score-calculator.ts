import { ProtocolMetrics, CreditScore } from '@/types';

export function calculateCreditScore(
  kaminoMetrics: ProtocolMetrics,
  jupiterScore: number
): CreditScore {
  // Ağırlıklı ortalama hesaplama
  const weights = {
    lending: 0.3,
    liquidity: 0.25,
    leverage: 0.25,
    swaps: 0.2
  };

  // Ağırlıklı skor hesaplama
  const kaminoScore =
    kaminoMetrics.lending * weights.lending +
    kaminoMetrics.liquidity * weights.liquidity +
    kaminoMetrics.leverage * weights.leverage +
    jupiterScore * weights.swaps;

  // Skoru 0-100 arasında normalize et
  const normalizedScore = Math.min(Math.max(kaminoScore, 0), 100);

  // Puanı harf notuna çevir
  let grade: CreditScore['grade'];
  if (normalizedScore >= 90) grade = 'A';
  else if (normalizedScore >= 80) grade = 'B';
  else if (normalizedScore >= 70) grade = 'C';
  else if (normalizedScore >= 60) grade = 'D';
  else grade = 'F';

  // İyileştirme önerilerini oluştur
  const improvements: string[] = [];
  if (kaminoMetrics.lending < 70) {
    improvements.push('Borç verme aktivitelerinizi artırın');
  }
  if (kaminoMetrics.liquidity < 70) {
    improvements.push('Likidite havuzlarına katılım sağlayın');
  }
  if (kaminoMetrics.leverage < 70) {
    improvements.push('Kaldıraç kullanımınızı gözden geçirin');
  }
  if (jupiterScore < 70) {
    improvements.push('Düzenli takas işlemleri yapın');
  }

  return {
    score: normalizedScore,
    grade,
    improvements
  };
}
