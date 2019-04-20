export interface Exchange {
  success: boolean;
  timestamp: string;
  base: string;
  date: string;
  exchangeInvested: {
    [index: string]: number;
  },
  rates: {
    [index: string]: number;
  };
}
