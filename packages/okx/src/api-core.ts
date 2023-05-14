/**
 * THIS IS GENERATED CODE. DO NOT EDIT.
 */
import { OkxAxiosInstance } from './rest-client-instance';
import { 
  trade,
  funding,
  convert,
  account,
  subaccount,
  gridTrading,
  recurringBuy,
  savings,
  earn,
  copyTrading,
  marketData,
  publicData,
  tradingData,
  status,
} from './api-core-types'

export class Trade {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Place order**
   * 
   * You can place an order only if you have sufficient funds.
   * For leading contracts, this endpoint supports placement, but can&#39;t close positions.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-order
   */
  async placeOrder(args: trade.PlaceOrderRequestParams) {
    return this.client.post<trade.PlaceOrderResponse>('/api/v5/trade/order', args)
      .then(res => res.data);
  }

  /*!
   * **Place multiple orders**
   * 
   * Place orders in batches. Maximum 20 orders can be placed per request. Request parameters should be passed in the form of an array.
   * For leading contracts, this endpoint supports placement, but can&#39;t close positions.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-multiple-orders
   */
  async placeMultipleOrders(args: trade.PlaceMultipleOrdersRequestParams) {
    return this.client.post<trade.PlaceMultipleOrdersResponse>('/api/v5/trade/batch-orders', args)
      .then(res => res.data);
  }

  /*!
   * **Cancel order**
   * 
   * Cancel an incomplete order.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-order
   */
  async cancelOrder(args: trade.CancelOrderRequestParams) {
    return this.client.post<trade.CancelOrderResponse>('/api/v5/trade/cancel-order', args)
      .then(res => res.data);
  }

  /*!
   * **Cancel multiple orders**
   * 
   * Cancel incomplete orders in batches. Maximum 20 orders can be canceled per request. Request parameters should be passed in the form of an array.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-multiple-orders
   */
  async cancelMultipleOrders(args: trade.CancelMultipleOrdersRequestParams) {
    return this.client.post<trade.CancelMultipleOrdersResponse>('/api/v5/trade/cancel-batch-orders', args)
      .then(res => res.data);
  }

  /*!
   * **Amend order**
   * 
   * Amend an incomplete order.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-amend-order
   */
  async amendOrder(args: trade.AmendOrderRequestParams) {
    return this.client.post<trade.AmendOrderResponse>('/api/v5/trade/amend-order', args)
      .then(res => res.data);
  }

  /*!
   * **Amend multiple orders**
   * 
   * Amend incomplete orders in batches. Maximum 20 orders can be amended per request. Request parameters should be passed in the form of an array.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-amend-multiple-orders
   */
  async amendMultipleOrders(args: trade.AmendMultipleOrdersRequestParams) {
    return this.client.post<trade.AmendMultipleOrdersResponse>('/api/v5/trade/amend-batch-orders', args)
      .then(res => res.data);
  }

  /*!
   * **Close positions**
   * 
   * Close the position of an instrument via a market order.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-close-positions
   */
  async closePositions(args: trade.ClosePositionsRequestParams) {
    return this.client.post<trade.ClosePositionsResponse>('/api/v5/trade/close-position', args)
      .then(res => res.data);
  }

