import { Contract } from './contract.model';

export class Odds {
  constructor(  public ID: number,
                public Name: string,
                public ShortName: string,
                public TickerSymbol: string,
                public Image: string,
                public URL: string,
                public Contracts: Contract[],
                public TimeStamp: string,
                public Status: string
  ) {}
}
// <!--<mat-option *ngFor="let option of oddsAll" value="{{oddsAll[option]}}">{{oddsAll[option].Name}}</mat-option>-->
