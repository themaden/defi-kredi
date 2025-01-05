import { NextApiRequest, NextApiResponse } from 'next';
import { Connection, PublicKey } from '@solana/web3.js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { walletAddress } = req.query;

  if (!walletAddress || typeof walletAddress !== 'string') {
    return res.status(400).json({ error: 'Geçerli bir cüzdan adresi gerekli' });
  }

  try {
    // Solana bağlantısını oluştur
    const connection = new Connection(
      process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
      'confirmed'
    );

    // Cüzdan public key'ini oluştur
    const publicKey = new PublicKey(walletAddress);

    // Cüzdan bakiyesini al
    const balance = await connection.getBalance(publicKey);

    // Token hesaplarını al
    const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, {
      programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
    });

    // Son işlemleri al
    const transactions = await connection.getSignaturesForAddress(publicKey, {
      limit: 10,
    });

    // Verileri döndür
    return res.status(200).json({
      success: true,
      data: {
        address: walletAddress,
        balanceSOL: balance / 1e9, // Lamports'u SOL'a çevir
        tokenAccounts: tokenAccounts.value.length,
        recentTransactions: transactions.map(tx => ({
          signature: tx.signature,
          slot: tx.slot,
          timestamp: tx.blockTime,
        })),
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    
    // PublicKey hatası kontrolü
    if (error instanceof Error && error.message.includes('Invalid public key')) {
      return res.status(400).json({
        success: false,
        error: 'Geçersiz cüzdan adresi'
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Cüzdan verisi alınırken bir hata oluştu',
      message: error instanceof Error ? error.message : 'Bilinmeyen hata'
    });
  }
}