  /*!
   * **Get order details**
   * 
   * Retrieve order details.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-details
   */
  async getOrderDetails(args: trade.GetOrderDetailsRequestParams) {
    return this.client.get<trade.GetOrderDetailsResponse>('/api/v5/trade/order', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get order List**
   * 
   * Retrieve all incomplete orders under the current account.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-list
   */
  async getOrderList(args: trade.GetOrderListRequestParams) {
    return this.client.get<trade.GetOrderListResponse>('/api/v5/trade/orders-pending', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get order history (last 7 days)**
   * 
   * Retrieve the completed order data for the last 7 days, including those placed 7 days ago but completed for the last 7 days.
   * The incomplete orders that have been canceled are only reserved for 2 hours.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-history-last-7-days
   */
  async getOrderHistoryLast7Days(args: trade.GetOrderHistoryLast7DaysRequestParams) {
    return this.client.get<trade.GetOrderHistoryLast7DaysResponse>('/api/v5/trade/orders-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get order history (last 3 months)**
   * 
   * Retrieve the completed order data for the last 3 months, including those placed 3 months ago but completed for the last 3 months.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-history-last-3-months
   */
  async getOrderHistoryLast3Months(args: trade.GetOrderHistoryLast3MonthsRequestParams) {
    return this.client.get<trade.GetOrderHistoryLast3MonthsResponse>('/api/v5/trade/orders-history-archive', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get transaction details (last 3 days）**
   * 
   * Retrieve recently-filled transaction details in the last 3 day.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-transaction-details-last-3-days
   */
  async getTransactionDetailsLast3Days(args: trade.GetTransactionDetailsLast3DaysRequestParams) {
    return this.client.get<trade.GetTransactionDetailsLast3DaysResponse>('/api/v5/trade/fills', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get transaction details (last 3 months)**
   * 
   * Retrieve recently-filled transaction details in the last 3 months.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-transaction-details-last-3-months
   */
  async getTransactionDetailsLast3Months(args: trade.GetTransactionDetailsLast3MonthsRequestParams) {
    return this.client.get<trade.GetTransactionDetailsLast3MonthsResponse>('/api/v5/trade/fills-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Place algo order**
   * 
   * The algo order includes `trigger` order, `oco` order, `conditional` order,`iceberg` order, `twap` order and trailing order.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-algo-order
   */
  async placeAlgoOrder(args: trade.PlaceAlgoOrderRequestParams) {
    return this.client.post<trade.PlaceAlgoOrderResponse>('/api/v5/trade/order-algo', args)
      .then(res => res.data);
  }

  /*!
   * **Cancel algo order**
   * 
   * Cancel unfilled algo orders (not including Iceberg order, TWAP order, Trailing Stop order). A maximum of 10 orders can be canceled per request. Request parameters should be passed in the form of an array.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-algo-order
   */
  async cancelAlgoOrder(args: trade.CancelAlgoOrderRequestParams) {
    return this.client.post<trade.CancelAlgoOrderResponse>('/api/v5/trade/cancel-algos', args)
      .then(res => res.data);
  }

  /*!
   * **Amend algo order**
   * 
   * Amend unfilled algo orders (Support stop order only,not including Move_order_stop order, Trigger order, Iceberg order, TWAP order, Trailing Stop order).
   * Only applicable to Futures and Perpetual swap.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-amend-algo-order
   */
  async amendAlgoOrder(args: trade.AmendAlgoOrderRequestParams) {
    return this.client.post<trade.AmendAlgoOrderResponse>('/api/v5/trade/amend-algos', args)
      .then(res => res.data);
  }

  /*!
   * **Cancel advance algo order**
   * 
   * Cancel unfilled algo orders (including Iceberg order, TWAP order, Trailing Stop order). A maximum of 10 orders can be canceled per request. Request parameters should be passed in the form of an array.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-advance-algo-order
   */
  async cancelAdvanceAlgoOrder(args: trade.CancelAdvanceAlgoOrderRequestParams) {
    return this.client.post<trade.CancelAdvanceAlgoOrderResponse>('/api/v5/trade/cancel-advance-algos', args)
      .then(res => res.data);
  }

  /*!
   * **Get algo order details**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-algo-order-details
   */
  async getAlgoOrderDetails(args: trade.GetAlgoOrderDetailsRequestParams) {
    return this.client.get<trade.GetAlgoOrderDetailsResponse>('/api/v5/trade/order-algo', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get algo order list**
   * 
   * Retrieve a list of untriggered Algo orders under the current account.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-algo-order-list
   */
  async getAlgoOrderList(args: trade.GetAlgoOrderListRequestParams) {
    return this.client.get<trade.GetAlgoOrderListResponse>('/api/v5/trade/orders-algo-pending', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get algo order history**
   * 
   * Retrieve a list of all algo orders under the current account in the last 3 months.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-algo-order-history
   */
  async getAlgoOrderHistory(args: trade.GetAlgoOrderHistoryRequestParams) {
    return this.client.get<trade.GetAlgoOrderHistoryResponse>('/api/v5/trade/orders-algo-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get easy convert currency list**
   * 
   * Get list of small convertibles and mainstream currencies. Only applicable to the crypto balance less than $10.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-easy-convert-currency-list
   */
  async getEasyConvertCurrencyList(args: trade.GetEasyConvertCurrencyListRequestParams) {
    return this.client.get<trade.GetEasyConvertCurrencyListResponse>('/api/v5/trade/easy-convert-currency-list', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Place easy convert**
   * 
   * Convert small currencies to mainstream currencies. Only applicable to the crypto balance less than $10.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-easy-convert
   */
  async placeEasyConvert(args: trade.PlaceEasyConvertRequestParams) {
    return this.client.post<trade.PlaceEasyConvertResponse>('/api/v5/trade/easy-convert', args)
      .then(res => res.data);
  }

  /*!
   * **Get easy convert history**
   * 
   * Get the history and status of easy convert trades.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-easy-convert-history
   */
  async getEasyConvertHistory(args: trade.GetEasyConvertHistoryRequestParams) {
    return this.client.get<trade.GetEasyConvertHistoryResponse>('/api/v5/trade/easy-convert-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get one-click repay currency list**
   * 
   * Get list of debt currency data and repay currencies. Debt currencies include both cross and isolated debts.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-one-click-repay-currency-list
   */
  async getOneClickRepayCurrencyList(args: trade.GetOneClickRepayCurrencyListRequestParams) {
    return this.client.get<trade.GetOneClickRepayCurrencyListResponse>('/api/v5/trade/one-click-repay-currency-list', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Trade one-click repay**
   * 
   * Trade one-click repay to repay cross debts. Isolated debts are not applicable. The maximum repayment amount is based on the remaining available balance of funding and trading accounts.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-trade-one-click-repay
   */
  async tradeOneClickRepay(args: trade.TradeOneClickRepayRequestParams) {
    return this.client.post<trade.TradeOneClickRepayResponse>('/api/v5/trade/one-click-repay', args)
      .then(res => res.data);
  }

  /*!
   * **Get one-click repay history**
   * 
   * Get the history and status of one-click repay trades.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-one-click-repay-history
   */
  async getOneClickRepayHistory(args: trade.GetOneClickRepayHistoryRequestParams) {
    return this.client.get<trade.GetOneClickRepayHistoryResponse>('/api/v5/trade/one-click-repay-history', {
      params: args
    }).then(res => res.data);
  }

}
export class Funding {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get currencies**
   * 
   * Retrieve a list of all currencies.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-currencies
   */
  async getCurrencies(args: funding.GetCurrenciesRequestParams) {
    return this.client.get<funding.GetCurrenciesResponse>('/api/v5/asset/currencies', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get balance**
   * 
   * Retrieve the funding account balances of all the assets and the amount that is available or on hold.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-balance
   */
  async getBalance(args: funding.GetBalanceRequestParams) {
    return this.client.get<funding.GetBalanceResponse>('/api/v5/asset/balances', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get non-tradable assets**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-non-tradable-assets
   */
  async getNonTradableAssets(args: funding.GetNonTradableAssetsRequestParams) {
    return this.client.get<funding.GetNonTradableAssetsResponse>('/api/v5/asset/non-tradable-assets', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get account asset valuation**
   * 
   * View account asset valuation
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-account-asset-valuation
   */
  async getAccountAssetValuation(args: funding.GetAccountAssetValuationRequestParams) {
    return this.client.get<funding.GetAccountAssetValuationResponse>('/api/v5/asset/asset-valuation', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Funds transfer**
   * 
   * Only API keys with `Trade` privilege can call this endpoint.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-funds-transfer
   */
  async fundsTransfer(args: funding.FundsTransferRequestParams) {
    return this.client.post<funding.FundsTransferResponse>('/api/v5/asset/transfer', args)
      .then(res => res.data);
  }

  /*!
   * **Get funds transfer state**
   * 
   * Retrieve the transfer state data of the last 2 weeks.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-funds-transfer-state
   */
  async getFundsTransferState(args: funding.GetFundsTransferStateRequestParams) {
    return this.client.get<funding.GetFundsTransferStateResponse>('/api/v5/asset/transfer-state', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Asset bills details**
   * 
   * Query the billing record. You can get the latest 1 month historical data.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-asset-bills-details
   */
  async assetBillsDetails(args: funding.AssetBillsDetailsRequestParams) {
    return this.client.get<funding.AssetBillsDetailsResponse>('/api/v5/asset/bills', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Lightning deposits**
   * 
   * Users can create up to 10,000 different invoices within 24 hours.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-lightning-deposits
   */
  async lightningDeposits(args: funding.LightningDepositsRequestParams) {
    return this.client.get<funding.LightningDepositsResponse>('/api/v5/asset/deposit-lightning', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get deposit address**
   * 
   * Retrieve the deposit addresses of currencies, including previously-used addresses.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-deposit-address
   */
  async getDepositAddress(args: funding.GetDepositAddressRequestParams) {
    return this.client.get<funding.GetDepositAddressResponse>('/api/v5/asset/deposit-address', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get deposit history**
   * 
   * Retrieve the deposit records according to the currency, deposit status, and time range in reverse chronological order. The 100 most recent records are returned by default.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-deposit-history
   */
  async getDepositHistory(args: funding.GetDepositHistoryRequestParams) {
    return this.client.get<funding.GetDepositHistoryResponse>('/api/v5/asset/deposit-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Withdrawal**
   * 
   * Withdrawal of tokens. Common sub-account does not support withdrawal.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-withdrawal
   */
  async withdrawal(args: funding.WithdrawalRequestParams) {
    return this.client.post<funding.WithdrawalResponse>('/api/v5/asset/withdrawal', args)
      .then(res => res.data);
  }

  /*!
   * **Lightning withdrawals**
   * 
   * The maximum withdrawal amount is 0.1 BTC per request, and 1 BTC in 24 hours. The minimum withdrawal amount is approximately 0.000001 BTC. Sub-account does not support withdrawal.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-lightning-withdrawals
   */
  async lightningWithdrawals(args: funding.LightningWithdrawalsRequestParams) {
    return this.client.post<funding.LightningWithdrawalsResponse>('/api/v5/asset/withdrawal-lightning', args)
      .then(res => res.data);
  }

  /*!
   * **Cancel withdrawal**
   * 
   * You can cancel normal withdrawal requests, but you cannot cancel withdrawal requests on Lightning.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-cancel-withdrawal
   */
  async cancelWithdrawal(args: funding.CancelWithdrawalRequestParams) {
    return this.client.post<funding.CancelWithdrawalResponse>('/api/v5/asset/cancel-withdrawal', args)
      .then(res => res.data);
  }

  /*!
   * **Get withdrawal history**
   * 
   * Retrieve the withdrawal records according to the currency, withdrawal status, and time range in reverse chronological order. The 100 most recent records are returned by default.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-withdrawal-history
   */
  async getWithdrawalHistory(args: funding.GetWithdrawalHistoryRequestParams) {
    return this.client.get<funding.GetWithdrawalHistoryResponse>('/api/v5/asset/withdrawal-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get deposit withdraw status**
   * 
   * Retrieve deposit&#39;s and withdrawal&#39;s detailed status and estimated complete time.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-deposit-withdraw-status
   */
  async getDepositWithdrawStatus(args: funding.GetDepositWithdrawStatusRequestParams) {
    return this.client.get<funding.GetDepositWithdrawStatusResponse>('/api/v5/asset/deposit-withdraw-status', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Small assets convert**
   * 
   * Convert small assets in funding account to `OKB`. Only 5 convert is allowed within 24 hours.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-small-assets-convert
   */
  async smallAssetsConvert(args: funding.SmallAssetsConvertRequestParams) {
    return this.client.post<funding.SmallAssetsConvertResponse>('/api/v5/asset/convert-dust-assets', args)
      .then(res => res.data);
  }

}
export class Convert {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get convert currencies**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-get-convert-currencies
   */
  async getConvertCurrencies(args: convert.GetConvertCurrenciesRequestParams) {
    return this.client.get<convert.GetConvertCurrenciesResponse>('/api/v5/asset/convert/currencies', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get convert currency pair**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-get-convert-currency-pair
   */
  async getConvertCurrencyPair(args: convert.GetConvertCurrencyPairRequestParams) {
    return this.client.get<convert.GetConvertCurrencyPairResponse>('/api/v5/asset/convert/currency-pair', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Estimate quote**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-estimate-quote
   */
  async estimateQuote(args: convert.EstimateQuoteRequestParams) {
    return this.client.post<convert.EstimateQuoteResponse>('/api/v5/asset/convert/estimate-quote', args)
      .then(res => res.data);
  }

  /*!
   * **Convert trade**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-convert-trade
   */
  async convertTrade(args: convert.ConvertTradeRequestParams) {
    return this.client.post<convert.ConvertTradeResponse>('/api/v5/asset/convert/trade', args)
      .then(res => res.data);
  }

  /*!
   * **Get convert history**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-get-convert-history
   */
  async getConvertHistory(args: convert.GetConvertHistoryRequestParams) {
    return this.client.get<convert.GetConvertHistoryResponse>('/api/v5/asset/convert/history', {
      params: args
    }).then(res => res.data);
  }

}
export class Account {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get balance**
   * 
   * Retrieve a list of assets (with non-zero balance), remaining balance, and available amount in the trading account.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-balance
   */
  async getBalance(args: account.GetBalanceRequestParams) {
    return this.client.get<account.GetBalanceResponse>('/api/v5/account/balance', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get positions**
   * 
   * Retrieve information on your positions. When the account is in `net` mode, `net` positions will be displayed, and when the account is in `long/short` mode, `long` or `short` positions will be displayed. Return in reverse chronological order using ctime.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-positions
   */
  async getPositions(args: account.GetPositionsRequestParams) {
    return this.client.get<account.GetPositionsResponse>('/api/v5/account/positions', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get positions history**
   * 
   * Retrieve the updated position data for the last 3 months. Return in reverse chronological order using utime.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-positions-history
   */
  async getPositionsHistory(args: account.GetPositionsHistoryRequestParams) {
    return this.client.get<account.GetPositionsHistoryResponse>('/api/v5/account/positions-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get account and position risk**
   * 
   * Get account and position risk
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-account-and-position-risk
   */
  async getAccountAndPositionRisk(args: account.GetAccountAndPositionRiskRequestParams) {
    return this.client.get<account.GetAccountAndPositionRiskResponse>('/api/v5/account/account-position-risk', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get bills details (last 7 days)**
   * 
   * Retrieve the bills of the account. The bill refers to all transaction records that result in changing the balance of an account. Pagination is supported, and the response is sorted with the most recent first. This endpoint can retrieve data from the last 7 days.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-bills-details-last-7-days
   */
  async getBillsDetailsLast7Days(args: account.GetBillsDetailsLast7DaysRequestParams) {
    return this.client.get<account.GetBillsDetailsLast7DaysResponse>('/api/v5/account/bills', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get bills details (last 3 months)**
   * 
   * Retrieve the account’s bills. The bill refers to all transaction records that result in changing the balance of an account. Pagination is supported, and the response is sorted with most recent first. This endpoint can retrieve data from the last 3 months.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-bills-details-last-3-months
   */
  async getBillsDetailsLast3Months(args: account.GetBillsDetailsLast3MonthsRequestParams) {
    return this.client.get<account.GetBillsDetailsLast3MonthsResponse>('/api/v5/account/bills-archive', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get account configuration**
   * 
   * Retrieve current account configuration.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-account-configuration
   */
  async getAccountConfiguration(args: account.GetAccountConfigurationRequestParams) {
    return this.client.get<account.GetAccountConfigurationResponse>('/api/v5/account/config', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Set position mode**
   * 
   * Single-currency mode and Multi-currency mode: `FUTURES` and `SWAP` support both `long/short` mode and `net` mode. In `net` mode, users can only have positions in one direction; In `long/short` mode, users can hold positions in long and short directions.
   * Portfolio margin mode: `FUTURES` and `SWAP` only support `net` mode
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-position-mode
   */
  async setPositionMode(args: account.SetPositionModeRequestParams) {
    return this.client.post<account.SetPositionModeResponse>('/api/v5/account/set-position-mode', args)
      .then(res => res.data);
  }

  /*!
   * **Set leverage**
   * 
   * There are 9 different scenarios for leverage setting:
   * 
   * 1. Set leverage for `MARGIN` instruments under `isolated-margin` trade mode at pairs level.
   * 2. Set leverage for `MARGIN` instruments under `cross-margin` trade mode and Single-currency margin account mode at pairs level.
   * 3. Set leverage for `MARGIN` instruments under `cross-margin` trade mode and Multi-currency margin at currency level.
   * 4. Set leverage for `FUTURES` instruments under `cross-margin` trade mode at underlying level.
   * 5. Set leverage for `FUTURES` instruments under `isolated-margin` trade mode and buy/sell position mode at contract level.
   * 6. Set leverage for `FUTURES` instruments under `isolated-margin` trade mode and long/short position mode at contract and position side level.
   * 7. Set leverage for `SWAP` instruments under `cross-margin` trade at contract level.
   * 8. Set leverage for `SWAP` instruments under `isolated-margin` trade mode and buy/sell position mode at contract level.
   * 9. Set leverage for `SWAP` instruments under `isolated-margin` trade mode and long/short position mode at contract and position side level.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-leverage
   */
  async setLeverage(args: account.SetLeverageRequestParams) {
    return this.client.post<account.SetLeverageResponse>('/api/v5/account/set-leverage', args)
      .then(res => res.data);
  }

  /*!
   * **Get maximum buy/sell amount or open amount**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-maximum-buy-sell-amount-or-open-amount
   */
  async getMaximumBuySellAmountOrOpenAmount(args: account.GetMaximumBuySellAmountOrOpenAmountRequestParams) {
    return this.client.get<account.GetMaximumBuySellAmountOrOpenAmountResponse>('/api/v5/account/max-size', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get maximum available tradable amount**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-maximum-available-tradable-amount
   */
  async getMaximumAvailableTradableAmount(args: account.GetMaximumAvailableTradableAmountRequestParams) {
    return this.client.get<account.GetMaximumAvailableTradableAmountResponse>('/api/v5/account/max-avail-size', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Increase/decrease margin**
   * 
   * Increase or decrease the margin of the isolated position. Margin reduction may result in the change of the actual leverage.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-increase-decrease-margin
   */
  async increaseDecreaseMargin(args: account.IncreaseDecreaseMarginRequestParams) {
    return this.client.post<account.IncreaseDecreaseMarginResponse>('/api/v5/account/position/margin-balance', args)
      .then(res => res.data);
  }

  /*!
   * **Get leverage**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-leverage
   */
  async getLeverage(args: account.GetLeverageRequestParams) {
    return this.client.get<account.GetLeverageResponse>('/api/v5/account/leverage-info', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get the maximum loan of instrument**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-the-maximum-loan-of-instrument
   */
  async getTheMaximumLoanOfInstrument(args: account.GetTheMaximumLoanOfInstrumentRequestParams) {
    return this.client.get<account.GetTheMaximumLoanOfInstrumentResponse>('/api/v5/account/max-loan', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get fee rates**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-fee-rates
   */
  async getFeeRates(args: account.GetFeeRatesRequestParams) {
    return this.client.get<account.GetFeeRatesResponse>('/api/v5/account/trade-fee', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get interest accrued data**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-interest-accrued-data
   */
  async getInterestAccruedData(args: account.GetInterestAccruedDataRequestParams) {
    return this.client.get<account.GetInterestAccruedDataResponse>('/api/v5/account/interest-accrued', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get interest rate**
   * 
   * Get the user&#39;s current leveraged currency borrowing interest rate
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-interest-rate
   */
  async getInterestRate(args: account.GetInterestRateRequestParams) {
    return this.client.get<account.GetInterestRateResponse>('/api/v5/account/interest-rate', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Set greeks (PA/BS)**
   * 
   * Set the display type of Greeks.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-greeks-pa-bs
   */
  async setGreeksPaBs(args: account.SetGreeksPaBsRequestParams) {
    return this.client.post<account.SetGreeksPaBsResponse>('/api/v5/account/set-greeks', args)
      .then(res => res.data);
  }

  /*!
   * **Isolated margin trading settings**
   * 
   * You can set the currency margin and futures/perpetual Isolated margin trading mode
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-isolated-margin-trading-settings
   */
  async isolatedMarginTradingSettings(args: account.IsolatedMarginTradingSettingsRequestParams) {
    return this.client.post<account.IsolatedMarginTradingSettingsResponse>('/api/v5/account/set-isolated-mode', args)
      .then(res => res.data);
  }

  /*!
   * **Get maximum withdrawals**
   * 
   * Retrieve the maximum transferable amount from trading account to funding account. If no currency is specified, the transferable amount of all owned currencies will be returned.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-maximum-withdrawals
   */
  async getMaximumWithdrawals(args: account.GetMaximumWithdrawalsRequestParams) {
    return this.client.get<account.GetMaximumWithdrawalsResponse>('/api/v5/account/max-withdrawal', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get account risk state**
   * 
   * Only applicable to Portfolio margin account
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-account-risk-state
   */
  async getAccountRiskState(args: account.GetAccountRiskStateRequestParams) {
    return this.client.get<account.GetAccountRiskStateResponse>('/api/v5/account/risk-state', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Manual borrow and repay in Quick Margin Mode**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-manual-borrow-and-repay-in-quick-margin-mode
   */
  async manualBorrowAndRepayInQuickMarginMode(args: account.ManualBorrowAndRepayInQuickMarginModeRequestParams) {
    return this.client.post<account.ManualBorrowAndRepayInQuickMarginModeResponse>('/api/v5/account/quick-margin-borrow-repay', args)
      .then(res => res.data);
  }

  /*!
   * **Get borrow and repay history in Quick Margin Mode**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-borrow-and-repay-history-in-quick-margin-mode
   */
  async getBorrowAndRepayHistoryInQuickMarginMode(args: account.GetBorrowAndRepayHistoryInQuickMarginModeRequestParams) {
    return this.client.get<account.GetBorrowAndRepayHistoryInQuickMarginModeResponse>('/api/v5/account/quick-margin-borrow-repay-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **VIP loans borrow and repay**
   * 
   * Maximum number of borrowing orders for a single currency is 20
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-vip-loans-borrow-and-repay
   */
  async vipLoansBorrowAndRepay(args: account.VipLoansBorrowAndRepayRequestParams) {
    return this.client.post<account.VipLoansBorrowAndRepayResponse>('/api/v5/account/borrow-repay', args)
      .then(res => res.data);
  }

  /*!
   * **Get borrow and repay history for VIP loans**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-borrow-and-repay-history-for-vip-loans
   */
  async getBorrowAndRepayHistoryForVipLoans(args: account.GetBorrowAndRepayHistoryForVipLoansRequestParams) {
    return this.client.get<account.GetBorrowAndRepayHistoryForVipLoansResponse>('/api/v5/account/borrow-repay-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get VIP interest accrued data**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-interest-accrued-data
   */
  async getVipInterestAccruedData(args: account.GetVipInterestAccruedDataRequestParams) {
    return this.client.get<account.GetVipInterestAccruedDataResponse>('/api/v5/account/vip-interest-accrued', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get VIP interest deducted data**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-interest-deducted-data
   */
  async getVipInterestDeductedData(args: account.GetVipInterestDeductedDataRequestParams) {
    return this.client.get<account.GetVipInterestDeductedDataResponse>('/api/v5/account/vip-interest-deducted', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get VIP loan order list**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-loan-order-list
   */
  async getVipLoanOrderList(args: account.GetVipLoanOrderListRequestParams) {
    return this.client.get<account.GetVipLoanOrderListResponse>('/api/v5/account/vip-loan-order-list', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get VIP loan order detail**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-loan-order-detail
   */
  async getVipLoanOrderDetail(args: account.GetVipLoanOrderDetailRequestParams) {
    return this.client.get<account.GetVipLoanOrderDetailResponse>('/api/v5/account/vip-loan-order-detail', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get borrow interest and limit**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-borrow-interest-and-limit
   */
  async getBorrowInterestAndLimit(args: account.GetBorrowInterestAndLimitRequestParams) {
    return this.client.get<account.GetBorrowInterestAndLimitResponse>('/api/v5/account/interest-limits', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Position builder**
   * 
   * Calculates portfolio margin information for simulated position or current position of the user.
   * You can add up to 200 simulated positions in one request.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-position-builder
   */
  async positionBuilder(args: account.PositionBuilderRequestParams) {
    return this.client.post<account.PositionBuilderResponse>('/api/v5/account/simulated_margin', args)
      .then(res => res.data);
  }

  /*!
   * **Get Greeks**
   * 
   * Retrieve a greeks list of all assets in the account.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-greeks
   */
  async getGreeks(args: account.GetGreeksRequestParams) {
    return this.client.get<account.GetGreeksResponse>('/api/v5/account/greeks', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get PM position limitation**
   * 
   * Retrieve cross position limitation of SWAP/FUTURES/OPTION under Portfolio margin mode.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-pm-position-limitation
   */
  async getPmPositionLimitation(args: account.GetPmPositionLimitationRequestParams) {
    return this.client.get<account.GetPmPositionLimitationResponse>('/api/v5/account/position-tiers', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Set risk offset type**
   * 
   * Configure the risk offset type in portfolio margin mode.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-risk-offset-type
   */
  async setRiskOffsetType(args: account.SetRiskOffsetTypeRequestParams) {
    return this.client.post<account.SetRiskOffsetTypeResponse>('/api/v5/account/set-riskOffset-type', args)
      .then(res => res.data);
  }

  /*!
   * **Activate option**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-activate-option
   */
  async activateOption(args: account.ActivateOptionRequestParams) {
    return this.client.post<account.ActivateOptionResponse>('/api/v5/account/activate-option', args)
      .then(res => res.data);
  }

  /*!
   * **Set auto loan**
   * 
   * Only applicalbe to `Multi-currency margin` and `Portfolio margin`
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-auto-loan
   */
  async setAutoLoan(args: account.SetAutoLoanRequestParams) {
    return this.client.post<account.SetAutoLoanResponse>('/api/v5/account/set-auto-loan', args)
      .then(res => res.data);
  }

}
export class Subaccount {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **View sub-account list**
   * 
   * Applies to master accounts only
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-view-sub-account-list
   */
  async viewSubAccountList(args: subaccount.ViewSubAccountListRequestParams) {
    return this.client.get<subaccount.ViewSubAccountListResponse>('/api/v5/users/subaccount/list', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Reset the API Key of a sub-account**
   * 
   * Applies to master accounts only and master accounts API Key must be linked to IP addresses.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-reset-the-api-key-of-a-sub-account
   */
  async resetTheApiKeyOfASubAccount(args: subaccount.ResetTheApiKeyOfASubAccountRequestParams) {
    return this.client.post<subaccount.ResetTheApiKeyOfASubAccountResponse>('/api/v5/users/subaccount/modify-apikey', args)
      .then(res => res.data);
  }

  /*!
   * **Get sub-account trading balance**
   * 
   * Query detailed balance info of Trading Account of a sub-account via the master account (applies to master accounts only)
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-sub-account-trading-balance
   */
  async getSubAccountTradingBalance(args: subaccount.GetSubAccountTradingBalanceRequestParams) {
    return this.client.get<subaccount.GetSubAccountTradingBalanceResponse>('/api/v5/account/subaccount/balances', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get sub-account funding balance**
   * 
   * Query detailed balance info of Funding Account of a sub-account via the master account (applies to master accounts only)
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-sub-account-funding-balance
   */
  async getSubAccountFundingBalance(args: subaccount.GetSubAccountFundingBalanceRequestParams) {
    return this.client.get<subaccount.GetSubAccountFundingBalanceResponse>('/api/v5/asset/subaccount/balances', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **History of sub-account transfer**
   * 
   * Applies to master accounts only.
   * Retrieve the transfer data for the last 3 months.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-history-of-sub-account-transfer
   */
  async historyOfSubAccountTransfer(args: subaccount.HistoryOfSubAccountTransferRequestParams) {
    return this.client.get<subaccount.HistoryOfSubAccountTransferResponse>('/api/v5/asset/subaccount/bills', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Master accounts manage the transfers between sub-accounts**
   * 
   * Applies to master accounts only.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-master-accounts-manage-the-transfers-between-sub-accounts
   */
  async masterAccountsManageTheTransfersBetweenSubAccounts(args: subaccount.MasterAccountsManageTheTransfersBetweenSubAccountsRequestParams) {
    return this.client.post<subaccount.MasterAccountsManageTheTransfersBetweenSubAccountsResponse>('/api/v5/asset/subaccount/transfer', args)
      .then(res => res.data);
  }

  /*!
   * **Set Permission Of Transfer Out**
   * 
   * Set permission of transfer out for sub-account (only applicable to master account). Sub-account can transfer out to master account by default.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-set-permission-of-transfer-out
   */
  async setPermissionOfTransferOut(args: subaccount.SetPermissionOfTransferOutRequestParams) {
    return this.client.post<subaccount.SetPermissionOfTransferOutResponse>('/api/v5/users/subaccount/set-transfer-out', args)
      .then(res => res.data);
  }

  /*!
   * **Get custody trading sub-account list**
   * 
   * The trading team uses this interface to view the list of sub-accounts currently under escrow
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-custody-trading-sub-account-list
   */
  async getCustodyTradingSubAccountList(args: subaccount.GetCustodyTradingSubAccountListRequestParams) {
    return this.client.get<subaccount.GetCustodyTradingSubAccountListResponse>('/api/v5/users/entrust-subaccount-list', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get the user&#39;s affiliate rebate information**
   * 
   * This endpoint is used to get the user&#39;s affiliate rebate information for affiliate.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-the-user-39-s-affiliate-rebate-information
   */
  async getTheUser39SAffiliateRebateInformation(args: subaccount.GetTheUser39SAffiliateRebateInformationRequestParams) {
    return this.client.get<subaccount.GetTheUser39SAffiliateRebateInformationResponse>('/api/v5/users/partner/if-rebate', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Set sub-accounts VIP loan%**
   * 
   * Set the VIP loan allocation of sub-accounts. Only Applicable to master account API keys with Trade access.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-set-sub-accounts-vip-loan
   */
  async setSubAccountsVipLoan(args: subaccount.SetSubAccountsVipLoanRequestParams) {
    return this.client.post<subaccount.SetSubAccountsVipLoanResponse>('/api/v5/account/subaccount/set-loan-allocation', args)
      .then(res => res.data);
  }

  /*!
   * **Get sub-account borrow interest and limit**
   * 
   * Only applicable to master account API keys. Only return VIP loan information
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-sub-account-borrow-interest-and-limit
   */
  async getSubAccountBorrowInterestAndLimit(args: subaccount.GetSubAccountBorrowInterestAndLimitRequestParams) {
    return this.client.get<subaccount.GetSubAccountBorrowInterestAndLimitResponse>('/api/v5/account/subaccount/interest-limits', {
      params: args
    }).then(res => res.data);
  }

}
export class GridTrading {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Place grid algo order**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-place-grid-algo-order
   */
  async placeGridAlgoOrder(args: gridTrading.PlaceGridAlgoOrderRequestParams) {
    return this.client.post<gridTrading.PlaceGridAlgoOrderResponse>('/api/v5/tradingBot/grid/order-algo', args)
      .then(res => res.data);
  }

  /*!
   * **Amend grid algo order**
   * 
   * Supported contract grid algo order amendment.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-amend-grid-algo-order
   */
  async amendGridAlgoOrder(args: gridTrading.AmendGridAlgoOrderRequestParams) {
    return this.client.post<gridTrading.AmendGridAlgoOrderResponse>('/api/v5/tradingBot/grid/amend-order-algo', args)
      .then(res => res.data);
  }

  /*!
   * **Stop grid algo order**
   * 
   * A maximum of 10 orders can be stopped per request.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-stop-grid-algo-order
   */
  async stopGridAlgoOrder(args: gridTrading.StopGridAlgoOrderRequestParams) {
    return this.client.post<gridTrading.StopGridAlgoOrderResponse>('/api/v5/tradingBot/grid/stop-order-algo', args)
      .then(res => res.data);
  }

  /*!
   * **Close position for contract grid**
   * 
   * Close position when the contract grid stop type is &#39;keep position&#39;.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-close-position-for-contract-grid
   */
  async closePositionForContractGrid(args: gridTrading.ClosePositionForContractGridRequestParams) {
    return this.client.post<gridTrading.ClosePositionForContractGridResponse>('/api/v5/tradingBot/grid/close-position', args)
      .then(res => res.data);
  }

  /*!
   * **Cancel close position order for contract grid**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-cancel-close-position-order-for-contract-grid
   */
  async cancelClosePositionOrderForContractGrid(args: gridTrading.CancelClosePositionOrderForContractGridRequestParams) {
    return this.client.post<gridTrading.CancelClosePositionOrderForContractGridResponse>('/api/v5/tradingBot/grid/cancel-close-order', args)
      .then(res => res.data);
  }

  /*!
   * **Instant trigger grid algo order**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-instant-trigger-grid-algo-order
   */
  async instantTriggerGridAlgoOrder(args: gridTrading.InstantTriggerGridAlgoOrderRequestParams) {
    return this.client.post<gridTrading.InstantTriggerGridAlgoOrderResponse>('/api/v5/tradingBot/grid/order-instant-trigger', args)
      .then(res => res.data);
  }

  /*!
   * **Get grid algo order list**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-list
   */
  async getGridAlgoOrderList(args: gridTrading.GetGridAlgoOrderListRequestParams) {
    return this.client.get<gridTrading.GetGridAlgoOrderListResponse>('/api/v5/tradingBot/grid/orders-algo-pending', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get grid algo order history**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-history
   */
  async getGridAlgoOrderHistory(args: gridTrading.GetGridAlgoOrderHistoryRequestParams) {
    return this.client.get<gridTrading.GetGridAlgoOrderHistoryResponse>('/api/v5/tradingBot/grid/orders-algo-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get grid algo order details**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-details
   */
  async getGridAlgoOrderDetails(args: gridTrading.GetGridAlgoOrderDetailsRequestParams) {
    return this.client.get<gridTrading.GetGridAlgoOrderDetailsResponse>('/api/v5/tradingBot/grid/orders-algo-details', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get grid algo sub orders**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-sub-orders
   */
  async getGridAlgoSubOrders(args: gridTrading.GetGridAlgoSubOrdersRequestParams) {
    return this.client.get<gridTrading.GetGridAlgoSubOrdersResponse>('/api/v5/tradingBot/grid/sub-orders', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get grid algo order positions**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-positions
   */
  async getGridAlgoOrderPositions(args: gridTrading.GetGridAlgoOrderPositionsRequestParams) {
    return this.client.get<gridTrading.GetGridAlgoOrderPositionsResponse>('/api/v5/tradingBot/grid/positions', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Spot/Moon grid withdraw income**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-spot-moon-grid-withdraw-income
   */
  async spotMoonGridWithdrawIncome(args: gridTrading.SpotMoonGridWithdrawIncomeRequestParams) {
    return this.client.post<gridTrading.SpotMoonGridWithdrawIncomeResponse>('/api/v5/tradingBot/grid/withdraw-income', args)
      .then(res => res.data);
  }

  /*!
   * **Compute margin balance**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-compute-margin-balance
   */
  async computeMarginBalance(args: gridTrading.ComputeMarginBalanceRequestParams) {
    return this.client.post<gridTrading.ComputeMarginBalanceResponse>('/api/v5/tradingBot/grid/compute-margin-balance', args)
      .then(res => res.data);
  }

  /*!
   * **Adjust margin balance**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-adjust-margin-balance
   */
  async adjustMarginBalance(args: gridTrading.AdjustMarginBalanceRequestParams) {
    return this.client.post<gridTrading.AdjustMarginBalanceResponse>('/api/v5/tradingBot/grid/margin-balance', args)
      .then(res => res.data);
  }

  /*!
   * **Get grid AI parameter (public)**
   * 
   * Authentication is not required for this public endpoint.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-ai-parameter-public
   */
  async getGridAiParameterPublic(args: gridTrading.GetGridAiParameterPublicRequestParams) {
    return this.client.get<gridTrading.GetGridAiParameterPublicResponse>('/api/v5/tradingBot/grid/ai-param', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Compute min investment (public)**
   * 
   * Authentication is not required for this public endpoint.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-compute-min-investment-public
   */
  async computeMinInvestmentPublic(args: gridTrading.ComputeMinInvestmentPublicRequestParams) {
    return this.client.post<gridTrading.ComputeMinInvestmentPublicResponse>('/api/v5/tradingBot/gird/min-investment', args)
      .then(res => res.data);
  }

  /*!
   * **RSI back testing (public)**
   * 
   * Authentication is not required for this public endpoint.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-rsi-back-testing-public
   */
  async rsiBackTestingPublic(args: gridTrading.RsiBackTestingPublicRequestParams) {
    return this.client.get<gridTrading.RsiBackTestingPublicResponse>('/api/v5/tradingBot/public/rsi-back-testing', {
      params: args
    }).then(res => res.data);
  }

}
export class RecurringBuy {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Place recurring buy order**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-place-recurring-buy-order
   */
  async placeRecurringBuyOrder(args: recurringBuy.PlaceRecurringBuyOrderRequestParams) {
    return this.client.post<recurringBuy.PlaceRecurringBuyOrderResponse>('/api/v5/tradingBot/recurring/order-algo', args)
      .then(res => res.data);
  }

  /*!
   * **Amend recurring buy order**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-amend-recurring-buy-order
   */
  async amendRecurringBuyOrder(args: recurringBuy.AmendRecurringBuyOrderRequestParams) {
    return this.client.post<recurringBuy.AmendRecurringBuyOrderResponse>('/api/v5/tradingBot/recurring/amend-order-algo', args)
      .then(res => res.data);
  }

  /*!
   * **Stop recurring buy order**
   * 
   * A maximum of 10 orders can be stopped per request.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-stop-recurring-buy-order
   */
  async stopRecurringBuyOrder(args: recurringBuy.StopRecurringBuyOrderRequestParams) {
    return this.client.post<recurringBuy.StopRecurringBuyOrderResponse>('/api/v5/tradingBot/recurring/stop-order-algo', args)
      .then(res => res.data);
  }

  /*!
   * **Get recurring buy order list**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-order-list
   */
  async getRecurringBuyOrderList(args: recurringBuy.GetRecurringBuyOrderListRequestParams) {
    return this.client.get<recurringBuy.GetRecurringBuyOrderListResponse>('/api/v5/tradingBot/recurring/orders-algo-pending', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get recurring buy order history**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-order-history
   */
  async getRecurringBuyOrderHistory(args: recurringBuy.GetRecurringBuyOrderHistoryRequestParams) {
    return this.client.get<recurringBuy.GetRecurringBuyOrderHistoryResponse>('/api/v5/tradingBot/recurring/orders-algo-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get recurring buy order details**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-order-details
   */
  async getRecurringBuyOrderDetails(args: recurringBuy.GetRecurringBuyOrderDetailsRequestParams) {
    return this.client.get<recurringBuy.GetRecurringBuyOrderDetailsResponse>('/api/v5/tradingBot/recurring/orders-algo-details', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get recurring buy sub orders**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-sub-orders
   */
  async getRecurringBuySubOrders(args: recurringBuy.GetRecurringBuySubOrdersRequestParams) {
    return this.client.get<recurringBuy.GetRecurringBuySubOrdersResponse>('/api/v5/tradingBot/recurring/sub-orders', {
      params: args
    }).then(res => res.data);
  }

}
export class Savings {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get saving balance**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-saving-balance
   */
  async getSavingBalance(args: savings.GetSavingBalanceRequestParams) {
    return this.client.get<savings.GetSavingBalanceResponse>('/api/v5/finance/savings/balance', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Savings purchase/redemption**
   * 
   * Only the assets in the funding account can be used for saving.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-savings-purchase-redemption
   */
  async savingsPurchaseRedemption(args: savings.SavingsPurchaseRedemptionRequestParams) {
    return this.client.post<savings.SavingsPurchaseRedemptionResponse>('/api/v5/finance/savings/purchase-redempt', args)
      .then(res => res.data);
  }

  /*!
   * **Set lending rate**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-set-lending-rate
   */
  async setLendingRate(args: savings.SetLendingRateRequestParams) {
    return this.client.post<savings.SetLendingRateResponse>('/api/v5/finance/savings/set-lending-rate', args)
      .then(res => res.data);
  }

  /*!
   * **Get lending history**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-lending-history
   */
  async getLendingHistory(args: savings.GetLendingHistoryRequestParams) {
    return this.client.get<savings.GetLendingHistoryResponse>('/api/v5/finance/savings/lending-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get public borrow info (public)**
   * 
   * Authentication is not required for this public endpoint.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-public-borrow-info-public
   */
  async getPublicBorrowInfoPublic(args: savings.GetPublicBorrowInfoPublicRequestParams) {
    return this.client.get<savings.GetPublicBorrowInfoPublicResponse>('/api/v5/finance/savings/lending-rate-summary', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get public borrow history (public)**
   * 
   * Authentication is not required for this public endpoint.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-public-borrow-history-public
   */
  async getPublicBorrowHistoryPublic(args: savings.GetPublicBorrowHistoryPublicRequestParams) {
    return this.client.get<savings.GetPublicBorrowHistoryPublicResponse>('/api/v5/finance/savings/lending-rate-history', {
      params: args
    }).then(res => res.data);
  }

}
export class Earn {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get offers**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-get-offers
   */
  async getOffers(args: earn.GetOffersRequestParams) {
    return this.client.get<earn.GetOffersResponse>('/api/v5/finance/staking-defi/offers', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Purchase**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-purchase
   */
  async purchase(args: earn.PurchaseRequestParams) {
    return this.client.post<earn.PurchaseResponse>('/api/v5/finance/staking-defi/purchase', args)
      .then(res => res.data);
  }

  /*!
   * **Redeem**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-redeem
   */
  async redeem(args: earn.RedeemRequestParams) {
    return this.client.post<earn.RedeemResponse>('/api/v5/finance/staking-defi/redeem', args)
      .then(res => res.data);
  }

  /*!
   * **Cancel purchases/redemptions**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-cancel-purchases-redemptions
   */
  async cancelPurchasesRedemptions(args: earn.CancelPurchasesRedemptionsRequestParams) {
    return this.client.post<earn.CancelPurchasesRedemptionsResponse>('/api/v5/finance/staking-defi/cancel', args)
      .then(res => res.data);
  }

  /*!
   * **Get active orders**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-get-active-orders
   */
  async getActiveOrders(args: earn.GetActiveOrdersRequestParams) {
    return this.client.get<earn.GetActiveOrdersResponse>('/api/v5/finance/staking-defi/orders-active', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get order history**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-get-order-history
   */
  async getOrderHistory(args: earn.GetOrderHistoryRequestParams) {
    return this.client.get<earn.GetOrderHistoryResponse>('/api/v5/finance/staking-defi/orders-history', {
      params: args
    }).then(res => res.data);
  }

}
export class CopyTrading {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get existing leading positions**
   * 
   * The leading trader gets leading positions that are not closed.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-existing-leading-positions
   */
  async getExistingLeadingPositions(args: copyTrading.GetExistingLeadingPositionsRequestParams) {
    return this.client.get<copyTrading.GetExistingLeadingPositionsResponse>('/api/v5/copytrading/current-subpositions', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get leading position history**
   * 
   * The leading trader retrieves the completed leading position of the last 3 months.
   * Returns reverse chronological order with `closeTime`.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-leading-position-history
   */
  async getLeadingPositionHistory(args: copyTrading.GetLeadingPositionHistoryRequestParams) {
    return this.client.get<copyTrading.GetLeadingPositionHistoryResponse>('/api/v5/copytrading/subpositions-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Place leading stop order**
   * 
   * The leading trader sets TP/SL for the current leading position that are not closed.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-place-leading-stop-order
   */
  async placeLeadingStopOrder(args: copyTrading.PlaceLeadingStopOrderRequestParams) {
    return this.client.post<copyTrading.PlaceLeadingStopOrderResponse>('/api/v5/copytrading/algo-order', args)
      .then(res => res.data);
  }

  /*!
   * **Close leading position**
   * 
   * The leading trader can only close a leading position once a time.
   * It is required to pass subPosId which can get from &lt;a href=&#34;/docs-v5/en/#rest-api-copy-trading-get-existing-leading-positions&#34;&gt;Get existing leading positions&lt;/a&gt;.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-close-leading-position
   */
  async closeLeadingPosition(args: copyTrading.CloseLeadingPositionRequestParams) {
    return this.client.post<copyTrading.CloseLeadingPositionResponse>('/api/v5/copytrading/close-subposition', args)
      .then(res => res.data);
  }

  /*!
   * **Get leading instruments**
   * 
   * The leading trader gets contracts that are supported to lead by the platform.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-leading-instruments
   */
  async getLeadingInstruments(args: copyTrading.GetLeadingInstrumentsRequestParams) {
    return this.client.get<copyTrading.GetLeadingInstrumentsResponse>('/api/v5/copytrading/instruments', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Amend leading instruments**
   * 
   * The leading trder can amend current leading instruments, need to set initial leading instruments while applying to become a leading trader.
   * All non-leading contracts can&#39;t have position or pending orders for the current request when setting non-leading contracts as leading contracts.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-amend-leading-instruments
   */
  async amendLeadingInstruments(args: copyTrading.AmendLeadingInstrumentsRequestParams) {
    return this.client.post<copyTrading.AmendLeadingInstrumentsResponse>('/api/v5/copytrading/set-instruments', args)
      .then(res => res.data);
  }

  /*!
   * **Get profit sharing details**
   * 
   * The leading trader gets all profits shared details since joining the platform.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-profit-sharing-details
   */
  async getProfitSharingDetails(args: copyTrading.GetProfitSharingDetailsRequestParams) {
    return this.client.get<copyTrading.GetProfitSharingDetailsResponse>('/api/v5/copytrading/profit-sharing-details', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get total profit sharing**
   * 
   * The leading trader gets the total amount of profit shared since joining the platform.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-total-profit-sharing
   */
  async getTotalProfitSharing(args: copyTrading.GetTotalProfitSharingRequestParams) {
    return this.client.get<copyTrading.GetTotalProfitSharingResponse>('/api/v5/copytrading/total-profit-sharing', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get unrealized profit sharing details**
   * 
   * The leading trader gets the profit sharing details that are expected to be shared in the next settlement cycle.
   * The unrealized profit sharing details will update once there copy position is closed.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-unrealized-profit-sharing-details
   */
  async getUnrealizedProfitSharingDetails(args: copyTrading.GetUnrealizedProfitSharingDetailsRequestParams) {
    return this.client.get<copyTrading.GetUnrealizedProfitSharingDetailsResponse>('/api/v5/copytrading/unrealized-profit-sharing-details', {
      params: args
    }).then(res => res.data);
  }

}
export class MarketData {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get tickers**
   * 
   * Retrieve the latest price snapshot, best bid/ask price, and trading volume in the last 24 hours.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-tickers
   */
  async getTickers(args: marketData.GetTickersRequestParams) {
    return this.client.get<marketData.GetTickersResponse>('/api/v5/market/tickers', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get ticker**
   * 
   * Retrieve the latest price snapshot, best bid/ask price, and trading volume in the last 24 hours.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-ticker
   */
  async getTicker(args: marketData.GetTickerRequestParams) {
    return this.client.get<marketData.GetTickerResponse>('/api/v5/market/ticker', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get index tickers**
   * 
   * Retrieve index tickers.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-tickers
   */
  async getIndexTickers(args: marketData.GetIndexTickersRequestParams) {
    return this.client.get<marketData.GetIndexTickersResponse>('/api/v5/market/index-tickers', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get order book**
   * 
   * Retrieve order book of the instrument.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-order-book
   */
  async getOrderBook(args: marketData.GetOrderBookRequestParams) {
    return this.client.get<marketData.GetOrderBookResponse>('/api/v5/market/books', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get order lite book**
   * 
   * Retrieve order top 25 book of the instrument more quickly
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-order-lite-book
   */
  async getOrderLiteBook(args: marketData.GetOrderLiteBookRequestParams) {
    return this.client.get<marketData.GetOrderLiteBookResponse>('/api/v5/market/books-lite', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get candlesticks**
   * 
   * Retrieve the candlestick charts. This endpoint can retrieve the latest 1,440 data entries. Charts are returned in groups based on the requested bar.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-candlesticks
   */
  async getCandlesticks(args: marketData.GetCandlesticksRequestParams) {
    return this.client.get<marketData.GetCandlesticksResponse>('/api/v5/market/candles', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get candlesticks history**
   * 
   * Retrieve history candlestick charts from recent years.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-candlesticks-history
   */
  async getCandlesticksHistory(args: marketData.GetCandlesticksHistoryRequestParams) {
    return this.client.get<marketData.GetCandlesticksHistoryResponse>('/api/v5/market/history-candles', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get index candlesticks**
   * 
   * Retrieve the candlestick charts of the index. This endpoint can retrieve the latest 1,440 data entries. Charts are returned in groups based on the requested bar.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-candlesticks
   */
  async getIndexCandlesticks(args: marketData.GetIndexCandlesticksRequestParams) {
    return this.client.get<marketData.GetIndexCandlesticksResponse>('/api/v5/market/index-candles', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get index candlesticks history**
   * 
   * Retrieve the candlestick charts of the index from recent years.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-candlesticks-history
   */
  async getIndexCandlesticksHistory(args: marketData.GetIndexCandlesticksHistoryRequestParams) {
    return this.client.get<marketData.GetIndexCandlesticksHistoryResponse>('/api/v5/market/history-index-candles', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get mark price candlesticks**
   * 
   * Retrieve the candlestick charts of mark price. This endpoint can retrieve the latest 1,440 data entries. Charts are returned in groups based on the requested bar.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-mark-price-candlesticks
   */
  async getMarkPriceCandlesticks(args: marketData.GetMarkPriceCandlesticksRequestParams) {
    return this.client.get<marketData.GetMarkPriceCandlesticksResponse>('/api/v5/market/mark-price-candles', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get mark price candlesticks history**
   * 
   * Retrieve the candlestick charts of mark price from recent years.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-mark-price-candlesticks-history
   */
  async getMarkPriceCandlesticksHistory(args: marketData.GetMarkPriceCandlesticksHistoryRequestParams) {
    return this.client.get<marketData.GetMarkPriceCandlesticksHistoryResponse>('/api/v5/market/history-mark-price-candles', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get trades**
   * 
   * Retrieve the recent transactions of an instrument.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-trades
   */
  async getTrades(args: marketData.GetTradesRequestParams) {
    return this.client.get<marketData.GetTradesResponse>('/api/v5/market/trades', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get trades history**
   * 
   * Retrieve the recent transactions of an instrument from the last 3 months with pagination.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-trades-history
   */
  async getTradesHistory(args: marketData.GetTradesHistoryRequestParams) {
    return this.client.get<marketData.GetTradesHistoryResponse>('/api/v5/market/history-trades', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get option trades**
   * 
   * Retrieve the recent transactions of an instrument under same instFamily. The maximum is 100.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-option-trades
   */
  async getOptionTrades(args: marketData.GetOptionTradesRequestParams) {
    return this.client.get<marketData.GetOptionTradesResponse>('/api/v5/market/option/instrument-family-trades', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get 24H total volume**
   * 
   * The 24-hour trading volume is calculated on a rolling basis.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-24h-total-volume
   */
  async get24hTotalVolume(args: marketData.Get24hTotalVolumeRequestParams) {
    return this.client.get<marketData.Get24hTotalVolumeResponse>('/api/v5/market/platform-24-volume', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get oracle**
   * 
   * Get the crypto price of signing using Open Oracle smart contract.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-oracle
   */
  async getOracle(args: marketData.GetOracleRequestParams) {
    return this.client.get<marketData.GetOracleResponse>('/api/v5/market/open-oracle', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get exchange rate**
   * 
   * This interface provides the average exchange rate data for 2 weeks
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-exchange-rate
   */
  async getExchangeRate(args: marketData.GetExchangeRateRequestParams) {
    return this.client.get<marketData.GetExchangeRateResponse>('/api/v5/market/exchange-rate', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get index components**
   * 
   * Get the index component information data on the market
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-components
   */
  async getIndexComponents(args: marketData.GetIndexComponentsRequestParams) {
    return this.client.get<marketData.GetIndexComponentsResponse>('/api/v5/market/index-components', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get block tickers**
   * 
   * Retrieve the latest block trading volume in the last 24 hours.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-block-tickers
   */
  async getBlockTickers(args: marketData.GetBlockTickersRequestParams) {
    return this.client.get<marketData.GetBlockTickersResponse>('/api/v5/market/block-tickers', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get block ticker**
   * 
   * Retrieve the latest block trading volume in the last 24 hours.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-block-ticker
   */
  async getBlockTicker(args: marketData.GetBlockTickerRequestParams) {
    return this.client.get<marketData.GetBlockTickerResponse>('/api/v5/market/block-ticker', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get block trades**
   * 
   * Retrieve the recent block trading transactions of an instrument. Descending order by tradeId.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-block-trades
   */
  async getBlockTrades(args: marketData.GetBlockTradesRequestParams) {
    return this.client.get<marketData.GetBlockTradesResponse>('/api/v5/market/block-trades', {
      params: args
    }).then(res => res.data);
  }

}
export class PublicData {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get instruments**
   * 
   * Retrieve a list of instruments with open contracts.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-instruments
   */
  async getInstruments(args: publicData.GetInstrumentsRequestParams) {
    return this.client.get<publicData.GetInstrumentsResponse>('/api/v5/public/instruments', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get delivery/exercise history**
   * 
   * Retrieve delivery records of Futures and exercise records of Options in the last 3 months.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-delivery-exercise-history
   */
  async getDeliveryExerciseHistory(args: publicData.GetDeliveryExerciseHistoryRequestParams) {
    return this.client.get<publicData.GetDeliveryExerciseHistoryResponse>('/api/v5/public/delivery-exercise-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get open interest**
   * 
   * Retrieve the total open interest for contracts on OKX.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-open-interest
   */
  async getOpenInterest(args: publicData.GetOpenInterestRequestParams) {
    return this.client.get<publicData.GetOpenInterestResponse>('/api/v5/public/open-interest', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get funding rate**
   * 
   * Retrieve funding rate.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-funding-rate
   */
  async getFundingRate(args: publicData.GetFundingRateRequestParams) {
    return this.client.get<publicData.GetFundingRateResponse>('/api/v5/public/funding-rate', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get funding rate history**
   * 
   * Retrieve funding rate history. This endpoint can retrieve data from the last 3 months.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-funding-rate-history
   */
  async getFundingRateHistory(args: publicData.GetFundingRateHistoryRequestParams) {
    return this.client.get<publicData.GetFundingRateHistoryResponse>('/api/v5/public/funding-rate-history', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get limit price**
   * 
   * Retrieve the highest buy limit and lowest sell limit of the instrument.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-limit-price
   */
  async getLimitPrice(args: publicData.GetLimitPriceRequestParams) {
    return this.client.get<publicData.GetLimitPriceResponse>('/api/v5/public/price-limit', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get option market data**
   * 
   * Retrieve option market data.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-option-market-data
   */
  async getOptionMarketData(args: publicData.GetOptionMarketDataRequestParams) {
    return this.client.get<publicData.GetOptionMarketDataResponse>('/api/v5/public/opt-summary', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get estimated delivery/exercise price**
   * 
   * Retrieve the estimated delivery price which will only have a return value one hour before the delivery/exercise.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-estimated-delivery-exercise-price
   */
  async getEstimatedDeliveryExercisePrice(args: publicData.GetEstimatedDeliveryExercisePriceRequestParams) {
    return this.client.get<publicData.GetEstimatedDeliveryExercisePriceResponse>('/api/v5/public/estimated-price', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get discount rate and interest-free quota**
   * 
   * Retrieve discount rate level and interest-free quota.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-discount-rate-and-interest-free-quota
   */
  async getDiscountRateAndInterestFreeQuota(args: publicData.GetDiscountRateAndInterestFreeQuotaRequestParams) {
    return this.client.get<publicData.GetDiscountRateAndInterestFreeQuotaResponse>('/api/v5/public/discount-rate-interest-free-quota', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get system time**
   * 
   * Retrieve API server time.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-system-time
   */
  async getSystemTime(args: publicData.GetSystemTimeRequestParams) {
    return this.client.get<publicData.GetSystemTimeResponse>('/api/v5/public/time', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get mark price**
   * 
   * Retrieve mark price.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-mark-price
   */
  async getMarkPrice(args: publicData.GetMarkPriceRequestParams) {
    return this.client.get<publicData.GetMarkPriceResponse>('/api/v5/public/mark-price', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get position tiers**
   * 
   * Retrieve position tiers information, maximum leverage depends on your borrowings and margin ratio.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-position-tiers
   */
  async getPositionTiers(args: publicData.GetPositionTiersRequestParams) {
    return this.client.get<publicData.GetPositionTiersResponse>('/api/v5/public/position-tiers', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get interest rate and loan quota**
   * 
   * Retrieve interest rate
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-interest-rate-and-loan-quota
   */
  async getInterestRateAndLoanQuota(args: publicData.GetInterestRateAndLoanQuotaRequestParams) {
    return this.client.get<publicData.GetInterestRateAndLoanQuotaResponse>('/api/v5/public/interest-rate-loan-quota', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get interest rate and loan quota for VIP loans**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-interest-rate-and-loan-quota-for-vip-loans
   */
  async getInterestRateAndLoanQuotaForVipLoans(args: publicData.GetInterestRateAndLoanQuotaForVipLoansRequestParams) {
    return this.client.get<publicData.GetInterestRateAndLoanQuotaForVipLoansResponse>('/api/v5/public/vip-interest-rate-loan-quota', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get underlying**
   * 
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-underlying
   */
  async getUnderlying(args: publicData.GetUnderlyingRequestParams) {
    return this.client.get<publicData.GetUnderlyingResponse>('/api/v5/public/underlying', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get insurance fund**
   * 
   * Get insurance fund balance information
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-insurance-fund
   */
  async getInsuranceFund(args: publicData.GetInsuranceFundRequestParams) {
    return this.client.get<publicData.GetInsuranceFundResponse>('/api/v5/public/insurance-fund', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Unit convert**
   * 
   * Convert the crypto value to the number of contracts, or vice versa
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-unit-convert
   */
  async unitConvert(args: publicData.UnitConvertRequestParams) {
    return this.client.get<publicData.UnitConvertResponse>('/api/v5/public/convert-contract-coin', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get option trades**
   * 
   * The maximum is 100.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-option-trades
   */
  async getOptionTrades(args: publicData.GetOptionTradesRequestParams) {
    return this.client.get<publicData.GetOptionTradesResponse>('/api/v5/public/option-trades', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get option tickBands**
   * 
   * Get option tickBands information
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-option-tickbands
   */
  async getOptionTickbands(args: publicData.GetOptionTickbandsRequestParams) {
    return this.client.get<publicData.GetOptionTickbandsResponse>('/api/v5/public/instrument-tick-bands', {
      params: args
    }).then(res => res.data);
  }

}
export class TradingData {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Get support coin**
   * 
   * Retrieve the currencies supported by the trading data endpoints.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-support-coin
   */
  async getSupportCoin(args: tradingData.GetSupportCoinRequestParams) {
    return this.client.get<tradingData.GetSupportCoinResponse>('/api/v5/rubik/stat/trading-data/support-coin', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get taker volume**
   * 
   * Retrieve the taker volume for both buyers and sellers.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-taker-volume
   */
  async getTakerVolume(args: tradingData.GetTakerVolumeRequestParams) {
    return this.client.get<tradingData.GetTakerVolumeResponse>('/api/v5/rubik/stat/taker-volume', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get margin lending ratio**
   * 
   * Retrieve the ratio of cumulative amount between currency margin quote currency and base currency.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-margin-lending-ratio
   */
  async getMarginLendingRatio(args: tradingData.GetMarginLendingRatioRequestParams) {
    return this.client.get<tradingData.GetMarginLendingRatioResponse>('/api/v5/rubik/stat/margin/loan-ratio', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get long/short ratio**
   * 
   * Retrieve the ratio of users with net long vs net short positions for futures and perpetual swaps.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-long-short-ratio
   */
  async getLongShortRatio(args: tradingData.GetLongShortRatioRequestParams) {
    return this.client.get<tradingData.GetLongShortRatioResponse>('/api/v5/rubik/stat/contracts/long-short-account-ratio', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get contracts open interest and volume**
   * 
   * Retrieve the open interest and trading volume for futures and perpetual swaps.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-contracts-open-interest-and-volume
   */
  async getContractsOpenInterestAndVolume(args: tradingData.GetContractsOpenInterestAndVolumeRequestParams) {
    return this.client.get<tradingData.GetContractsOpenInterestAndVolumeResponse>('/api/v5/rubik/stat/contracts/open-interest-volume', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get options open interest and volume**
   * 
   * Retrieve the open interest and trading volume for options.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-options-open-interest-and-volume
   */
  async getOptionsOpenInterestAndVolume(args: tradingData.GetOptionsOpenInterestAndVolumeRequestParams) {
    return this.client.get<tradingData.GetOptionsOpenInterestAndVolumeResponse>('/api/v5/rubik/stat/option/open-interest-volume', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get put/call ratio**
   * 
   * Retrieve the open interest ratio and trading volume ratio of calls vs puts.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-put-call-ratio
   */
  async getPutCallRatio(args: tradingData.GetPutCallRatioRequestParams) {
    return this.client.get<tradingData.GetPutCallRatioResponse>('/api/v5/rubik/stat/option/open-interest-volume-ratio', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get open interest and volume (expiry)**
   * 
   * Retrieve the open interest and trading volume of calls and puts for each upcoming expiration.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-open-interest-and-volume-expiry
   */
  async getOpenInterestAndVolumeExpiry(args: tradingData.GetOpenInterestAndVolumeExpiryRequestParams) {
    return this.client.get<tradingData.GetOpenInterestAndVolumeExpiryResponse>('/api/v5/rubik/stat/option/open-interest-volume-expiry', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get open interest and volume (strike)**
   * 
   * Retrieve the taker volume for both buyers and sellers of calls and puts.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-open-interest-and-volume-strike
   */
  async getOpenInterestAndVolumeStrike(args: tradingData.GetOpenInterestAndVolumeStrikeRequestParams) {
    return this.client.get<tradingData.GetOpenInterestAndVolumeStrikeResponse>('/api/v5/rubik/stat/option/open-interest-volume-strike', {
      params: args
    }).then(res => res.data);
  }

  /*!
   * **Get taker flow**
   * 
   * This shows the relative buy/sell volume for calls and puts. It shows whether traders are bullish or bearish on price and volatility.
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-taker-flow
   */
  async getTakerFlow(args: tradingData.GetTakerFlowRequestParams) {
    return this.client.get<tradingData.GetTakerFlowResponse>('/api/v5/rubik/stat/option/taker-block-volume', {
      params: args
    }).then(res => res.data);
  }

}
export class Status {
  constructor(private readonly client: OkxAxiosInstance) {}

  /*!
   * **Status**
   * 
   * Get event status of system upgrade
   * 
   * see: https://www.okx.com/docs-v5/en/#rest-api-status
   */
  async getStatus(args: status.GetStatusRequestParams) {
    return this.client.get<status.GetStatusResponse>('/api/v5/system/status', {
      params: args
    }).then(res => res.data);
  }

}
