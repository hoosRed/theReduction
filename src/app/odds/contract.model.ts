export class Contract {
  constructor(  public ID: number,
                public DateEnd: string,
                public Image: string,
                public URL: string,
                public Name: string,
                public LongName: string,
                public ShortName: string,
                public TickerSymbol: string,
                public Status: string,
                public LastTradePrice: number,
                public BestBuyYesCost: number,
                public BestBuyNoCost: number,
                public BestSellYesCost: number,
                public BestSellNoCost: number,
                public LastClosePrice: number
  ) {}
}
