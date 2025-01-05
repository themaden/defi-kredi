'use client';

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditScoreCard } from "@/components/dashboard/credit-score-card";
import { ActivityChart } from "@/components/charts/activity-chart";
import { calculateCreditScore } from "@/lib/utils/score-calculator";
import { CreditScore, WalletActivity } from "@/types";


export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [creditScore, setCreditScore] = useState<CreditScore | null>(null);
  const [activityHistory, setActivityHistory] = useState<WalletActivity['history']>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Hata mesajını tutmak için bir state ekledim

  const analyzeWallet = async () => {
    if (!walletAddress) return;

    setLoading(true);
    setErrorMessage(null); // Hata mesajını sıfırlama
    try {
      // API URL'ini doğrulamak için log ekleyelim
      console.log(`API URL: /api/readWallet?walletAddress=${walletAddress}`);
      
      const response = await fetch(`http://localhost:3000/api/readWallet?walletAddress=${walletAddress}`);
      console.log(`Response Status: ${response.status}`);
      if (!response.ok) {
        throw new Error('Cüzdan verisi alınamadı');
      }
      const walletData = await response.json();
      console.log(walletData); // API'den gelen veriyi logla

      const kaminoMetrics = walletData.kaminoMetrics; // API'den gelen verilerle işlem yap
      const jupiterScore = walletData.jupiterScore;

      const score = calculateCreditScore(kaminoMetrics, jupiterScore);
      setCreditScore(score);

      setActivityHistory([
        { date: '2024-01-01', score: score.score },
        { date: '2024-01-02', score: score.score + 2 },
        { date: '2024-01-03', score: score.score + 5 },
      ]);
    } catch (error: any) {
      // Hata mesajlarını logla
      console.error('Cüzdan analizi başarısız:', error);
      setErrorMessage(error.message); // Hata mesajını kullanıcıya göster
    } finally {
      setLoading(false);
    }
};

const MyComponent = () => {
  const [dynamicData, setDynamicData] = useState<number | null>(null);

  useEffect(() => {
    // sadece istemci tarafında çalışacak
    setDynamicData(Date.now());
  }, []);

  return (
    <div>
      <p>Dynamic Data: {dynamicData}</p>
    </div>
  );
};


  return (
    <main className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Cüzdan adresi girişi */}
        <div className="flex gap-4">
          <Input
            placeholder="Solana cüzdan adresini girin"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <Button 
            onClick={analyzeWallet}
            disabled={!walletAddress || loading}
          >
            {loading ? 'Analiz Ediliyor...' : 'Analiz Et'}
          </Button>
        </div>

        {/* Hata mesajı */}
        {errorMessage && (
          <div className="text-red-500 mt-4">
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Kredi puanı ve aktivite geçmişi */}
        {creditScore && (
          <div className="grid md:grid-cols-2 gap-6">
            <CreditScoreCard creditScore={creditScore} />
            <ActivityChart history={activityHistory} />
          </div>
        )}
      </div>
    </main>
  );
}
