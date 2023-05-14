/**
 * THIS IS GENERATED CODE. DO NOT EDIT.
 */
import { createOkxAxiosInstance, OkxAxiosInstance, OkxConfig } from './rest-client-instance';
import {
  Trade,
  Funding,
  Convert,
  Account,
  Subaccount,
  GridTrading,
  RecurringBuy,
  Savings,
  Earn,
  CopyTrading,
  MarketData,
  PublicData,
  TradingData,
  Status,
} from './api-core';

export class OkxRestClient {
  private readonly client: OkxAxiosInstance;
  public readonly trade: Trade;
  public readonly funding: Funding;
  public readonly convert: Convert;
  public readonly account: Account;
  public readonly subaccount: Subaccount;
  public readonly gridTrading: GridTrading;
  public readonly recurringBuy: RecurringBuy;
  public readonly savings: Savings;
  public readonly earn: Earn;
  public readonly copyTrading: CopyTrading;
  public readonly marketData: MarketData;
  public readonly publicData: PublicData;
  public readonly tradingData: TradingData;
  public readonly status: Status;

  constructor(config: OkxConfig) {
    this.client = createOkxAxiosInstance(config);
    this.trade = new Trade(this.client);
    this.funding = new Funding(this.client);
    this.convert = new Convert(this.client);
    this.account = new Account(this.client);
    this.subaccount = new Subaccount(this.client);
    this.gridTrading = new GridTrading(this.client);
    this.recurringBuy = new RecurringBuy(this.client);
    this.savings = new Savings(this.client);
    this.earn = new Earn(this.client);
    this.copyTrading = new CopyTrading(this.client);
    this.marketData = new MarketData(this.client);
    this.publicData = new PublicData(this.client);
    this.tradingData = new TradingData(this.client);
    this.status = new Status(this.client);
  } 
}
