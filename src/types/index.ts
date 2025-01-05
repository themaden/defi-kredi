export interface WalletActivity {
    address: string;
    kaminoScore: number;
    jupiterScore: number;
    totalScore: number;
    activities: {
      lending: number;
      liquidity: number;
      leverage: number;
      swaps: number;
    };
    history: {
      date: string;
      score: number;
    }[];
  }
  
  export interface ProtocolMetrics {
    lending: number;
    liquidity: number;
    leverage: number;
    swaps: number;
  }
  
  export interface CreditScore {
    score: number;
    grade: 'A' | 'B' | 'C' | 'D' | 'F';
    improvements: string[];
  }
  
  export interface ProtocolMetrics {
    lending: number;
    liquidity: number;
    leverage: number;
    swaps: number;
  }
  
  interface KaminoPosition {
    borrowedAmount: number;
    suppliedAmount: number;
    liquidityAmount: number;
    leverage: number;
    swapCount: number;
  }
  export interface ProtocolMetrics {
    lending: number;
    liquidity: number;
    leverage: number;
    swaps: number;
  }
  
  export interface SwapHistoryItem {
    inputMint: string;
    outputMint: string;
    inAmount: number;
    outAmount: number;
    timestamp: number;
  }
  
  export interface KaminoUserPosition {
    depositBalance: number;
    borrowBalance: number;
    collateralAmount: number;
    leverageRatio: number;
    tradingVolume: number;
  }
  
  export interface ProtocolMetrics {
    lending: number;
    liquidity: number;
    leverage: number;
    swaps: number;
  }
  
  export interface SwapHistoryItem {
    inputMint: string;
    outputMint: string;
    inAmount: number;
    outAmount: number;
    timestamp: number;
  }
  
  export interface KaminoUserPosition {
    depositBalance: number;
    borrowBalance: number;
    collateralAmount: number;
    leverageRatio: number;
    tradingVolume: number;
  }
  
  export interface ProtocolMetrics {
    lending: number;
    liquidity: number;
    leverage: number;
    swaps: number;
  }
  
  export interface SwapHistoryItem {
    inputMint: string;
    outputMint: string;
    inAmount: number;
    outAmount: number;
    timestamp: number;
  }
  
  export interface KaminoUserPosition {
    depositBalance: number;
    borrowBalance: number;
    collateralAmount: number;
    leverageRatio: number;
    tradingVolume: number;
  }
  
  export interface ProtocolMetrics {
    lending: number;
    liquidity: number;
    leverage: number;
    swaps: number;
  }
  
  export interface SwapHistoryItem {
    inputMint: string;
    outputMint: string;
    inAmount: number;
    outAmount: number;
    timestamp: number;
  }
  
  export interface KaminoUserPosition {
    depositBalance: number;
    borrowBalance: number;
    collateralAmount: number;
    leverageRatio: number;
    tradingVolume: number;
  }
  
  