/**
 * THIS IS GENERATED CODE. DO NOT EDIT.
 */
export interface OkxResponse<Data = any> {
  code: string;
  msg: string;
  data: Data[];
}

export namespace trade {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-order
   */
  export interface PlaceOrderRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-190927-5000-C`
     */
    instId: string;

    /*!
     * Trade mode
     * Margin mode `cross` `isolated`
     * Non-Margin mode `cash`
     */
    tdMode: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy?: string;

    /*!
     * Client Order ID as assigned by the client
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clOrdId?: string;

    /*!
     * Order tag
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 16 characters.
     */
    tag?: string;

    /*!
     * Order side, `buy` `sell`
     */
    side: string;

    /*!
     * Position side
     * The default is `net` in the `net` mode
     * It is required in the `long/short` mode, and can only be `long` or `short`.
     * Only applicable to `FUTURES/SWAP`.
     */
    posSide?: string;

    /*!
     * Order type
     * `market`: Market order
     * `limit`: Limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order (applicable only to Futures and Perpetual swap).
     */
    ordType: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Order price. Only applicable to `limit`,`post_only`,`fok`,`ioc` order.
     */
    px?: string;

    /*!
     * Whether orders can only reduce in position size.
     * Valid options: `true` or `false`. The default value is `false`.
     * Only applicable to `MARGIN` orders, and `FUTURES/SWAP` orders in `net` mode
     * Only applicable to `Single-currency margin` and `Multi-currency margin`
     */
    reduceOnly?: boolean;

    /*!
     * Whether the target currency uses the quote or base currency.
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy?: string;

    /*!
     * Whether to disallow the system from amending the size of the SPOT Market Order.
     * Valid options: `true` or `false`. The default value is `false`.
     * If `true`, system will not amend and reject the market order if user does not have sufficient funds.
     * Only applicable to SPOT Market Orders
     */
    banAmend?: boolean;

    /*!
     * Take-profit trigger price
     * If you fill in this parameter, you should fill in the take-profit order price as well.
     */
    tpTriggerPx?: string;

    /*!
     * Take-profit order price
     * If you fill in this parameter, you should fill in the take-profit trigger price as well.
     * If the price is -1, take-profit will be executed at the market price.
     */
    tpOrdPx?: string;

    /*!
     * Stop-loss trigger price
     * If you fill in this parameter, you should fill in the stop-loss order price.
     */
    slTriggerPx?: string;

    /*!
     * Stop-loss order price
     * If you fill in this parameter, you should fill in the stop-loss trigger price.
     * If the price is -1, stop-loss will be executed at the market price.
     */
    slOrdPx?: string;

    /*!
     * Take-profit trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     * The Default is last
     */
    tpTriggerPxType?: string;

    /*!
     * Stop-loss trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     * The Default is last
     */
    slTriggerPxType?: string;

    /*!
     * Quick Margin type. Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     * The default value is `manual`
     */
    quickMgnType?: string;

  }

  export type PlaceOrderData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection or success message of event execution.
     */
    sMsg: string;

  }

  export type PlaceOrderResponse = OkxResponse<PlaceOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-multiple-orders
   */
  export interface PlaceMultipleOrdersRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-190927-5000-C`
     */
    instId: string;

    /*!
     * Trade mode
     * Margin mode `cross` `isolated`
     * Non-Margin mode `cash`
     */
    tdMode: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy?: string;

    /*!
     * Client Order ID as assigned by the client
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clOrdId?: string;

    /*!
     * Order tag
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 16 characters.
     */
    tag?: string;

    /*!
     * Order side `buy` `sell`
     */
    side: string;

    /*!
     * Position side
     * The default is `net` in the `net` mode
     * It is required in the `long/short` mode, and can only be `long` or `short`.
     * Only applicable to `FUTURES/SWAP`.
     */
    posSide?: string;

    /*!
     * Order type
     * `market`: Market order
     * `limit`: Limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order (applicable only to Futures and Perpetual swap).
     */
    ordType: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Order price. Only applicable to `limit`,`post_only`,`fok`,`ioc` order.
     */
    px?: string;

    /*!
     * Whether the order can only reduce position size.
     * Valid options: `true` or `false`. The default value is `false`.
     * Only applicable to `MARGIN` orders, and `FUTURES/SWAP` orders in `net` mode
     * Only applicable to `Single-currency margin` and `Multi-currency margin`
     */
    reduceOnly?: boolean;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy?: string;

    /*!
     * Whether to disallow the system from amending the size of the SPOT Market Order.
     * Valid options: `true` or `false`. The default value is `false`.
     * If `true`, system will not amend and reject the market order if user does not have sufficient funds.
     * Only applicable to SPOT Market Orders
     */
    banAmend?: boolean;

    /*!
     * Take-profit trigger price
     * If you fill in this parameter, you should fill in the take-profit order price as well.
     */
    tpTriggerPx?: string;

    /*!
     * Take-profit order price
     * If you fill in this parameter, you should fill in the take-profit trigger price as well.
     * If the price is -1, take-profit will be executed at the market price.
     */
    tpOrdPx?: string;

    /*!
     * Stop-loss trigger price
     * If you fill in this parameter, you should fill in the stop-loss order price.
     */
    slTriggerPx?: string;

    /*!
     * Stop-loss order price
     * If you fill in this parameter, you should fill in the stop-loss trigger price.
     * If the price is -1, stop-loss will be executed at the market price.
     */
    slOrdPx?: string;

    /*!
     * Take-profit trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     * The Default is last
     */
    tpTriggerPxType?: string;

    /*!
     * Stop-loss trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     * The Default is last
     */
    slTriggerPxType?: string;

    /*!
     * Quick Margin type. Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     * The default value is `manual`
     */
    quickMgnType?: string;

  }

  export type PlaceMultipleOrdersData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection or success message of event execution.
     */
    sMsg: string;

  }

  export type PlaceMultipleOrdersResponse = OkxResponse<PlaceMultipleOrdersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-order
   */
  export interface CancelOrderRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId: string;

    /*!
     * Order ID
     * Either `ordId` or `clOrdId` is required. If both are passed, ordId will be used.
     */
    ordId?: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId?: string;

  }

  export type CancelOrderData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type CancelOrderResponse = OkxResponse<CancelOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-multiple-orders
   */
  export interface CancelMultipleOrdersRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId: string;

    /*!
     * Order ID
     * Either `ordId` or `clOrdId` is required. If both are passed, `ordId` will be used.
     */
    ordId?: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId?: string;

  }

  export type CancelMultipleOrdersData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type CancelMultipleOrdersResponse = OkxResponse<CancelMultipleOrdersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-amend-order
   */
  export interface AmendOrderRequestParams {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Whether the order needs to be automatically canceled when the order amendment fails
     * Valid options: `false` or `true`, the default is `false`.
     */
    cxlOnFail?: boolean;

    /*!
     * Order ID
     * Either `ordId` or `clOrdId` is required. If both are passed, `ordId` will be used.
     */
    ordId?: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId?: string;

    /*!
     * Client Request ID as assigned by the client for order amendment
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     * The response will include the corresponding `reqId` to help you identify the request if you provide it in the request.
     */
    reqId?: string;

    /*!
     * New quantity after amendment. When amending a partially-filled order, the `newSz` should include the amount that has been filled.
     */
    newSz?: string;

    /*!
     * New price after amendment.
     */
    newPx?: string;

    /*!
     * Take-profit trigger price.
     * Either the take profit trigger price or order price is 0, it means that the take profit is deleted
     */
    newTpTriggerPx?: string;

    /*!
     * Take-profit order price
     * If the price is -1, take-profit will be executed at the market price.
     */
    newTpOrdPx?: string;

    /*!
     * Stop-loss trigger price
     * Either the stop loss trigger price or order price is 0, it means that the stop loss is deleted
     */
    newSlTriggerPx?: string;

    /*!
     * Stop-loss order price
     * If the price is -1, stop-loss will be executed at the market price.
     */
    newSlOrdPx?: string;

    /*!
     * Take-profit trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    newTpTriggerPxType?: string;

    /*!
     * Stop-loss trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    newSlTriggerPxType?: string;

  }

  export type AmendOrderData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Client Request ID as assigned by the client for order amendment.
     */
    reqId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type AmendOrderResponse = OkxResponse<AmendOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-amend-multiple-orders
   */
  export interface AmendMultipleOrdersRequestParams {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Whether the order needs to be automatically canceled when the order amendment fails
     * `false`  `true`, the default is `false`.
     */
    cxlOnFail?: boolean;

    /*!
     * Order ID
     * Either `ordId` or `clOrdId`is required, if both are passed, `ordId` will be used.
     */
    ordId?: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId?: string;

    /*!
     * Client Request ID as assigned by the client for order amendment
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     * The response will include the corresponding `reqId` to help you identify the request if you provide it in the request.
     */
    reqId?: string;

    /*!
     * New quantity after amendment. When amending a partially-filled order, the `newSz` should include the amount that has been filled.
     */
    newSz?: string;

    /*!
     * New price after amendment.
     */
    newPx?: string;

    /*!
     * Take-profit trigger price.
     * Either the take-profit trigger price or order price is 0, it means that the take-profit is deleted
     */
    newTpTriggerPx?: any;

    /*!
     * Take-profit order price
     * If the price is -1, take-profit will be executed at the market price.
     */
    newTpOrdPx?: any;

    /*!
     * Stop-loss trigger price
     * Either the stop-loss trigger price or order price is 0, it means that the stop-loss is deleted
     */
    newSlTriggerPx?: any;

    /*!
     * Stop-loss order price
     * If the price is -1, stop-loss will be executed at the market price.
     */
    newSlOrdPx?: any;

    /*!
     * Take-profit trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    newTpTriggerPxType?: any;

    /*!
     * Stop-loss trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    newSlTriggerPxType?: any;

  }

  export type AmendMultipleOrdersData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Client Request ID as assigned by the client for order amendment.
     */
    reqId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type AmendMultipleOrdersResponse = OkxResponse<AmendMultipleOrdersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-close-positions
   */
  export interface ClosePositionsRequestParams {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Position side
     * This parameter can be omitted in `net` mode, and the default value is `net`. You can only fill with `net`.
     * This parameter must be filled in under the `long/short` mode. Fill in `long` for close-long and `short` for close-short.
     */
    posSide?: string;

    /*!
     * Margin mode
     * `cross` `isolated`
     */
    mgnMode: string;

    /*!
     * Margin currency, required in the case of closing `cross` `MARGIN` position for `Single-currency margin`.
     */
    ccy?: string;

    /*!
     * Whether any pending orders for closing out needs to be automatically canceled when close position via a market order.
     * `false` or `true`, the default is `false`.
     */
    autoCxl?: boolean;

    /*!
     * Client-supplied ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clOrdId?: string;

    /*!
     * Order tag
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 16 characters.
     */
    tag?: string;

  }

  export type ClosePositionsData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Client-supplied ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clOrdId: string;

    /*!
     * Order tag
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 16 characters.
     */
    tag: string;

  }

  export type ClosePositionsResponse = OkxResponse<ClosePositionsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-details
   */
  export interface GetOrderDetailsRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId: string;

    /*!
     * Order ID
     * Either `ordId` or `clOrdId` is required, if both are passed, `ordId` will be used
     */
    ordId?: string;

    /*!
     * Client Order ID as assigned by the client
     * If the `clOrdId` is associated with multiple orders, only the latest one will be returned.
     */
    clOrdId?: string;

  }

  export type GetOrderDetailsData = {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Price
     */
    px: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Profit and loss, Applicable to orders which have a trade and aim to close position. It always is 0 in other conditions
     */
    pnl: string;

    /*!
     * Order type
     * `market`: Market order
     * `limit`: Limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order
     */
    ordType: string;

    /*!
     * Order side
     */
    side: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Trade mode
     */
    tdMode: string;

    /*!
     * Accumulated fill quantity
     * The unit is `base_ccy` for SPOT and MARGIN, e.g. BTC-USDT, the unit is BTC; For market orders, the unit both is `base_ccy` when the tgtCcy is `base_ccy` or `quote_ccy`;
     * The unit is contract for `FUTURES`/`SWAP`/`OPTION`
     */
    accFillSz: string;

    /*!
     * Last filled price. If none is filled, it will return &#34;&#34;.
     */
    fillPx: string;

    /*!
     * Last traded ID
     */
    tradeId: string;

    /*!
     * Last filled quantity
     * The unit is `base_ccy` for SPOT and MARGIN, e.g. BTC-USDT, the unit is BTC; For market orders, the unit both is `base_ccy` when the tgtCcy is `base_ccy` or `quote_ccy`;
     * The unit is contract for `FUTURES`/`SWAP`/`OPTION`
     */
    fillSz: string;

    /*!
     * Last filled time
     */
    fillTime: string;

    /*!
     * Average filled price. If none is filled, it will return &#34;&#34;.
     */
    avgPx: string;

    /*!
     * State
     * `canceled`
     * `live`
     * `partially_filled`
     * `filled`
     */
    state: string;

    /*!
     * Leverage, from `0.01` to `125`.
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    lever: string;

    /*!
     * Take-profit trigger price.
     */
    tpTriggerPx: string;

    /*!
     * Take-profit trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    tpTriggerPxType: string;

    /*!
     * Take-profit order price.
     */
    tpOrdPx: string;

    /*!
     * Stop-loss trigger price.
     */
    slTriggerPx: string;

    /*!
     * Stop-loss trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    slTriggerPxType: string;

    /*!
     * Stop-loss order price.
     */
    slOrdPx: string;

    /*!
     * Fee currency
     */
    feeCcy: string;

    /*!
     * Fee and rebate
     * For spot and margin, it is accumulated fee charged by the platform. It is always negative, e.g. -0.01.
     * For Futures, Swap and Options, it is accumulated fee and rebate
     */
    fee: string;

    /*!
     * Rebate currency
     */
    rebateCcy: string;

    /*!
     * Order source
     * `13`:The generated limit order after the strategy order is triggered
     */
    source: string;

    /*!
     * Rebate amount, only applicable to spot and margin, the reward of placing orders from the platform (rebate) given to user who has reached the specified trading level. If there is no rebate, this field is &#34;&#34;.
     */
    rebate: string;

    /*!
     * Category
     * `normal`
     * `twap`
     * `adl`
     * `full_liquidation`
     * `partial_liquidation`
     * `delivery`
     * `ddh`
     */
    category: string;

    /*!
     * Whether the order can only reduce the position size. Valid options: true or false.
     */
    reduceOnly: string;

    /*!
     * Code of the cancellation source.
     */
    cancelSource: string;

    /*!
     * Reason for the cancellation.
     */
    cancelSourceReason: string;

    /*!
     * Quick Margin type, Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     */
    quickMgnType: string;

    /*!
     * Client-supplied Algo ID. There will be a value when algo order attaching `algoClOrdId` is triggered, or it will be &#34;&#34;.
     */
    algoClOrdId: string;

    /*!
     * Algo ID. There will be a value when algo order is triggered, or it will be &#34;&#34;.
     */
    algoId: string;

    /*!
     * Update time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

  }

  export type GetOrderDetailsResponse = OkxResponse<GetOrderDetailsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-list
   */
  export interface GetOrderListRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Underlying
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-200927`
     */
    instId?: string;

    /*!
     * Order type
     * `market`: Market order
     * `limit`: Limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order
     */
    ordType?: string;

    /*!
     * State
     * `live`
     * `partially_filled`
     */
    state?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ordId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ordId`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetOrderListData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Price
     */
    px: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Profit and loss, Applicable to orders which have a trade and aim to close position. It always is 0 in other conditions
     */
    pnl: string;

    /*!
     * Order type
     * `market`: Market order
     * `limit`: Limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order
     */
    ordType: string;

    /*!
     * Order side
     */
    side: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Trade mode
     */
    tdMode: string;

    /*!
     * Accumulated fill quantity
     */
    accFillSz: string;

    /*!
     * Last filled price
     */
    fillPx: string;

    /*!
     * Last trade ID
     */
    tradeId: string;

    /*!
     * Last filled quantity
     */
    fillSz: string;

    /*!
     * Last filled time
     */
    fillTime: string;

    /*!
     * Average filled price. If none is filled, it will return &#34;&#34;.
     */
    avgPx: string;

    /*!
     * State
     * `live`
     * `partially_filled`
     */
    state: string;

    /*!
     * Leverage, from `0.01` to `125`.
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    lever: string;

    /*!
     * Take-profit trigger price.
     */
    tpTriggerPx: string;

    /*!
     * Take-profit trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    tpTriggerPxType: string;

    /*!
     * Take-profit order price.
     */
    tpOrdPx: string;

    /*!
     * Stop-loss trigger price.
     */
    slTriggerPx: string;

    /*!
     * Stop-loss trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    slTriggerPxType: string;

    /*!
     * Stop-loss order price.
     */
    slOrdPx: string;

    /*!
     * Fee currency
     */
    feeCcy: string;

    /*!
     * Fee and rebate
     * For spot and margin, it is accumulated fee charged by the platform. It is always negative, e.g. -0.01.
     * For Futures, Swap and Options, it is accumulated fee and rebate
     */
    fee: string;

    /*!
     * Rebate currency
     */
    rebateCcy: string;

    /*!
     * Order source
     * `13`:The generated limit order after the strategy order is triggered
     */
    source: string;

    /*!
     * Rebate amount, only applicable to spot and margin, the reward of placing orders from the platform (rebate) given to user who has reached the specified trading level. If there is no rebate, this field is &#34;&#34;.
     */
    rebate: string;

    /*!
     * Category
     * `normal`
     */
    category: string;

    /*!
     * Whether the order can only reduce the position size. Valid options: true or false.
     */
    reduceOnly: string;

    /*!
     * Quick Margin type, Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     */
    quickMgnType: string;

    /*!
     * Client-supplied Algo ID. There will be a value when algo order attaching `algoClOrdId` is triggered, or it will be &#34;&#34;.
     */
    algoClOrdId: string;

    /*!
     * Algo ID. There will be a value when algo order is triggered, or it will be &#34;&#34;.
     */
    algoId: string;

    /*!
     * Update time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

  }

  export type GetOrderListResponse = OkxResponse<GetOrderListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-history-last-7-days
   */
  export interface GetOrderHistoryLast7DaysRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId?: string;

    /*!
     * Order type
     * `market`: market order
     * `limit`: limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order
     */
    ordType?: string;

    /*!
     * State
     * `canceled`
     * `filled`
     */
    state?: string;

    /*!
     * Category
     * `twap`
     * `adl`
     * `full_liquidation`
     * `partial_liquidation`
     * `delivery`
     * `ddh`
     */
    category?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ordId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ordId`
     */
    before?: string;

    /*!
     * Filter with a begin timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    begin?: string;

    /*!
     * Filter with an end timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    end?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetOrderHistoryLast7DaysData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Price
     */
    px: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Order type
     * `market`: market order
     * `limit`: limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order
     */
    ordType: string;

    /*!
     * Order side
     */
    side: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Trade mode
     */
    tdMode: string;

    /*!
     * Accumulated fill quantity
     */
    accFillSz: string;

    /*!
     * Last filled price. If none is filled, it will return &#34;&#34;.
     */
    fillPx: string;

    /*!
     * Last trade ID
     */
    tradeId: string;

    /*!
     * Last filled quantity
     */
    fillSz: string;

    /*!
     * Last filled time
     */
    fillTime: string;

    /*!
     * Average filled price. If none is filled, it will return &#34;&#34;.
     */
    avgPx: string;

    /*!
     * State
     * `canceled`
     * `filled`
     */
    state: string;

    /*!
     * Leverage, from `0.01` to `125`.
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    lever: string;

    /*!
     * Take-profit trigger price.
     */
    tpTriggerPx: string;

    /*!
     * Take-profit trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    tpTriggerPxType: string;

    /*!
     * Take-profit order price.
     */
    tpOrdPx: string;

    /*!
     * Stop-loss trigger price.
     */
    slTriggerPx: string;

    /*!
     * Stop-loss trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    slTriggerPxType: string;

    /*!
     * Stop-loss order price.
     */
    slOrdPx: string;

    /*!
     * Fee currency
     */
    feeCcy: string;

    /*!
     * Fee and rebate
     * For spot and margin, it is accumulated fee charged by the platform. It is always negative, e.g. -0.01.
     * For Futures, Swap and Options, it is accumulated fee and rebate
     */
    fee: string;

    /*!
     * Rebate currency
     */
    rebateCcy: string;

    /*!
     * Order source
     * `13`:The generated limit order after the strategy order is triggered
     */
    source: string;

    /*!
     * Rebate amount, only applicable to spot and margin, the reward of placing orders from the platform (rebate) given to user who has reached the specified trading level. If there is no rebate, this field is &#34;&#34;.
     */
    rebate: string;

    /*!
     * Profit and loss, Applicable to orders which have a trade and aim to close position. It always is 0 in other conditions
     */
    pnl: string;

    /*!
     * Category
     * `normal`
     * `twap`
     * `adl`
     * `full_liquidation`
     * `partial_liquidation`
     * `delivery`
     * `ddh`
     */
    category: string;

    /*!
     * Whether the order can only reduce the position size. Valid options: true or false.
     */
    reduceOnly: string;

    /*!
     * Code of the cancellation source.
     */
    cancelSource: string;

    /*!
     * Reason for the cancellation.
     */
    cancelSourceReason: string;

    /*!
     * Client-supplied Algo ID. There will be a value when algo order attaching `algoClOrdId` is triggered, or it will be &#34;&#34;.
     */
    algoClOrdId: string;

    /*!
     * Algo ID. There will be a value when algo order is triggered, or it will be &#34;&#34;.
     */
    algoId: string;

    /*!
     * Update time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

  }

  export type GetOrderHistoryLast7DaysResponse = OkxResponse<GetOrderHistoryLast7DaysData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-order-history-last-3-months
   */
  export interface GetOrderHistoryLast3MonthsRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-200927`
     */
    instId?: string;

    /*!
     * Order type
     * `market`: Market order
     * `limit`: Limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order
     */
    ordType?: string;

    /*!
     * State
     * `canceled`
     * `filled`
     */
    state?: string;

    /*!
     * Category
     * `twap`
     * `adl`
     * `full_liquidation`
     * `partial_liquidation`
     * `delivery`
     * `ddh`
     */
    category?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ordId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ordId`
     */
    before?: string;

    /*!
     * Filter with a begin timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    begin?: string;

    /*!
     * Filter with an end timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    end?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetOrderHistoryLast3MonthsData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Price
     */
    px: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Order type
     * `market`: Market order
     * `limit`: Limit order
     * `post_only`: Post-only order
     * `fok`: Fill-or-kill order
     * `ioc`: Immediate-or-cancel order
     * `optimal_limit_ioc`: Market order with immediate-or-cancel order
     */
    ordType: string;

    /*!
     * Order side
     */
    side: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Trade mode
     */
    tdMode: string;

    /*!
     * Accumulated fill quantity
     */
    accFillSz: string;

    /*!
     * Last filled price. If none is filled, it will return &#34;&#34;.
     */
    fillPx: string;

    /*!
     * Last trade ID
     */
    tradeId: string;

    /*!
     * Last filled quantity
     */
    fillSz: string;

    /*!
     * Last filled time
     */
    fillTime: string;

    /*!
     * Average filled price. If none is filled, it will return &#34;&#34;.
     */
    avgPx: string;

    /*!
     * State
     * `canceled`
     * `filled`
     */
    state: string;

    /*!
     * Leverage, from `0.01` to `125`.
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    lever: string;

    /*!
     * Take-profit trigger price.
     */
    tpTriggerPx: string;

    /*!
     * Take-profit trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    tpTriggerPxType: string;

    /*!
     * Take-profit order price.
     */
    tpOrdPx: string;

    /*!
     * Stop-loss trigger price.
     */
    slTriggerPx: string;

    /*!
     * Stop-loss trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    slTriggerPxType: string;

    /*!
     * Stop-loss order price.
     */
    slOrdPx: string;

    /*!
     * Fee currency
     */
    feeCcy: string;

    /*!
     * Fee and rebate
     * For spot and margin, it is accumulated fee charged by the platform. It is always negative, e.g. -0.01.
     * For Futures, Swap and Options, it is accumulated fee and rebate
     */
    fee: string;

    /*!
     * Order source
     * `13`:The generated limit order after the strategy order is triggered
     */
    source: string;

    /*!
     * Rebate currency
     */
    rebateCcy: string;

    /*!
     * Rebate amount, only applicable to spot and margin, the reward of placing orders from the platform (rebate) given to user who has reached the specified trading level. If there is no rebate, this field is &#34;&#34;.
     */
    rebate: string;

    /*!
     * Profit and loss, Applicable to orders which have a trade and aim to close position. It always is 0 in other conditions
     */
    pnl: string;

    /*!
     * Category
     * `normal`
     * `twap`
     * `adl`
     * `full_liquidation`
     * `partial_liquidation`
     * `delivery`
     * `ddh`
     */
    category: string;

    /*!
     * Whether the order can only reduce the position size. Valid options: true or false.
     */
    reduceOnly: string;

    /*!
     * Code of the cancellation source.
     */
    cancelSource: string;

    /*!
     * Reason for the cancellation.
     */
    cancelSourceReason: string;

    /*!
     * Client-supplied Algo ID. There will be a value when algo order attaching `algoClOrdId` is triggered, or it will be &#34;&#34;.
     */
    algoClOrdId: string;

    /*!
     * Algo ID. There will be a value when algo order is triggered, or it will be &#34;&#34;.
     */
    algoId: string;

    /*!
     * Update time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

  }

  export type GetOrderHistoryLast3MonthsResponse = OkxResponse<GetOrderHistoryLast3MonthsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-transaction-details-last-3-days
   */
  export interface GetTransactionDetailsLast3DaysRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId?: string;

    /*!
     * Order ID
     */
    ordId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `billId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `billId`
     */
    before?: string;

    /*!
     * Filter with a begin timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    begin?: string;

    /*!
     * Filter with an end timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    end?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetTransactionDetailsLast3DaysData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Last trade ID
     */
    tradeId: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Bill ID
     */
    billId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Last filled price
     */
    fillPx: string;

    /*!
     * Last filled quantity
     */
    fillSz: string;

    /*!
     * Order side,  `buy`  `sell`
     */
    side: string;

    /*!
     * Position side
     * `long`  `short`
     * it returns `net` in`net` mode.
     */
    posSide: string;

    /*!
     * Liquidity taker or maker, `T`: taker  `M`: maker
     */
    execType: string;

    /*!
     * Fee currency
     */
    feeCcy: string;

    /*!
     * Fee
     */
    fee: string;

    /*!
     * Data generation time,  Unix timestamp format in milliseconds, e.g. `1597026383085`.
     */
    ts: string;

    /*!
     * Trade time which is the same as `fillTime` for the order channel.
     */
    fillTime: string;

  }

  export type GetTransactionDetailsLast3DaysResponse = OkxResponse<GetTransactionDetailsLast3DaysData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-transaction-details-last-3-months
   */
  export interface GetTransactionDetailsLast3MonthsRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId?: string;

    /*!
     * Order ID
     */
    ordId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `billId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `billId`
     */
    before?: string;

    /*!
     * Filter with a begin timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    begin?: string;

    /*!
     * Filter with an end timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    end?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetTransactionDetailsLast3MonthsData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Last trade ID
     */
    tradeId: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Bill ID
     */
    billId: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Last filled price
     */
    fillPx: string;

    /*!
     * Last filled quantity
     */
    fillSz: string;

    /*!
     * Order side,  `buy`  `sell`
     */
    side: string;

    /*!
     * Position side
     * `long`  `short`
     * it returns `net` in`net` mode.
     */
    posSide: string;

    /*!
     * Liquidity taker or maker, `T`: taker  `M`: maker
     */
    execType: string;

    /*!
     * Fee currency
     */
    feeCcy: string;

    /*!
     * Fee
     */
    fee: string;

    /*!
     * Data generation time,  Unix timestamp format in milliseconds, e.g. `1597026383085`.
     */
    ts: string;

    /*!
     * Trade time which is the same as `fillTime` for the order channel.
     */
    fillTime: string;

  }

  export type GetTransactionDetailsLast3MonthsResponse = OkxResponse<GetTransactionDetailsLast3MonthsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-algo-order
   */
  export interface PlaceAlgoOrderRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-190927-5000-C`
     */
    instId: string;

    /*!
     * Trade mode
     * Margin mode `cross` `isolated`
     * Non-Margin mode `cash`
     */
    tdMode: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy?: string;

    /*!
     * Order side, `buy` `sell`
     */
    side: string;

    /*!
     * Position side
     * Required in `long/short` mode and only be `long` or `short`
     */
    posSide?: string;

    /*!
     * Order type
     * `conditional`: One-way stop order
     * `oco`: One-cancels-the-other order
     * `trigger`: Trigger order
     * `move_order_stop`: Trailing order
     * `iceberg`: Iceberg order
     * `twap`: TWAP order
     */
    ordType: string;

    /*!
     * Quantity to buy or sell
     * Either `sz` or `closeFraction` is required.
     */
    sz?: string;

    /*!
     * Order tag
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 16 characters.
     */
    tag?: string;

    /*!
     * Whether the order can only reduce the position size.
     * Valid options: `true` or `false`. The default value is `false`.
     * Only applicable to `MARGIN` orders, and `FUTURES/SWAP` orders in `net` mode
     * Only applicable to `Single-currency margin` and `Multi-currency margin`
     */
    reduceOnly?: boolean;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` traded with Market buy `conditional` order
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy?: string;

    /*!
     * Client-supplied Algo ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    algoClOrdId?: string;

    /*!
     * Fraction of position to be closed when the algo order is triggered.
     * Currently the system supports fully closing the position only so the only accepted value is `1`.
     * This is only applicable to `FUTURES` or `SWAP` instruments.
     * This is only applicable if `posSide` is `net`.
     * This is only applicable if `reduceOnly` is `true`.
     * This is only applicable if `ordType` is `conditional` or `oco`.
     * This is only applicable if the stop loss and take profit order is executed as market order
     * Either `sz` or `closeFraction` is required.
     */
    closeFraction?: string;

    /*!
     * Quick Margin type. Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     * The default value is `manual`
     */
    quickMgnType?: string;

  }

  export type PlaceAlgoOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type PlaceAlgoOrderResponse = OkxResponse<PlaceAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-algo-order
   */
  export interface CancelAlgoOrderRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

  }

  export type CancelAlgoOrderData = {
    /*!
     * Order ID
     */
    algoId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type CancelAlgoOrderResponse = OkxResponse<CancelAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-amend-algo-order
   */
  export interface AmendAlgoOrderRequestParams {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * Whether the order needs to be automatically canceled when the order amendment fails
     * Valid options: `false` or `true`, the default is `false`.
     */
    cxlOnFail?: boolean;

    /*!
     * Client Request ID as assigned by the client for order amendment
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     * The response will include the corresponding `reqId` to help you identify the request if you provide it in the request.
     */
    reqId?: string;

    /*!
     * New quantity after amendment.
     */
    newSz?: string;

    /*!
     * Take-profit trigger price.
     * Either the take-profit trigger price or order price is 0, it means that the take-profit is deleted
     */
    newTpTriggerPx?: string;

    /*!
     * Take-profit order price
     * If the price is -1, take-profit will be executed at the market price.
     */
    newTpOrdPx?: string;

    /*!
     * Stop-loss trigger price.
     * Either the stop-loss trigger price or order price is 0, it means that the stop-loss is deleted
     */
    newSlTriggerPx?: string;

    /*!
     * Stop-loss order price
     * If the price is -1, stop-loss will be executed at the market price.
     */
    newSlOrdPx?: string;

    /*!
     * Take-profit trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    newTpTriggerPxType?: string;

    /*!
     * Stop-loss trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    newSlTriggerPxType?: string;

  }

  export type AmendAlgoOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * Client Request ID as assigned by the client for order amendment.
     */
    reqId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type AmendAlgoOrderResponse = OkxResponse<AmendAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-cancel-advance-algo-order
   */
  export interface CancelAdvanceAlgoOrderRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

  }

  export type CancelAdvanceAlgoOrderData = {
    /*!
     * Order ID
     */
    algoId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type CancelAdvanceAlgoOrderResponse = OkxResponse<CancelAdvanceAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-algo-order-details
   */
  export interface GetAlgoOrderDetailsRequestParams {
    /*!
     * Algo ID
     * Either `algoId` or `algoClOrdId` is required.If both are passed, `algoId` will be used.
     */
    algoId?: string;

    /*!
     * Client-supplied Algo ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    algoClOrdId?: string;

  }

  export type GetAlgoOrderDetailsData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Fraction of position to be closed when the algo order is triggered
     */
    closeFraction: string;

    /*!
     * Order type
     */
    ordType: string;

    /*!
     * Order side
     */
    side: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Trade mode
     */
    tdMode: string;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy: string;

    /*!
     * State
     * `live`
     * `pause`
     * `partially_effective`
     * `effective`
     * `canceled`
     * `order_failed`
     */
    state: string;

    /*!
     * Leverage, from `0.01` to `125`.
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    lever: string;

    /*!
     * Take-profit trigger price.
     */
    tpTriggerPx: string;

    /*!
     * Take-profit trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    tpTriggerPxType: string;

    /*!
     * Take-profit order price.
     */
    tpOrdPx: string;

    /*!
     * Stop-loss trigger price.
     */
    slTriggerPx: string;

    /*!
     * Stop-loss trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    slTriggerPxType: string;

    /*!
     * Stop-loss order price.
     */
    slOrdPx: string;

    /*!
     * trigger price.
     */
    triggerPx: string;

    /*!
     * trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    triggerPxType: string;

    /*!
     * Order price
     */
    ordPx: string;

    /*!
     * Actual order quantity
     */
    actualSz: string;

    /*!
     * Actual order price
     */
    actualPx: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Actual trigger side, `tp`: take profit `sl`: stop loss
     */
    actualSide: string;

    /*!
     * Trigger time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    triggerTime: string;

    /*!
     * Price ratio
     * Only applicable to `iceberg` order or `twap` order
     */
    pxVar: string;

    /*!
     * Price variance
     * Only applicable to `iceberg` order or `twap` order
     */
    pxSpread: string;

    /*!
     * Average amount
     * Only applicable to `iceberg` order or `twap` order
     */
    szLimit: string;

    /*!
     * Price Limit
     * Only applicable to `iceberg` order or `twap` order
     */
    pxLimit: string;

    /*!
     * Time interval
     * Only applicable to `twap` order
     */
    timeInterval: string;

    /*!
     * Callback price ratio
     * Only applicable to `move_order_stop` order
     */
    callbackRatio: string;

    /*!
     * Callback price variance
     * Only applicable to `move_order_stop` order
     */
    callbackSpread: string;

    /*!
     * Active price
     * Only applicable to `move_order_stop` order
     */
    activePx: string;

    /*!
     * Trigger price
     * Only applicable to `move_order_stop` order
     */
    moveTriggerPx: string;

    /*!
     * Whether the order can only reduce the position size. Valid options: true or false.
     */
    reduceOnly: string;

    /*!
     * Quick Margin type, Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     */
    quickMgnType: string;

    /*!
     * Last filled price while placing
     */
    last: string;

    /*!
     * It represents that the reason that algo order fails to trigger. It is &#34;&#34; when the state is `effective`/`canceled`. There will be value when the state is `order_failed`, e.g. 51008;
     * Only applicable to Stop Order, Trailing Stop Order, Trigger order.
     */
    failCode: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * Creation time Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

  }

  export type GetAlgoOrderDetailsResponse = OkxResponse<GetAlgoOrderDetailsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-algo-order-list
   */
  export interface GetAlgoOrderListRequestParams {
    /*!
     * Order type
     * `conditional`: One-way stop order
     * `oco`: One-cancels-the-other order
     * `trigger`: Trigger order
     * `move_order_stop`: Trailing order
     * `iceberg`: Iceberg order
     * `twap`: TWAP order
     */
    ordType: string;

    /*!
     * Algo ID
     */
    algoId?: string;

    /*!
     * Client-supplied Algo ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    algoClOrdId?: string;

    /*!
     * Instrument type
     * `SPOT`
     * `SWAP`
     * `FUTURES`
     * `MARGIN`
     */
    instType?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `algoId`.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetAlgoOrderListData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Fraction of position to be closed when the algo order is triggered
     */
    closeFraction: string;

    /*!
     * Order type
     */
    ordType: string;

    /*!
     * Order side
     */
    side: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Trade mode
     */
    tdMode: string;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` traded with Market order
     */
    tgtCcy: string;

    /*!
     * State,`live` `pause` `partially_effective`
     */
    state: string;

    /*!
     * Leverage, from `0.01` to `125`.
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    lever: string;

    /*!
     * Take-profit trigger price
     */
    tpTriggerPx: string;

    /*!
     * Take-profit trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    tpTriggerPxType: string;

    /*!
     * Take-profit order price
     */
    tpOrdPx: string;

    /*!
     * Stop-loss trigger price
     */
    slTriggerPx: string;

    /*!
     * Stop-loss trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    slTriggerPxType: string;

    /*!
     * Stop-loss order price
     */
    slOrdPx: string;

    /*!
     * Trigger price
     */
    triggerPx: string;

    /*!
     * Trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    triggerPxType: string;

    /*!
     * Order price
     */
    ordPx: string;

    /*!
     * Actual order quantity
     */
    actualSz: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Actual order price
     */
    actualPx: string;

    /*!
     * Actual trigger side
     * `tp`: take profit `sl`: stop loss
     */
    actualSide: string;

    /*!
     * Trigger time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    triggerTime: string;

    /*!
     * Price ratio
     * Only applicable to `iceberg` order or `twap` order
     */
    pxVar: string;

    /*!
     * Price variance
     * Only applicable to `iceberg` order or `twap` order
     */
    pxSpread: string;

    /*!
     * Average amount
     * Only applicable to `iceberg` order or `twap` order
     */
    szLimit: string;

    /*!
     * Price Limit
     * Only applicable to `iceberg` order or `twap` order
     */
    pxLimit: string;

    /*!
     * Time interval
     * Only applicable to `twap` order
     */
    timeInterval: string;

    /*!
     * Callback price ratio
     * Only applicable to `move_order_stop` order
     */
    callbackRatio: string;

    /*!
     * Callback price variance
     * Only applicable to `move_order_stop` order
     */
    callbackSpread: string;

    /*!
     * Active price
     * Only applicable to `move_order_stop` order
     */
    activePx: string;

    /*!
     * Trigger price
     * Only applicable to `move_order_stop` order
     */
    moveTriggerPx: string;

    /*!
     * Whether the order can only reduce the position size. Valid options: true or false.
     */
    reduceOnly: string;

    /*!
     * Quick Margin type, Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     */
    quickMgnType: string;

    /*!
     * Last filled price while placing
     */
    last: string;

    /*!
     * It represents that the reason that algo order fails to trigger. There will be value when the state is `order_failed`, e.g. 51008;
     * For this endpoint, it always is &#34;&#34;.
     */
    failCode: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

  }

  export type GetAlgoOrderListResponse = OkxResponse<GetAlgoOrderListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-algo-order-history
   */
  export interface GetAlgoOrderHistoryRequestParams {
    /*!
     * Order type
     * `conditional`: One-way stop order
     * `oco`: One-cancels-the-other order
     * `trigger`: Trigger order
     * `move_order_stop`: Trailing order
     * `iceberg`: Iceberg order
     * `twap`: TWAP order
     */
    ordType: string;

    /*!
     * State
     * `effective`
     * `canceled`
     * `order_failed`
     * Either `state` or `algoId` is requied
     */
    state?: string;

    /*!
     * Algo ID
     * Either `state` or `algoId` is required.
     */
    algoId?: string;

    /*!
     * Instrument type
     * `SPOT`
     * `SWAP`
     * `FUTURES`
     * `MARGIN`
     */
    instType?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927`
     */
    instId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`
     */
    after?: string;

    /*!
     * Pagination of data to return records new than the requested `algoId`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetAlgoOrderHistoryData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Margin currency
     * Only applicable to `cross` `MARGIN` orders in `Single-currency margin`.
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clOrdId: string;

    /*!
     * Quantity to buy or sell
     */
    sz: string;

    /*!
     * Fraction of position to be closed when the algo order is triggered
     */
    closeFraction: string;

    /*!
     * Order type
     */
    ordType: string;

    /*!
     * Order side
     */
    side: string;

    /*!
     * Position side
     */
    posSide: string;

    /*!
     * Trade mode
     */
    tdMode: string;

    /*!
     * Order quantity unit setting for `sz`
     * `base_ccy`: Base currency ,`quote_ccy`: Quote currency
     * Only applicable to `SPOT` Market Orders
     * Default is `quote_ccy` for buy, `base_ccy` for sell
     */
    tgtCcy: string;

    /*!
     * State
     * `effective`
     * `canceled`
     * `order_failed`
     */
    state: string;

    /*!
     * Leverage, from `0.01` to `125`.
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    lever: string;

    /*!
     * Take-profit trigger price.
     */
    tpTriggerPx: string;

    /*!
     * Take-profit trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    tpTriggerPxType: string;

    /*!
     * Take-profit order price.
     */
    tpOrdPx: string;

    /*!
     * Stop-loss trigger price.
     */
    slTriggerPx: string;

    /*!
     * Stop-loss trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    slTriggerPxType: string;

    /*!
     * Stop-loss order price.
     */
    slOrdPx: string;

    /*!
     * trigger price.
     */
    triggerPx: string;

    /*!
     * trigger price type.
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     */
    triggerPxType: string;

    /*!
     * Order price
     */
    ordPx: string;

    /*!
     * Actual order quantity
     */
    actualSz: string;

    /*!
     * Actual order price
     */
    actualPx: string;

    /*!
     * Order tag
     */
    tag: string;

    /*!
     * Actual trigger side, `tp`: take profit `sl`: stop loss
     */
    actualSide: string;

    /*!
     * Trigger time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    triggerTime: string;

    /*!
     * Price ratio
     * Only applicable to `iceberg` order or `twap` order
     */
    pxVar: string;

    /*!
     * Price variance
     * Only applicable to `iceberg` order or `twap` order
     */
    pxSpread: string;

    /*!
     * Average amount
     * Only applicable to `iceberg` order or `twap` order
     */
    szLimit: string;

    /*!
     * Price Limit
     * Only applicable to `iceberg` order or `twap` order
     */
    pxLimit: string;

    /*!
     * Time interval
     * Only applicable to `twap` order
     */
    timeInterval: string;

    /*!
     * Callback price ratio
     * Only applicable to `move_order_stop` order
     */
    callbackRatio: string;

    /*!
     * Callback price variance
     * Only applicable to `move_order_stop` order
     */
    callbackSpread: string;

    /*!
     * Active price
     * Only applicable to `move_order_stop` order
     */
    activePx: string;

    /*!
     * Trigger price
     * Only applicable to `move_order_stop` order
     */
    moveTriggerPx: string;

    /*!
     * Whether the order can only reduce the position size. Valid options: true or false.
     */
    reduceOnly: string;

    /*!
     * Quick Margin type, Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     */
    quickMgnType: string;

    /*!
     * Last filled price while placing
     */
    last: string;

    /*!
     * It represents that the reason that algo order fails to trigger. It is &#34;&#34; when the state is `effective`/`canceled`. There will be value when the state is `order_failed`, e.g. 51008;
     * Only applicable to Stop Order, Trailing Stop Order, Trigger order.
     */
    failCode: string;

    /*!
     * Client Algo Order ID as assigned by the client.
     */
    algoClOrdId: string;

    /*!
     * Creation time Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

  }

  export type GetAlgoOrderHistoryResponse = OkxResponse<GetAlgoOrderHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-easy-convert-currency-list
   */
  export interface GetEasyConvertCurrencyListRequestParams {
  }

  export type GetEasyConvertCurrencyListData = {
    /*!
     * Currently owned and convertible small currency list
     */
    fromData: any[];

    /*!
     * Type of mainstream currency convert to, e.g. USDT
     */
    toCcy: any[];

  }

  export type GetEasyConvertCurrencyListResponse = OkxResponse<GetEasyConvertCurrencyListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-place-easy-convert
   */
  export interface PlaceEasyConvertRequestParams {
    /*!
     * Type of small payment currency convert from
     * Maximum 5 currencies can be selected in one order. If there are multiple currencies, separate them with commas.
     */
    fromCcy: any[];

    /*!
     * Type of mainstream currency convert to
     * Only one receiving currency type can be selected in one order and cannot be the same as the small payment currencies.
     */
    toCcy: string;

  }

  export type PlaceEasyConvertData = {
    /*!
     * Current status of easy convert
     * `running`: Running
     * `filled`: Filled
     * `failed`: Failed
     */
    status: string;

    /*!
     * Type of small payment currency convert from
     */
    fromCcy: string;

    /*!
     * Type of mainstream currency convert to
     */
    toCcy: string;

    /*!
     * Filled amount of small payment currency convert from
     */
    fillFromSz: string;

    /*!
     * Filled amount of mainstream currency convert to
     */
    fillToSz: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    uTime: string;

  }

  export type PlaceEasyConvertResponse = OkxResponse<PlaceEasyConvertData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-easy-convert-history
   */
  export interface GetEasyConvertHistoryRequestParams {
    /*!
     * Pagination of data to return records earlier than the requested time, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested time, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100. The default is 100.
     */
    limit?: string;

  }

  export type GetEasyConvertHistoryData = {
    /*!
     * Type of small payment currency convert from
     */
    fromCcy: string;

    /*!
     * Amount of small payment currency convert from
     */
    fromSz: string;

    /*!
     * Type of mainstream currency convert to
     */
    toCcy: string;

    /*!
     * Amount of mainstream currency convert to
     */
    toSz: string;

    /*!
     * Current status of easy convert
     * `running`: Running
     * `filled`: Filled
     * `failed`: Failed
     */
    status: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

  }

  export type GetEasyConvertHistoryResponse = OkxResponse<GetEasyConvertHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-one-click-repay-currency-list
   */
  export interface GetOneClickRepayCurrencyListRequestParams {
    /*!
     * Debt type
     * `cross`: cross
     * `isolated`: isolated
     */
    debtType?: string;

  }

  export type GetOneClickRepayCurrencyListData = {
    /*!
     * Debt currency data list
     */
    debtData: any[];

    /*!
     * Debt type
     * `cross`: cross
     * `isolated`: isolated
     */
    debtType: string;

    /*!
     * Repay currency data list
     */
    repayData: any[];

  }

  export type GetOneClickRepayCurrencyListResponse = OkxResponse<GetOneClickRepayCurrencyListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-trade-one-click-repay
   */
  export interface TradeOneClickRepayRequestParams {
    /*!
     * Debt currency type
     * Maximum 5 currencies can be selected in one order. If there are multiple currencies, separate them with commas.
     */
    debtCcy: any[];

    /*!
     * Repay currency type
     * Only one receiving currency type can be selected in one order and cannot be the same as the small payment currencies.
     */
    repayCcy: string;

  }

  export type TradeOneClickRepayData = {
    /*!
     * Current status of one-click repay
     * `running`: Running
     * `filled`: Filled
     * `failed`: Failed
     */
    status: string;

    /*!
     * Debt currency type
     */
    debtCcy: string;

    /*!
     * Repay currency type
     */
    repayCcy: string;

    /*!
     * Filled amount of debt currency
     */
    fillDebtSz: string;

    /*!
     * Filled amount of repay currency
     */
    fillRepaySz: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    uTime: string;

  }

  export type TradeOneClickRepayResponse = OkxResponse<TradeOneClickRepayData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trade-get-one-click-repay-history
   */
  export interface GetOneClickRepayHistoryRequestParams {
    /*!
     * Pagination of data to return records earlier than the requested time, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested time, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100. The default is 100.
     */
    limit?: string;

  }

  export type GetOneClickRepayHistoryData = {
    /*!
     * Debt currency type
     */
    debtCcy: string;

    /*!
     * Amount of debt currency transacted
     */
    debtSz: string;

    /*!
     * Repay currency type
     */
    repayCcy: string;

    /*!
     * Amount of repay currency transacted
     */
    repaySz: string;

    /*!
     * Current status of one-click repay
     * `running`: Running
     * `filled`: Filled
     * `failed`: Failed
     */
    status: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    uTime: string;

  }

  export type GetOneClickRepayHistoryResponse = OkxResponse<GetOneClickRepayHistoryData>;

}
export namespace funding {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-currencies
   */
  export interface GetCurrenciesRequestParams {
    /*!
     * Single currency or multiple currencies (no more than 20) separated with comma, e.g. `BTC` or `BTC,ETH`.
     */
    ccy?: string;

  }

  export type GetCurrenciesData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Name of currency. There is no related name when it is not shown.
     */
    name: string;

    /*!
     * Logo link of currency
     */
    logoLink: string;

    /*!
     * Chain name, e.g. `USDT-ERC20`, `USDT-TRC20`, `USDT-Omni`
     */
    chain: string;

    /*!
     * Availability to deposit from chain.
     * `false`: not available  `true`: available
     */
    canDep: boolean;

    /*!
     * Availability to withdraw to chain.
     * `false`: not available  `true`: available
     */
    canWd: boolean;

    /*!
     * Availability to internal transfer.
     * `false`: not available  `true`: available
     */
    canInternal: boolean;

    /*!
     * Minimum deposit amount of the currency in a single transaction
     */
    minDep: string;

    /*!
     * Minimum withdrawal amount of the currency in a single transaction
     */
    minWd: string;

    /*!
     * Maximum amount of currency withdrawal in a single transaction
     */
    maxWd: string;

    /*!
     * Withdrawal precision, indicating the number of digits after the decimal point.
     * The withdrawal fee precision kept the same with withdrawal precision.
     * The accuracy of internal transfer withdrawal is 8 decimal places.
     */
    wdTickSz: string;

    /*!
     * Withdrawal limit in the past 24 hours, unit in `USD`
     */
    wdQuota: string;

    /*!
     * Amount of currency withdrawal used in the past 24 hours, unit in `USD`
     */
    usedWdQuota: string;

    /*!
     * Minimum withdrawal fee
     */
    minFee: string;

    /*!
     * Maximum withdrawal fee
     */
    maxFee: string;

    /*!
     * If current chain is main net then return `true`, otherwise return `false`
     */
    mainNet: boolean;

    /*!
     * Whether tag/memo information is required for withdrawal
     */
    needTag: boolean;

    /*!
     * Minimum number of blockchain confirmations to acknowledge fund deposit. Account is credited after that but the deposit cannot be withdrawn
     */
    minDepArrivalConfirm: string;

    /*!
     * Minimum number of blockchain confirmations required for withdrawal of a deposit
     */
    minWdUnlockConfirm: string;

    /*!
     * Fixed deposit limit, unit in `USD`
     * Return empty string if there is no deposit limit
     */
    depQuotaFixed: string;

    /*!
     * Used amount of fixed deposit quota, unit in `USD`
     * Return empty string if there is no deposit limit
     */
    usedDepQuotaFixed: string;

    /*!
     * Layer2 network daily deposit limit
     */
    depQuoteDailyLayer2: string;

  }

  export type GetCurrenciesResponse = OkxResponse<GetCurrenciesData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-balance
   */
  export interface GetBalanceRequestParams {
    /*!
     * Single currency or multiple currencies (no more than 20) separated with comma, e.g. `BTC` or `BTC,ETH`.
     */
    ccy?: string;

  }

  export type GetBalanceData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Balance
     */
    bal: string;

    /*!
     * Frozen balance
     */
    frozenBal: string;

    /*!
     * Available balance
     * The balance that can be withdrawn or transferred or used for spot trading
     */
    availBal: string;

  }

  export type GetBalanceResponse = OkxResponse<GetBalanceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-non-tradable-assets
   */
  export interface GetNonTradableAssetsRequestParams {
    /*!
     * Single currency or multiple currencies (no more than 20) separated with comma, e.g. `BTC` or `BTC,ETH`.
     */
    ccy?: string;

  }

  export type GetNonTradableAssetsData = {
    /*!
     * Currency, e.g. `USD_BSC`
     */
    ccy: string;

    /*!
     * Chinese name of currency. There is no related name when it is not shown.
     */
    name: string;

    /*!
     * Logo link of currency
     */
    logoLink: string;

    /*!
     * Withdrawable balance
     */
    bal: string;

    /*!
     * Availability to withdraw to chain.
     * `false`: not available  `true`: available
     */
    canWd: boolean;

    /*!
     * Chain for withdrawal
     */
    chain: string;

    /*!
     * Minimum withdrawal amount of the currency in a single transaction
     */
    minWd: string;

    /*!
     * Whether all assets in this currency must be withdrawn at one time
     */
    wdAll: string;

    /*!
     * Fixed withdrawal fee, unit in `USDT`. Withdrawal fee precision is 8 digits after the decimal point.
     */
    fee: string;

    /*!
     * Last 6 digits of contract address
     */
    ctAddr: string;

    /*!
     * Withdrawal precision, indicating the number of digits after the decimal point
     */
    wdTickSz: string;

    /*!
     * Whether tag/memo information is required for withdrawal
     */
    needTag: boolean;

  }

  export type GetNonTradableAssetsResponse = OkxResponse<GetNonTradableAssetsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-account-asset-valuation
   */
  export interface GetAccountAssetValuationRequestParams {
    /*!
     * Asset valuation calculation unit
     * BTC, USDT
     * USD, CNY, JP, KRW, RUB, EUR
     * VND, IDR, INR, PHP, THB, TRY
     * AUD, SGD, ARS, SAR, AED, IQD
     * The default is the valuation in BTC.
     */
    ccy?: string;

  }

  export type GetAccountAssetValuationData = {
    /*!
     * Valuation of total account assets
     */
    totalBal: string;

    /*!
     * Unix timestamp format in milliseconds, e.g.`1597026383085`
     */
    ts: string;

    /*!
     * Asset valuation details for each account
     */
    details: any;

  }

  export type GetAccountAssetValuationResponse = OkxResponse<GetAccountAssetValuationData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-funds-transfer
   */
  export interface FundsTransferRequestParams {
    /*!
     * Currency, e.g. `USDT`
     */
    ccy: string;

    /*!
     * Amount to be transferred
     */
    amt: string;

    /*!
     * The remitting account
     * `6`: Funding account, `18`: Trading account
     */
    from: string;

    /*!
     * The beneficiary account
     * `6`: Funding account, `18`: Trading account
     */
    to: string;

    /*!
     * Name of the sub-account
     * When `type` is 1, 2 or 4, sub-account is required.
     */
    subAcct?: string;

    /*!
     * Transfer type
     * `0`: transfer within account
     * `1`: master account to sub-account (Only applicable to API Key from master account)
     * `2`: sub-account to master account (Only applicable to API Key from master account)
     * `3`: sub-account to master account (Only applicable to APIKey from sub-account)
     * `4`: sub-account to sub-account (Only applicable to APIKey from sub-account, and target account needs to be another sub-account which belongs to same master account)
     * The default is `0`.
     */
    type?: string;

    /*!
     * Whether or not borrowed coins can be transferred out under `Multi-currency margin` and `Portfolio margin`
     * the default is `false`
     */
    loanTrans?: boolean;

    /*!
     * Client-supplied ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clientId?: string;

    /*!
     * Ignore position risk
     * Default is `false`
     * Applicable to `Portfolio margin`
     */
    omitPosRisk?: string;

  }

  export type FundsTransferData = {
    /*!
     * Transfer ID
     */
    transId: string;

    /*!
     * Client-supplied ID
     */
    clientId: string;

    /*!
     * Currency
     */
    ccy: string;

    /*!
     * The remitting account
     */
    from: string;

    /*!
     * Transfer amount
     */
    amt: string;

    /*!
     * The beneficiary account
     */
    to: string;

  }

  export type FundsTransferResponse = OkxResponse<FundsTransferData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-funds-transfer-state
   */
  export interface GetFundsTransferStateRequestParams {
    /*!
     * Transfer ID
     * Either transId or clientId is required. If both are passed, transId will be used.
     */
    transId?: string;

    /*!
     * Client-supplied ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clientId?: string;

    /*!
     * Transfer type
     * `0`: transfer within account
     * `1`: master account to sub-account (Only applicable to API Key from master account)
     * `2`: sub-account to master account (Only applicable to API Key from master account)
     * `3`: sub-account to master account (Only applicable to APIKey from sub-account)
     * `4`: sub-account to sub-account (Only applicable to APIKey from sub-account, and target account needs to be another sub-account which belongs to same master account)
     * The default is `0`
     */
    type?: string;

  }

  export type GetFundsTransferStateData = {
    /*!
     * Transfer ID
     */
    transId: string;

    /*!
     * Client-supplied ID
     */
    clientId: string;

    /*!
     * Currency, e.g. `USDT`
     */
    ccy: string;

    /*!
     * Amount to be transferred
     */
    amt: string;

    /*!
     * Transfer type
     * `0`: transfer within account
     * `1`: master account to sub-account (Only applicable to API Key from master account)
     * `2`: sub-account to master account (Only applicable to APIKey from master account)
     * `3`: sub-account to master account (Only applicable to APIKey from sub-account)
     * `4`: sub-account to sub-account (Only applicable to APIKey from sub-account, and target account needs to be another sub-account which belongs to same master account)
     */
    type: string;

    /*!
     * The remitting account
     * `6`: Funding account `18`: Trading account
     */
    from: string;

    /*!
     * The beneficiary account
     * `6`: Funding account `18`: Trading account
     */
    to: string;

    /*!
     * Name of the sub-account
     */
    subAcct: string;

    /*!
     * deprecated
     */
    instId: string;

    /*!
     * deprecated
     */
    toInstId: string;

    /*!
     * Transfer state
     * `success`, `pending`, `failed`
     */
    state: string;

  }

  export type GetFundsTransferStateResponse = OkxResponse<GetFundsTransferStateData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-asset-bills-details
   */
  export interface AssetBillsDetailsRequestParams {
    /*!
     * Currency
     */
    ccy?: string;

    /*!
     * Bill type
     * `1`: Deposit
     * `2`: Withdrawal
     * `13`: Canceled withdrawal
     * `20`: Transfer to sub account (for master account)
     * `21`: Transfer from sub account (for master account)
     * `22`: Transfer out from sub to master account (for sub-account)
     * `23`: Transfer in from master to sub account (for sub-account)
     * `28`: Manually claimed Airdrop
     * `47`: System reversal
     * `48`: Event Reward
     * `49`: Event Giveaway
     * `50`: Received from appointments
     * `51`: Deducted from appointments
     * `52`: Red packet sent
     * `53`: Red packet snatched
     * `54`: Red packet refunded
     * `61`: Conversion
     * `68`: Claim rebate card
     * `69`: Distribute rebate card
     * `72`: Token received
     * `73`: Token given away
     * `74`: Token refunded
     * `75`: Subscription to savings
     * `76`: Redemption to savings
     * `77`: Distribute
     * `78`: Lock up
     * `79`: Node voting
     * `80`: Staking
     * `81`: Vote redemption
     * `82`: Staking redemption
     * `83`: Staking yield
     * `84`: Violation fee
     * `85`: PoW mining yield
     * `86`: Cloud mining pay
     * `87`: Cloud mining yield
     * `88`: Subsidy
     * `89`: Staking
     * `90`: Staking subscription
     * `91`: staking redemption
     * `92`: Add collateral
     * `93`: Redeem collateral
     * `94`: Investment
     * `95`: Borrower borrows
     * `96`: Principal transferred in
     * `97`: Borrower transferred loan out
     * `98`: Borrower transferred interest out
     * `99`: Investor transferred interest in
     * `102`: Prepayment penalty transferred in
     * `103`: Prepayment penalty transferred out
     * `104`: Mortgage fee transferred in
     * `105`: Mortgage fee transferred out
     * `106`: Overdue fee transferred in
     * `107`: Overdue fee transferred out
     * `108`: Overdue interest transferred out
     * `109`: Overdue interest transferred in
     * `110`: Collateral for closed position transferred in
     * `111`: Collateral for closed position transferred out
     * `112`: Collateral for liquidation transferred in
     * `113`: Collateral for liquidation transferred out
     * `114`: Insurance fund transferred in
     * `115`: Insurance fund transferred out
     * `116`: Place an order
     * `117`: Fulfill an order
     * `118`: Cancel an order
     * `119`: Merchants unlock deposit
     * `120`: Merchants add deposit
     * `121`: FiatGateway Place an order
     * `122`: FiatGateway Cancel an order
     * `123`: FiatGateway Fulfill an order
     * `124`: Jumpstart unlocking
     * `125`: Manual deposit
     * `126`: Interest deposit
     * `127`: Investment fee transferred in
     * `128`: Investment fee transferred out
     * `129`: Rewards transferred in
     * `130`: Transferred from Trading account
     * `131`: Transferred to Trading account
     * `132`: Frozen by customer service
     * `133`: Unfrozen by customer service
     * `134`: Transferred by customer service
     * `135`: Cross chain exchange
     * `136`: Convert
     * `137`: ETH 2.0 Subscription
     * `138`: ETH 2.0 Swapping
     * `139`: ETH 2.0 Earnings
     * `143`: System Reverse
     * `144`: Transfer out of unified account reserve
     * `145`: Reward Expired
     * `146`: Customer feedback
     * `147`: vested sushi rewards
     * `150`: Affiliate commission
     * `151`: Referral reward
     * `152`: Broker reward
     * `153`: Joiner reward
     * `154`: Mystery box reward
     * `155`: Rewards withdraw
     * `156`: Fee rebate
     * `157`: Collected crypto
     * `160`: Dual Investment subscribe
     * `161`: Dual Investment collection
     * `162`: Dual Investment profit
     * `163`: Dual Investment refund
     * `169`: 2022 new year rewards
     * `172`: Sub-affiliate commission
     * `173`: Fee rebate
     * `174`: Pay
     * `175`: Locked collateral
     * `176`: Loan
     * `177`: Added collateral
     * `178`: Returned collateral
     * `179`: Repayment
     * `180`: Unlocked collateral
     * `181`: Airdrop Payment
     * `182`: Feedback bounty
     * `183`: Invite friends rewards
     * `184`: Divide the reward pool
     * `185`: Broker Convert Reward
     * `186`: FreeETH
     * `187`: Convert transfer
     * `188`: Slot Auction Conversion
     * `189`: Mystery box bonus
     * `193`: Card payment Buy
     * `195`: Untradable asset withdrawal
     * `196`: Untradable asset withdrawal revoked
     * `197`: Untradable asset deposit
     * `198`: Untradable asset collection reduce
     * `199`: Untradable asset collection increase
     * `200`: Buy
     * `202`: Price Lock Subscribe
     * `203`: Price Lock Collection
     * `204`: Price Lock Profit
     * `205`: Price Lock Refund
     * `207`: Dual Investment Lite Subscribe
     * `208`: Dual Investment Lite Collection
     * `209`: Dual Investment Lite Profit
     * `210`: Dual Investment Lite Refund
     * `211`: Win crypto with Satoshi
     * `212`: Multi-collateral loan collateral locked
     * `213`: Collateral transfered out from user account
     * `214`: Collateral returned to users
     * `215`: Multi-collateral loan collateral released
     * `216`: Loan transferred to user&#39;s account
     * `217`: Multi-collateral loan borrowed
     * `218`: Multi-collateral loan repaid
     * `219`: Repayment transferred from user&#39;s account
     * `220`: Delisted crypto
     * `221`: Blockchain&#39;s withdrawal fee
     * `222`: Withdrawal fee refund
     * `223`: Profit share
     * `224`: Service fee
     * `225`: Shark Fin subscribe
     * `226`: Shark Fin collection
     * `227`: Shark Fin profit
     * `228`: Shark Fin refund
     * `229`: Airdrop
     * `230`: Token migration completed
     * `232`: Subsidized interest received
     * `233`: Broker rebate compensation
     * `284`: Transfer out trading sub-account
     * `285`: Transfer in trading sub-account
     * `286`: Transfer out custody funding account
     * `287`: Transfer in custody funding account
     * `288`: Custody fund delegation
     * `289`: Custody fund undelegation
     */
    type?: string;

    /*!
     * Client-supplied ID for transfer or withdrawal
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clientId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type AssetBillsDetailsData = {
    /*!
     * Bill ID
     */
    billId: string;

    /*!
     * Account balance currency
     */
    ccy: string;

    /*!
     * Client-supplied ID for transfer or withdrawal
     */
    clientId: string;

    /*!
     * Change in balance at the account level
     */
    balChg: string;

    /*!
     * Balance at the account level
     */
    bal: string;

    /*!
     * Bill type
     */
    type: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g.`1597026383085`
     */
    ts: string;

  }

  export type AssetBillsDetailsResponse = OkxResponse<AssetBillsDetailsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-lightning-deposits
   */
  export interface LightningDepositsRequestParams {
    /*!
     * Token symbol. Currently only `BTC` is supported.
     */
    ccy: string;

    /*!
     * Deposit amount between 0.000001 - 0.1
     */
    amt: string;

    /*!
     * Receiving account
     * `6`: Funding account
     * `18`: Trading account
     * If empty, will default to funding account.
     */
    to?: string;

  }

  export type LightningDepositsData = {
    /*!
     * Invoice text
     */
    invoice: string;

    /*!
     * Invoice creation time
     */
    cTime: string;

  }

  export type LightningDepositsResponse = OkxResponse<LightningDepositsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-deposit-address
   */
  export interface GetDepositAddressRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

  }

  export type GetDepositAddressData = {
    /*!
     * Deposit address
     */
    addr: string;

    /*!
     * Deposit tag (This will not be returned if the currency does not require a tag for deposit)
     */
    tag: string;

    /*!
     * Deposit memo (This will not be returned if the currency does not require a payment_id for deposit)
     */
    memo: string;

    /*!
     * Deposit payment ID (This will not be returned if the currency does not require a payment_id for deposit)
     */
    pmtId: string;

    /*!
     * Deposit address attachment (This will not be returned if the currency does not require this)
     * e.g. `TONCOIN` attached tag name is `comment`, the return will be `{&#39;comment&#39;:&#39;123456&#39;}`
     */
    addrEx: any;

    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Chain name, e.g. `USDT-ERC20`, `USDT-TRC20`, `USDT-Omni`
     */
    chain: string;

    /*!
     * The beneficiary account
     * `6`: Funding account `18`: Trading account
     */
    to: string;

    /*!
     * Return `true` if the current deposit address is selected by the website page
     */
    selected: boolean;

    /*!
     * Last 6 digits of contract address
     */
    ctAddr: string;

  }

  export type GetDepositAddressResponse = OkxResponse<GetDepositAddressData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-deposit-history
   */
  export interface GetDepositHistoryRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * Deposit ID
     */
    depId?: string;

    /*!
     * Internal transfer initiator&#39;s withdrawal ID
     * If the deposit comes from internal transfer, this field displays the withdrawal ID of the internal transfer initiator
     */
    fromWdId?: string;

    /*!
     * Hash record of the deposit
     */
    txId?: string;

    /*!
     * Deposit Type
     * `3`: internal transfer
     * `4`: deposit from chain
     */
    type?: string;

    /*!
     * Status of deposit
     * `0`: waiting for confirmation
     * `1`: deposit credited
     * `2`: deposit successful
     * `8`: pending due to temporary deposit suspension on this crypto currency
     * `11`: match the address blacklist
     * `12`: account or deposit is frozen
     * `13`: sub-account deposit interception
     * `14`: KYC limit
     */
    state?: string;

    /*!
     * Pagination of data to return records earlier than the requested ts, Unix timestamp format in milliseconds, e.g. `1654041600000`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested ts, Unix timestamp format in milliseconds, e.g. `1656633600000`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: any;

  }

  export type GetDepositHistoryData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Chain name
     */
    chain: string;

    /*!
     * Deposit amount
     */
    amt: string;

    /*!
     * Deposite account
     * If the deposit comes from an internal transfer, this field displays the account information of the internal transfer initiator, which can be mobile phone number, email address, account name, and will return &#34;&#34; in other cases
     */
    from: string;

    /*!
     * If `from` is a phone number, this parameter return area code of the phone number
     */
    areaCodeFrom: string;

    /*!
     * Deposit address
     * If the deposit comes from the on-chain, this field displays the on-chain address, and will return &#34;&#34; in other cases
     */
    to: string;

    /*!
     * Hash record of the deposit
     */
    txId: string;

    /*!
     * Time that the deposit is credited, Unix timestamp format in milliseconds, e.g. `1655251200000`
     */
    ts: string;

    /*!
     * Status of deposit
     * `0`: waiting for confirmation
     * `1`: deposit credited
     * `2`: deposit successful
     * `8`: pending due to temporary deposit suspension on this crypto currency
     * `11`: match the address blacklist
     * `12`: account or deposit is frozen
     * `13`: sub-account deposit interception
     * `14`: KYC limit
     */
    state: string;

    /*!
     * Deposit ID
     */
    depId: string;

    /*!
     * Internal transfer initiator&#39;s withdrawal ID
     * If the deposit comes from internal transfer, this field displays the withdrawal ID of the internal transfer initiator, and will return &#34;&#34; in other cases
     */
    fromWdId: string;

    /*!
     * Actual amount of blockchain confirm in a single deposit
     */
    actualDepBlkConfirm: string;

  }

  export type GetDepositHistoryResponse = OkxResponse<GetDepositHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-withdrawal
   */
  export interface WithdrawalRequestParams {
    /*!
     * Currency, e.g. `USDT`
     */
    ccy: string;

    /*!
     * Withdrawal amount
     */
    amt: string;

    /*!
     * Withdrawal method
     * `3`: internal
     * `4`: on chain
     */
    dest: string;

    /*!
     * If your `dest` is `4`,`toAddr` should be a trusted crypto currency address. Some crypto currency addresses are formatted as `&#39;address:tag&#39;`, e.g. `&#39;ARDOR-7JF3-8F2E-QUWZ-CAN7F:123456&#39;`
     * If your `dest` is `3`,`toAddr` should be a recipient address which can be email, phone or login account name.
     */
    toAddr: string;

    /*!
     * Transaction fee
     */
    fee: string;

    /*!
     * Chain name
     * There are multiple chains under some currencies, such as `USDT` has `USDT-ERC20`, `USDT-TRC20`, and `USDT-Omni`.
     * If the parameter is not filled in, the default will be the main chain.
     * When you withdrawal the non-tradable asset, if the parameter is not filled in, the default will be the unique withdrawal chain.
     */
    chain?: string;

    /*!
     * Area code for the phone number
     * If `toAddr` is a phone number, this parameter is required.
     */
    areaCode?: string;

    /*!
     * Client-supplied ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clientId?: string;

  }

  export type WithdrawalData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Chain name, e.g. `USDT-ERC20`, `USDT-TRC20`, `USDT-Omni`
     */
    chain: string;

    /*!
     * Withdrawal amount
     */
    amt: string;

    /*!
     * Withdrawal ID
     */
    wdId: string;

    /*!
     * Client-supplied ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clientId: string;

  }

  export type WithdrawalResponse = OkxResponse<WithdrawalData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-lightning-withdrawals
   */
  export interface LightningWithdrawalsRequestParams {
    /*!
     * Token symbol. Currently only `BTC` is supported.
     */
    ccy: string;

    /*!
     * Invoice text
     */
    invoice: string;

    /*!
     * Lightning withdrawal memo
     */
    memo?: string;

  }

  export type LightningWithdrawalsData = {
    /*!
     * Withdrawal ID
     */
    wdId: string;

    /*!
     * Withdrawal ID creation time
     */
    cTime: string;

  }

  export type LightningWithdrawalsResponse = OkxResponse<LightningWithdrawalsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-cancel-withdrawal
   */
  export interface CancelWithdrawalRequestParams {
    /*!
     * Withdrawal ID
     */
    wdId: string;

  }

  export type CancelWithdrawalData = {
    /*!
     * Withdrawal ID
     */
    wdId: string;

  }

  export type CancelWithdrawalResponse = OkxResponse<CancelWithdrawalData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-withdrawal-history
   */
  export interface GetWithdrawalHistoryRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * Withdrawal ID
     */
    wdId?: string;

    /*!
     * Client-supplied ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clientId?: string;

    /*!
     * Hash record of the deposit
     */
    txId?: string;

    /*!
     * Withdrawal type
     * `3`: internal transfer
     * `4`: withdrawal to chain
     */
    type?: string;

    /*!
     * Status of withdrawal
     * `-3`：canceling
     * `-2`：canceled
     * `-1`：failed
     * `0`：waiting withdrawal
     * `1`：withdrawing
     * `2`：withdraw success
     * `7`: approved
     * `10`: waiting transfer
     * `4`, `5`, `6`, `8`, `9`, `12`: waiting mannual review
     */
    state?: string;

    /*!
     * Pagination of data to return records earlier than the requested ts, Unix timestamp format in milliseconds, e.g. `1654041600000`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested ts, Unix timestamp format in milliseconds, e.g. `1656633600000`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetWithdrawalHistoryData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Chain name, e.g. `USDT-ERC20`, `USDT-TRC20`, `USDT-Omni`
     */
    chain: string;

    /*!
     * Whether it is a non-tradable asset or not
     * `true`: non-tradable asset, `false`: tradable asset
     */
    nonTradableAsset: boolean;

    /*!
     * Withdrawal amount
     */
    amt: string;

    /*!
     * Time the withdrawal request was submitted, Unix timestamp format in milliseconds, e.g. `1655251200000`.
     */
    ts: string;

    /*!
     * Withdrawal account
     * It can be email/phone
     */
    from: string;

    /*!
     * Area code for the phone number
     * If `from` is a phone number, this parameter returns the area code for the phone number
     */
    areaCodeFrom: string;

    /*!
     * Receiving address
     */
    to: string;

    /*!
     * Area code for the phone number
     * If `to` is a phone number, this parameter returns the area code for the phone number
     */
    areaCodeTo: string;

    /*!
     * Some currencies require a tag for withdrawals. This is not returned if not required.
     */
    tag: string;

    /*!
     * Some currencies require a payment ID for withdrawals. This is not returned if not required.
     */
    pmtId: string;

    /*!
     * Some currencies require this parameter for withdrawals. This is not returned if not required.
     */
    memo: string;

    /*!
     * Withdrawal address attachment (This will not be returned if the currency does not require this) e.g. TONCOIN attached tag name is comment, the return will be {&#39;comment&#39;:&#39;123456&#39;}
     */
    addrEx: any;

    /*!
     * Hash record of the withdrawal.
     * This parameter will returned &#34;&#34; for internal transfers.
     */
    txId: string;

    /*!
     * Withdrawal fee amount
     */
    fee: string;

    /*!
     * Withdrawal fee currency, e.g. `USDT`
     */
    feeCcy: string;

    /*!
     * Status of withdrawal
     * `-3`：canceling
     * `-2`：canceled
     * `-1`：failed
     * `0`：waiting withdrawal
     * `1`：withdrawing
     * `2`：withdraw success
     * `7`: approved
     * `10`: waiting transfer
     * `4`, `5`, `6`, `8`, `9`, `12`: waiting mannual review
     */
    state: string;

    /*!
     * Withdrawal ID
     */
    wdId: string;

    /*!
     * Client-supplied ID
     */
    clientId: string;

  }

  export type GetWithdrawalHistoryResponse = OkxResponse<GetWithdrawalHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-get-deposit-withdraw-status
   */
  export interface GetDepositWithdrawStatusRequestParams {
    /*!
     * Withdrawl ID, use to retrieve withdrawal status
     * Required to input one and only one of `wdId` and `txId`
     */
    wdId?: string;

    /*!
     * Hash record of the deposit, use to retrieve deposit status
     * Required to input one and only one of `wdId` and `txId`
     */
    txId?: string;

    /*!
     * Currency type, e.g. `USDT`
     * Required when retrieving deposit status with `txId`
     */
    ccy?: string;

    /*!
     * To address, the destination address in deposit
     * Required when retrieving deposit status with `txId`
     */
    to?: string;

    /*!
     * Currency chain infomation, e.g. USDT-ERC20
     * Required when retrieving deposit status with `txId`
     */
    chain?: string;

  }

  export type GetDepositWithdrawStatusData = {
    /*!
     * Estimated complete time
     * The timezone is UTC+8. The format is MM/dd/yyyy, h:mm:ss AM/PM
     * estCompleteTime is only an approximate estimated time, for reference only.
     */
    estCompleteTime: string;

    /*!
     * The detailed stage and status of the deposit/withdrawal
     * The message in front of the colun is the stage; the message after the colun is the ongoing status.
     */
    state: string;

    /*!
     * Hash record of the deposit
     * When retrieving withdrawal status, txId returns blank &#34;&#34;. txId will be returned with value if txId is generated for withdrawal at the time.
     */
    txId: string;

    /*!
     * Withdrawal ID
     * When retrieving deposit status, wdId returns blank &#34;&#34;.
     */
    wdId: string;

  }

  export type GetDepositWithdrawStatusResponse = OkxResponse<GetDepositWithdrawStatusData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-funding-small-assets-convert
   */
  export interface SmallAssetsConvertRequestParams {
    /*!
     * Small assets needed to be convert, e.g. [&#34;BTC&#34;,&#34;USDT&#34;]
     */
    ccy: any;

  }

  export type SmallAssetsConvertData = {
    /*!
     * Total quantity of `OKB` after conversion
     */
    totalCnvAmt: string;

    /*!
     * Details of asset conversion
     */
    details: any;

  }

  export type SmallAssetsConvertResponse = OkxResponse<SmallAssetsConvertData>;

}
export namespace convert {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-get-convert-currencies
   */
  export interface GetConvertCurrenciesRequestParams {
  }

  export type GetConvertCurrenciesData = {
    /*!
     * Currency, e.g. BTC
     */
    ccy: string;

    /*!
     * Minimum amount to convert ( Deprecated )
     */
    min: string;

    /*!
     * Maximum amount to convert ( Deprecated )
     */
    max: string;

  }

  export type GetConvertCurrenciesResponse = OkxResponse<GetConvertCurrenciesData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-get-convert-currency-pair
   */
  export interface GetConvertCurrencyPairRequestParams {
    /*!
     * Currency to convert from, e.g. `USDT`
     */
    fromCcy: string;

    /*!
     * Currency to convert to, e.g. `BTC`
     */
    toCcy: string;

  }

  export type GetConvertCurrencyPairData = {
    /*!
     * Currency pair, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Base currency, e.g. `BTC` in `BTC-USDT`
     */
    baseCcy: string;

    /*!
     * Maximum amount of base currency
     */
    baseCcyMax: string;

    /*!
     * Minimum amount of base currency
     */
    baseCcyMin: string;

    /*!
     * Quote currency, e.g. `USDT` in `BTC-USDT`
     */
    quoteCcy: string;

    /*!
     * Maximum amount of quote currency
     */
    quoteCcyMax: string;

    /*!
     * Minimum amount of quote currency
     */
    quoteCcyMin: string;

  }

  export type GetConvertCurrencyPairResponse = OkxResponse<GetConvertCurrencyPairData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-estimate-quote
   */
  export interface EstimateQuoteRequestParams {
    /*!
     * Base currency, e.g. `BTC` in `BTC-USDT`
     */
    baseCcy: string;

    /*!
     * Quote currency, e.g. `USDT` in `BTC-USDT`
     */
    quoteCcy: string;

    /*!
     * Trade side based on `baseCcy`
     * `buy` `sell`
     */
    side: string;

    /*!
     * RFQ amount
     */
    rfqSz: string;

    /*!
     * RFQ currency
     */
    rfqSzCcy: string;

    /*!
     * Client Order ID as assigned by the client
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clQReqId?: string;

    /*!
     * Order tag
     * Applicable to broker user
     */
    tag?: string;

  }

  export type EstimateQuoteData = {
    /*!
     * Quotation generation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    quoteTime: string;

    /*!
     * Validity period of quotation in milliseconds
     */
    ttlMs: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clQReqId: string;

    /*!
     * Quote ID
     */
    quoteId: string;

    /*!
     * Base currency, e.g. `BTC` in `BTC-USDT`
     */
    baseCcy: string;

    /*!
     * Quote currency, e.g. `USDT` in `BTC-USDT`
     */
    quoteCcy: string;

    /*!
     * Trade side based on `baseCcy`
     */
    side: string;

    /*!
     * Original RFQ amount
     */
    origRfqSz: string;

    /*!
     * Real RFQ amount
     */
    rfqSz: string;

    /*!
     * RFQ currency
     */
    rfqSzCcy: string;

    /*!
     * Convert price based on quote currency
     */
    cnvtPx: string;

    /*!
     * Convert amount of base currency
     */
    baseSz: string;

    /*!
     * Convert amount of quote currency
     */
    quoteSz: string;

  }

  export type EstimateQuoteResponse = OkxResponse<EstimateQuoteData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-convert-trade
   */
  export interface ConvertTradeRequestParams {
    /*!
     * Quote ID
     */
    quoteId: string;

    /*!
     * Base currency, e.g. `BTC` in `BTC-USDT`
     */
    baseCcy: string;

    /*!
     * Quote currency, e.g. `USDT` in `BTC-USDT`
     */
    quoteCcy: string;

    /*!
     * Trade side based on `baseCcy`
     * `buy` `sell`
     */
    side: string;

    /*!
     * Quote amount
     * The quote amount should no more then RFQ amount
     */
    sz: string;

    /*!
     * Quote currency
     */
    szCcy: string;

    /*!
     * Client Order ID as assigned by the client
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    clTReqId?: string;

    /*!
     * Order tag
     * Applicable to broker user
     */
    tag?: string;

  }

  export type ConvertTradeData = {
    /*!
     * Trade ID
     */
    tradeId: string;

    /*!
     * Quote ID
     */
    quoteId: string;

    /*!
     * Client Order ID as assigned by the client
     */
    clTReqId: string;

    /*!
     * Trade state
     * `fullyFilled` : success
     * `rejected` : failed
     */
    state: string;

    /*!
     * Currency pair, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Base currency, e.g. `BTC` in `BTC-USDT`
     */
    baseCcy: string;

    /*!
     * Quote currency, e.g. `USDT` in `BTC-USDT`
     */
    quoteCcy: string;

    /*!
     * Trade side based on `baseCcy`
     * `buy` `sell`
     */
    side: string;

    /*!
     * Filled price based on quote currency
     */
    fillPx: string;

    /*!
     * Filled amount for base currency
     */
    fillBaseSz: string;

    /*!
     * Filled amount for quote currency
     */
    fillQuoteSz: string;

    /*!
     * Convert trade time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type ConvertTradeResponse = OkxResponse<ConvertTradeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-convert-get-convert-history
   */
  export interface GetConvertHistoryRequestParams {
    /*!
     * Pagination of data to return records earlier than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

    /*!
     * Order tag
     * Applicable to broker user
     */
    tag?: string;

  }

  export type GetConvertHistoryData = {
    /*!
     * Trade ID
     */
    tradeId: string;

    /*!
     * Trade state
     * `fullyFilled` : success
     * `rejected` : failed
     */
    state: string;

    /*!
     * Currency pair, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Base currency, e.g. `BTC` in `BTC-USDT`
     */
    baseCcy: string;

    /*!
     * Quote currency, e.g. `USDT` in `BTC-USDT`
     */
    quoteCcy: string;

    /*!
     * Trade side based on `baseCcy`
     * `buy` `sell`
     */
    side: string;

    /*!
     * Filled price based on quote currency
     */
    fillPx: string;

    /*!
     * Filled amount for base currency
     */
    fillBaseSz: string;

    /*!
     * Filled amount for quote currency
     */
    fillQuoteSz: string;

    /*!
     * Convert trade time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetConvertHistoryResponse = OkxResponse<GetConvertHistoryData>;

}
export namespace account {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-balance
   */
  export interface GetBalanceRequestParams {
    /*!
     * Single currency or multiple currencies (no more than 20) separated with comma, e.g. `BTC` or `BTC,ETH`.
     */
    ccy?: string;

  }

  export type GetBalanceData = {
    /*!
     * Update time of account information, millisecond format of Unix timestamp, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * The total amount of equity in USD
     */
    totalEq: string;

    /*!
     * Isolated margin equity in USD
     * Applicable to `Single-currency margin` and `Multi-currency margin` and `Portfolio margin`
     */
    isoEq: string;

    /*!
     * Adjusted / Effective equity in USD
     * The net fiat value of the assets in the account that can provide margins for spot, futures, perpetual swap and options under the cross margin mode.
     * Cause in multi-ccy or PM mode, the asset and margin requirement will all be converted to USD value to process the order check or liquidation.
     * Due to the volatility of each currency market, our platform calculates the actual USD value of each currency based on discount rates to balance market risks.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    adjEq: string;

    /*!
     * Cross margin frozen for pending orders in USD
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    ordFroz: string;

    /*!
     * Initial margin requirement in USD
     * The sum of initial margins of all open positions and pending orders under cross margin mode in USD.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    imr: string;

    /*!
     * Maintenance margin requirement in USD
     * The sum of maintenance margins of all open positions under cross margin mode in USD.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    mmr: string;

    /*!
     * Margin ratio in USD
     * The index for measuring the risk of a certain asset in the account.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    mgnRatio: string;

    /*!
     * Notional value of positions in `USD`
     * Applicable to `Multi-currency margin`  and `Portfolio margin`
     */
    notionalUsd: string;

    /*!
     * Detailed asset information in all currencies
     */
    details: any[];

  }

  export type GetBalanceResponse = OkxResponse<GetBalanceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-positions
   */
  export interface GetPositionsRequestParams {
    /*!
     * Instrument type
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     * `instId` will be checked against `instType` when both parameters are passed.
     */
    instType?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927-5000-C`. Single instrument ID or multiple instrument IDs (no more than 10) separated with comma
     */
    instId?: string;

    /*!
     * Single position ID or multiple position IDs (no more than 20) separated with comma.
     * There is attribute expiration, the posId and position information will be cleared if it is more than 30 days after the last close position.
     */
    posId?: string;

  }

  export type GetPositionsData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Margin mode
     * `cross`
     * `isolated`
     */
    mgnMode: string;

    /*!
     * Position ID
     */
    posId: string;

    /*!
     * Position side
     * `long`, `pos` is positive
     * `short`, `pos` is positive
     * `net` (`FUTURES/SWAP/OPTION`: positive `pos` means long position and negative `pos` means short position. For `MARGIN`, `pos` is always positive, `posCcy` being base currency means long position, `posCcy` being quote currency means short position.)
     */
    posSide: string;

    /*!
     * Quantity of positions. In the mode of autonomous transfer from position to position, after the deposit is transferred, a position with pos of `0` will be generated
     */
    pos: string;

    /*!
     * Base currency balance, only applicable to `MARGIN`（Manual transfers and Quick Margin Mode）
     */
    baseBal: string;

    /*!
     * Quote currency balance, only applicable to `MARGIN`（Manual transfers and Quick Margin Mode）
     */
    quoteBal: string;

    /*!
     * Base currency amount already borrowed, only applicable to MARGIN(Quick Margin Mode）
     */
    baseBorrowed: string;

    /*!
     * Base Interest, undeducted interest that has been incurred, only applicable to MARGIN(Quick Margin Mode）
     */
    baseInterest: string;

    /*!
     * Quote currency amount already borrowed, only applicable to MARGIN(Quick Margin Mode）
     */
    quoteBorrowed: string;

    /*!
     * Quote Interest, undeducted interest that has been incurred, only applicable to MARGIN(Quick Margin Mode）
     */
    quoteInterest: string;

    /*!
     * Position currency, only applicable to `MARGIN` positions.
     */
    posCcy: string;

    /*!
     * Position that can be closed
     * Only applicable to `MARGIN`, `FUTURES/SWAP` in the `long-short` mode, OPTION in `Simple` and `isolated` `OPTION` in margin Account.
     */
    availPos: string;

    /*!
     * Average open price
     */
    avgPx: string;

    /*!
     * Mark price
     */
    markPx: string;

    /*!
     * Unrealized profit and loss calculated by mark price.
     */
    upl: string;

    /*!
     * Unrealized profit and loss ratio calculated by mark price.
     */
    uplRatio: string;

    /*!
     * Unrealized profit and loss calculated by last price. Main usage is showing, actual value is upl.
     */
    uplLastPx: string;

    /*!
     * Unrealized profit and loss ratio calculated by last price.
     */
    uplRatioLastPx: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-180216`
     */
    instId: string;

    /*!
     * Leverage, not applicable to `OPTION`
     */
    lever: string;

    /*!
     * Estimated liquidation price
     * Not applicable to `OPTION`
     */
    liqPx: string;

    /*!
     * Initial margin requirement, only applicable to `cross`.
     */
    imr: string;

    /*!
     * Margin, can be added or reduced. Only applicable to `isolated`.
     */
    margin: string;

    /*!
     * Margin ratio
     */
    mgnRatio: string;

    /*!
     * Maintenance margin requirement
     */
    mmr: string;

    /*!
     * Liabilities, only applicable to `MARGIN`.
     */
    liab: string;

    /*!
     * Liabilities currency, only applicable to `MARGIN`.
     */
    liabCcy: string;

    /*!
     * Interest. Undeducted interest that has been incurred.
     */
    interest: string;

    /*!
     * Last trade ID
     */
    tradeId: string;

    /*!
     * Option Value, only applicable to `OPTION`.
     */
    optVal: string;

    /*!
     * Notional value of positions in `USD`
     */
    notionalUsd: string;

    /*!
     * Auto-deleveraging (ADL) indicator
     * Divided into 5 levels, from 1 to 5, the smaller the number, the weaker the adl intensity.
     */
    adl: string;

    /*!
     * Currency used for margin
     */
    ccy: string;

    /*!
     * Latest traded price
     */
    last: string;

    /*!
     * USD price
     */
    usdPx: string;

    /*!
     * delta：Black-Scholes Greeks in dollars,only applicable to `OPTION`
     */
    deltaBS: string;

    /*!
     * delta：Greeks in coins,only applicable to `OPTION`
     */
    deltaPA: string;

    /*!
     * gamma：Black-Scholes Greeks in dollars,only applicable to `OPTION`
     */
    gammaBS: string;

    /*!
     * gamma：Greeks in coins,only applicable to `OPTION`
     */
    gammaPA: string;

    /*!
     * theta：Black-Scholes Greeks in dollars,only applicable to `OPTION`
     */
    thetaBS: string;

    /*!
     * theta：Greeks in coins,only applicable to `OPTION`
     */
    thetaPA: string;

    /*!
     * vega：Black-Scholes Greeks in dollars,only applicable to `OPTION`
     */
    vegaBS: string;

    /*!
     * vega：Greeks in coins,only applicable to `OPTION`
     */
    vegaPA: string;

    /*!
     * Spot in use amount
     * Applicable to `Portfolio margin`
     */
    spotInUseAmt: string;

    /*!
     * Spot in use unit, e.g. `BTC`
     * Applicable to `Portfolio margin`
     */
    spotInUseCcy: string;

    /*!
     * External business id, e.g. experience coupon id
     */
    bizRefId: string;

    /*!
     * External business type
     */
    bizRefType: string;

    /*!
     * Close position algo orders attached to the position. This array will have values only after you request &#34;Place algo order&#34; with `closeFraction`=1.
     */
    closeOrderAlgo: any[];

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Latest time position was adjusted, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

  }

  export type GetPositionsResponse = OkxResponse<GetPositionsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-positions-history
   */
  export interface GetPositionsHistoryRequestParams {
    /*!
     * Instrument type
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId?: string;

    /*!
     * Margin mode
     * `cross` `isolated`
     */
    mgnMode?: string;

    /*!
     * The type of closing position
     * `1`：Close position partially;`2`：Close all;`3`：Liquidation;`4`：Partial liquidation; `5`：ADL;
     * It is the latest type if there are several types for the same position.
     */
    type?: string;

    /*!
     * Position ID. There is attribute expiration, the posId and position information will be cleared if it is more than 30 days after the last close position.
     */
    posId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `uTime`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `uTime`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100. The default is 100.
     */
    limit?: string;

  }

  export type GetPositionsHistoryData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Margin mode
     * `cross` `isolated`
     */
    mgnMode: string;

    /*!
     * The type of closing position
     * `1`：Close position partially;`2`：Close all;`3`：Liquidation;`4`：Partial liquidation; `5`：ADL;
     * It is the latest type if there are several types for the same position.
     */
    type: string;

    /*!
     * Created time of position
     */
    cTime: string;

    /*!
     * Updated time of position
     */
    uTime: string;

    /*!
     * Average price of opening position
     */
    openAvgPx: string;

    /*!
     * Average price of closing position
     */
    closeAvgPx: string;

    /*!
     * Position ID
     */
    posId: string;

    /*!
     * Max quantity of position
     */
    openMaxPos: string;

    /*!
     * Position&#39;s cumulative closed volume
     */
    closeTotalPos: string;

    /*!
     * Profit and loss
     */
    pnl: string;

    /*!
     * P&amp;amp;L ratio
     */
    pnlRatio: string;

    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Direction: `long` `short`
     * Only applicable to `MARGIN/FUTURES/SWAP/OPTION`
     */
    direction: string;

    /*!
     * trigger mark price
     */
    triggerPx: string;

    /*!
     * Estimated liquidation price
     */
    liqPx: string;

    /*!
     * Underlying
     */
    uly: string;

  }

  export type GetPositionsHistoryResponse = OkxResponse<GetPositionsHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-account-and-position-risk
   */
  export interface GetAccountAndPositionRiskRequestParams {
    /*!
     * Instrument type
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

  }

  export type GetAccountAndPositionRiskData = {
    /*!
     * Update time of account information, millisecond format of Unix timestamp, e.g. `1597026383085`
     */
    ts: string;

    /*!
     * Adjusted / Effective equity in USD
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    adjEq: string;

    /*!
     * Detailed asset information in all currencies
     */
    balData: any[];

    /*!
     * Detailed position information in all currencies
     */
    posData: any[];

  }

  export type GetAccountAndPositionRiskResponse = OkxResponse<GetAccountAndPositionRiskData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-bills-details-last-7-days
   */
  export interface GetBillsDetailsLast7DaysRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Bill currency
     */
    ccy?: string;

    /*!
     * Margin mode
     * `isolated`
     * `cross`
     */
    mgnMode?: string;

    /*!
     * Contract type
     * `linear`
     * `inverse`
     * Only applicable to `FUTURES/SWAP`
     */
    ctType?: string;

    /*!
     * Bill type
     * `1`: Transfer `2`: Trade `3`: Delivery `4`: Auto token conversion `5`: Liquidation `6`: Margin transfer `7`: Interest deduction `8`: Funding fee `9`: ADL `10`: Clawback `11`: System token conversion `12`: Strategy transfer `13`: ddh `14`: Block trade `15`: Quick Margin `18`: Profit sharing `22`: Repay
     */
    type?: string;

    /*!
     * Bill subtype
     * `1`: Buy `2`: Sell `3`: Open long `4`: Open short `5`: Close long `6`: Close short `9`: Interest deduction for Market loans `11`: Transfer in `12`: Transfer out `14`: Interest deduction for VIP loans `160`: Manual margin increase `161`: Manual margin decrease `162`: Auto margin increase `114`: Auto buy `115`: Auto sell `118`: System token conversion transfer in `119`: System token conversion transfer out `100`: Partial liquidation close long `101`: Partial liquidation close short `102`: Partial liquidation buy `103`: Partial liquidation sell `104`: Liquidation long `105`: Liquidation short `106`: Liquidation buy `107`: Liquidation sell `108`:clawback `110`: Liquidation transfer in `111`: Liquidation transfer out `125`: ADL close long `126`: ADL close short `127`: ADL buy `128`: ADL sell `131`: ddh buy `132`: ddh sell `170`: Exercised `171`: Counterparty exercised `172`: Expired OTM `112`: Delivery long `113`: Delivery short `117`: Delivery/Exercise clawback `173`: Funding fee expense `174`: Funding fee income `200`:System transfer in `201`: Manually transfer in `202`: System transfer out `203`: Manually transfer out `204`: block trade buy `205`: block trade sell `206`: block trade open long `207`: block trade open short  `208`: block trade close open  `209`: block trade close short `210`: Manual Borrowing `211`: Manual Repayment `212`: Auto borrow `213`: Auto repay `16`: Repay forcibly `17`: Repay interest by borrowing forcibly `224`: repayment transfer in  `225`: repayment transfer out `250`: Profit sharing expenses; `251`: Profit sharing refund; `252`: Profit sharing income;
     */
    subType?: string;

    /*!
     * Pagination of data to return records earlier than the requested bill ID.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested bill ID.
     */
    before?: string;

    /*!
     * Filter with a begin timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    begin?: string;

    /*!
     * Filter with an end timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    end?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetBillsDetailsLast7DaysData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Bill ID
     */
    billId: string;

    /*!
     * Bill type
     */
    type: string;

    /*!
     * Bill subtype
     */
    subType: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g.`1597026383085`
     */
    ts: string;

    /*!
     * Change in balance amount at the account level
     */
    balChg: string;

    /*!
     * Change in balance amount at the position level
     */
    posBalChg: string;

    /*!
     * Balance at the account level
     */
    bal: string;

    /*!
     * Balance at the position level
     */
    posBal: string;

    /*!
     * Quantity
     */
    sz: string;

    /*!
     * Account balance currency
     */
    ccy: string;

    /*!
     * Profit and loss
     */
    pnl: string;

    /*!
     * Fee
     * Negative number represents the user transaction fee charged by the platform.
     * Positive number represents rebate.
     */
    fee: string;

    /*!
     * Margin mode
     * `isolated` `cross`
     * When bills are not generated by position changes, the field returns &#34;&#34;
     */
    mgnMode: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927-5000-C`
     */
    instId: string;

    /*!
     * Order ID
     * When bill type is not `trade`, the field returns &#34;&#34;
     */
    ordId: string;

    /*!
     * Liquidity taker or maker, `T`：taker `M`：maker
     */
    execType: string;

    /*!
     * The remitting account
     * `6`: FUNDING `18`: Trading account
     * Only applicable to `transfer`. When bill type is not `transfer`, the field returns &#34;&#34;.
     */
    from: string;

    /*!
     * The beneficiary account
     * `6`: FUNDING `18`: Trading account
     * Only applicable to `transfer`. When bill type is not `transfer`, the field returns &#34;&#34;.
     */
    to: string;

    /*!
     * Notes
     * Only applicable to `transfer`. When bill type is not `transfer`, the field returns &#34;&#34;.
     */
    notes: string;

  }

  export type GetBillsDetailsLast7DaysResponse = OkxResponse<GetBillsDetailsLast7DaysData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-bills-details-last-3-months
   */
  export interface GetBillsDetailsLast3MonthsRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Bill currency
     */
    ccy?: string;

    /*!
     * Margin mode
     * `isolated`
     * `cross`
     */
    mgnMode?: string;

    /*!
     * Contract type
     * `linear`
     * `inverse`
     * Only applicable to `FUTURES/SWAP`
     */
    ctType?: string;

    /*!
     * Bill type
     * `1`: Transfer `2`: Trade `3`: Delivery `4`: Auto token conversion `5`: Liquidation `6`: Margin transfer `7`: Interest deduction `8`: Funding fee `9`: ADL `10`: Clawback `11`: System token conversion `12`: Strategy transfer `13`: ddh `14`: Block trade `15`: Quick Margin `18`: Profit sharing `22`: Repay
     */
    type?: string;

    /*!
     * Bill subtype
     * `1`: Buy `2`: Sell `3`: Open long `4`: Open short `5`: Close long `6`: Close short `9`: Interest deduction for Market loans `11`: Transfer in `12`: Transfer out `14`: Interest deduction for VIP loans `160`: Manual margin increase `161`: Manual margin decrease `162`: Auto margin increase `114`: Auto buy `115`: Auto sell `118`: System token conversion transfer in `119`: System token conversion transfer out `100`: Partial liquidation close long `101`: Partial liquidation close short `102`: Partial liquidation buy `103`: Partial liquidation sell `104`: Liquidation long `105`: Liquidation short `106`: Liquidation buy `107`: Liquidation sell `108`:clawback `110`: Liquidation transfer in `111`: Liquidation transfer out `125`: ADL close long `126`: ADL close short `127`: ADL buy `128`: ADL sell `131`: ddh buy `132`: ddh sell `170`: Exercised `171`: Counterparty exercised `172`: Expired OTM `112`: Delivery long `113`: Delivery short `117`: Delivery/Exercise clawback `173`: Funding fee expense `174`: Funding fee income `200`:System transfer in `201`: Manually transfer in `202`: System transfer out `203`: Manually transfer out `204`: block trade buy `205`: block trade sell `206`: block trade open long `207`: block trade open short  `208`: block trade close open  `209`: block trade close short `210`: Manual Borrowing `211`: Manual Repayment `212`: Auto borrow `213`: Auto repay `16`: Repay forcibly `17`: Repay interest by borrowing forcibly `224`: repayment transfer in  `225`: repayment transfer out `250`: Profit sharing expenses; `251`: Profit sharing refund; `252`: Profit sharing income;
     */
    subType?: string;

    /*!
     * Pagination of data to return records earlier than the requested bill ID.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested bill ID.
     */
    before?: string;

    /*!
     * Filter with a begin timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    begin?: string;

    /*!
     * Filter with an end timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    end?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetBillsDetailsLast3MonthsData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Bill ID
     */
    billId: string;

    /*!
     * Bill type
     */
    type: string;

    /*!
     * Bill subtype
     */
    subType: string;

    /*!
     * Creation time, Unix timestamp format in milliseconds, e.g.`1597026383085`
     */
    ts: string;

    /*!
     * Change in balance amount at the account level
     */
    balChg: string;

    /*!
     * Change in balance amount at the position level
     */
    posBalChg: string;

    /*!
     * Balance at the account level
     */
    bal: string;

    /*!
     * Balance at the position level
     */
    posBal: string;

    /*!
     * Quantity
     */
    sz: string;

    /*!
     * Account balance currency
     */
    ccy: string;

    /*!
     * Profit and loss
     */
    pnl: string;

    /*!
     * Fee
     * Negative number represents the user transaction fee charged by the platform.
     * Positive number represents rebate.
     */
    fee: string;

    /*!
     * Margin mode
     * `isolated` `cross`
     * When bills are not generated by position changes, the field returns &#34;&#34;
     */
    mgnMode: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-190927-5000-C`
     */
    instId: string;

    /*!
     * Order ID
     * When bill type is not `trade`, the field returns &#34;&#34;
     */
    ordId: string;

    /*!
     * Liquidity taker or maker, `T`：taker `M`：maker
     */
    execType: string;

    /*!
     * The remitting account
     * `6`: FUNDING `18`: Trading account
     * Only applicable to `transfer`. When bill type is not `transfer`, the field returns &#34;&#34;.
     */
    from: string;

    /*!
     * The beneficiary account
     * `6`: FUNDING `18`: Trading account
     * Only applicable to `transfer`. When bill type is not `transfer`, the field returns &#34;&#34;.
     */
    to: string;

    /*!
     * Notes
     * Only applicable to `transfer`. When bill type is not `transfer`, the field returns &#34;&#34;.
     */
    notes: string;

  }

  export type GetBillsDetailsLast3MonthsResponse = OkxResponse<GetBillsDetailsLast3MonthsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-account-configuration
   */
  export interface GetAccountConfigurationRequestParams {
  }

  export type GetAccountConfigurationData = {
    /*!
     * Account ID
     */
    uid: string;

    /*!
     * Account level
     * `1`: Simple `2`: Single-currency margin `3`: Multi-currency margin `4`: Portfolio margin
     */
    acctLv: string;

    /*!
     * Position mode
     * `long_short_mode`: long/short, only applicable to `FUTURES/SWAP`
     * `net_mode`: net
     */
    posMode: string;

    /*!
     * Whether to borrow coins automatically
     * `true`: borrow coins automatically `false`: not borrow coins automatically
     */
    autoLoan: boolean;

    /*!
     * Current display type of Greeks
     * `PA`: Greeks in coins `BS`: Black-Scholes Greeks in dollars
     */
    greeksType: string;

    /*!
     * The user level of the current real trading volume on the platform,  e.g `lv1`
     */
    level: string;

    /*!
     * Temporary experience user level of special users, e.g `lv3`
     */
    levelTmp: string;

    /*!
     * Contract isolated margin trading settings
     * `automatic`: Auto transfers `autonomy`: Manual transfers
     */
    ctIsoMode: string;

    /*!
     * Margin isolated margin trading settings
     * `automatic`: Auto transfers; `autonomy`: Manual transfers; `quick_margin`: Quick Margin Mode (For new accounts, including subaccounts, some defaults will be `automatic`, and others will be `quick_margin`)
     */
    mgnIsoMode: string;

    /*!
     * Risk offset type
     * `1`: Spot-Derivatives(USDT) to be offsetted
     * `2`: Spot-Derivatives(Coin) to be offsetted
     * `3`: Only derivatives to be offsetted
     * Only applicable to `Portfolio margin`
     */
    spotOffsetType: string;

    /*!
     * API key note  of current request API key. No more than 50 letters (case sensitive) or numbers, which can be pure letters or pure numbers.
     */
    label: string;

    /*!
     * Role type.
     * `0`: General user; `1`: Leading trader; `2`: Copy trader
     */
    roleType: string;

    /*!
     * Leading trade instruments, only applicable to Leading trader
     */
    traderInsts: any[];

    /*!
     * Whether the optional trading was activated
     * `0` not activate, `1` activated
     */
    opAuth: string;

    /*!
     * IP addresses that linked with current API key, separate with commas if more than one, e.g. `117.37.203.58,117.37.203.57`. It is an empty string &#34;&#34; if there is no IP bonded.
     */
    ip: string;

  }

  export type GetAccountConfigurationResponse = OkxResponse<GetAccountConfigurationData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-position-mode
   */
  export interface SetPositionModeRequestParams {
    /*!
     * Position mode
     * `long_short_mode`: long/short, only applicable to `FUTURES/SWAP`
     * `net_mode`: net
     */
    posMode: string;

  }

  export type SetPositionModeData = {
    /*!
     * Position mode
     */
    posMode: string;

  }

  export type SetPositionModeResponse = OkxResponse<SetPositionModeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-leverage
   */
  export interface SetLeverageRequestParams {
    /*!
     * Instrument ID
     * Either `instId` or `ccy` is required; if both are passed, `instId` will be used by default.
     */
    instId?: string;

    /*!
     * Currency used for margin
     * Only applicable to `cross` `MARGIN` of `Multi-currency margin`
     * Required when setting the leverage for automatically borrowing coin.
     */
    ccy?: string;

    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Margin mode
     * `isolated` `cross`
     * Can only be `cross` if `ccy` is passed.
     */
    mgnMode: string;

    /*!
     * Position side
     * `long` `short`
     * Only required when margin mode is `isolated` in `long/short` mode for `FUTURES/SWAP`.
     */
    posSide?: string;

  }

  export type SetLeverageData = {
    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Margin mode
     * `cross` `isolated`
     */
    mgnMode: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Position side
     */
    posSide: string;

  }

  export type SetLeverageResponse = OkxResponse<SetLeverageData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-maximum-buy-sell-amount-or-open-amount
   */
  export interface GetMaximumBuySellAmountOrOpenAmountRequestParams {
    /*!
     * Single instrument or multiple instruments (no more than 5) separated with comma, e.g. `BTC-USDT,ETH-USDT`
     */
    instId: string;

    /*!
     * Trade mode
     * `cross` `isolated` `cash`
     */
    tdMode: string;

    /*!
     * Currency used for margin
     * Only applicable to `MARGIN` of `Single-currency margin`.
     */
    ccy?: string;

    /*!
     * Price
     * When the price is not specified, it will be calculated according to the last traded price.
     * The parameter will be ignored when multiple instruments are specified.
     */
    px?: string;

    /*!
     * Leverage for instrument
     * The default is current leverage
     * Only applicable to `MARGIN/FUTURES/SWAP`
     */
    leverage?: string;

    /*!
     * `true`: disable Spot-Derivatives risk offset, `false`: enable Spot-Derivatives risk offset
     * Default is `false`
     * Applicable to `Portfolio
     * It is effective when Spot-Derivatives risk offset is turned on, otherwise this parameter is ignored.
     */
    unSpotOffset?: boolean;

  }

  export type GetMaximumBuySellAmountOrOpenAmountData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Currency used for margin
     */
    ccy: string;

    /*!
     * `SPOT/MARGIN`: The maximum quantity in base currency that you can buy
     * The cross margin order under `Single-currency margin` mode, number of coins is based on base currency.
     * `FUTURES`/`SWAP`/`OPTIONS`: The maximum number of contracts that you can buy
     */
    maxBuy: string;

    /*!
     * `SPOT/MARGIN`: The maximum quantity in quote currency that you can sell
     * The cross margin order under `Single-currency margin` mode, number of coins is based on base currency.
     * `FUTURES`/`SWAP`/`OPTIONS`: The maximum number of contracts that you can sell
     */
    maxSell: string;

  }

  export type GetMaximumBuySellAmountOrOpenAmountResponse = OkxResponse<GetMaximumBuySellAmountOrOpenAmountData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-maximum-available-tradable-amount
   */
  export interface GetMaximumAvailableTradableAmountRequestParams {
    /*!
     * Single instrument or multiple instruments (no more than 5) separated with comma, e.g. `BTC-USDT,ETH-USDT`
     */
    instId: string;

    /*!
     * Currency used for margin
     * Only applicable to `cross` `MARGIN` of `Single-currency margin`.
     */
    ccy?: string;

    /*!
     * Trade mode
     * `cross` `isolated` `cash`
     */
    tdMode: string;

    /*!
     * Whether to reduce position only
     * Only applicable to `MARGIN`
     */
    reduceOnly?: boolean;

    /*!
     * `true`: disable Spot-Derivatives risk offset, `false`: enable Spot-Derivatives risk offset
     * Default is `false`
     * Only applicable to `Portfolio margin`
     * It is effective when Spot-Derivatives risk offset is turned on, otherwise this parameter is ignored.
     */
    unSpotOffset?: boolean;

    /*!
     * Quick Margin type. Only applicable to Quick Margin Mode of isolated margin
     * `manual`, `auto_borrow`, `auto_repay`
     * The default value is `manual`
     */
    quickMgnType?: string;

  }

  export type GetMaximumAvailableTradableAmountData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Amount available to buy
     */
    availBuy: string;

    /*!
     * Amount available to sell
     */
    availSell: string;

  }

  export type GetMaximumAvailableTradableAmountResponse = OkxResponse<GetMaximumAvailableTradableAmountData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-increase-decrease-margin
   */
  export interface IncreaseDecreaseMarginRequestParams {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Position side, the default is `net`
     * `long`
     * `short`
     * `net`
     */
    posSide: string;

    /*!
     * `add`: add margin, or transfer collaterals in (Quick Margin Mode)
     * `reduce`: reduce margin, transfer collaterals out (Quick Margin Mode)
     */
    type: string;

    /*!
     * Amount to be increased or decreased.
     */
    amt: string;

    /*!
     * Currency, only applicable to `MARGIN`（Manual transfers and Quick Margin Mode）
     */
    ccy?: string;

    /*!
     * Automatic loan transfer out, `true` or `false`, the default is `false`
     * only applicable to `MARGIN`（Manual transfers）
     */
    auto?: boolean;

    /*!
     * Whether or not borrowed coins can be transferred out under `Multi-currency margin` and `Portfolio margin`
     * the default is `false`
     */
    loanTrans?: boolean;

  }

  export type IncreaseDecreaseMarginData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Position side, `long`  `short`
     */
    posSide: string;

    /*!
     * Amount to be increase or decrease
     */
    amt: string;

    /*!
     * `add`: add margin
     * `reduce`: reduce margin
     */
    type: string;

    /*!
     * Real leverage after the margin adjustment
     */
    leverage: string;

    /*!
     * Currency
     */
    ccy: string;

  }

  export type IncreaseDecreaseMarginResponse = OkxResponse<IncreaseDecreaseMarginData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-leverage
   */
  export interface GetLeverageRequestParams {
    /*!
     * Instrument ID
     * Single instrument ID or multiple instrument IDs (no more than 20) separated with comma
     */
    instId: string;

    /*!
     * Margin mode
     * `cross` `isolated`
     */
    mgnMode: string;

  }

  export type GetLeverageData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Margin mode
     */
    mgnMode: string;

    /*!
     * Position side
     * `long`
     * `short`
     * `net`
     * In `long/short` mode, the leverage in both directions `long` `short` will be returned.
     */
    posSide: string;

    /*!
     * Leverage
     */
    lever: string;

  }

  export type GetLeverageResponse = OkxResponse<GetLeverageData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-the-maximum-loan-of-instrument
   */
  export interface GetTheMaximumLoanOfInstrumentRequestParams {
    /*!
     * Single instrument or multiple instruments (no more than 5) separated with comma, e.g. `BTC-USDT,ETH-USDT`
     */
    instId: string;

    /*!
     * Margin mode
     * `isolated` `cross`
     */
    mgnMode: string;

    /*!
     * Margin currency
     * Only applicable to cross `MARGIN` in `Single-currency margin`
     */
    mgnCcy?: string;

  }

  export type GetTheMaximumLoanOfInstrumentData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Margin mode
     */
    mgnMode: string;

    /*!
     * Margin currency
     */
    mgnCcy: string;

    /*!
     * Max loan
     */
    maxLoan: string;

    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Order side
     * `buy` `sell`
     */
    side: string;

  }

  export type GetTheMaximumLoanOfInstrumentResponse = OkxResponse<GetTheMaximumLoanOfInstrumentData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-fee-rates
   */
  export interface GetFeeRatesRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     * Applicable to `SPOT/MARGIN`
     */
    instId?: string;

    /*!
     * Underlying, e.g. `BTC-USD`
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family, e.g. `BTC-USD`
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

  }

  export type GetFeeRatesData = {
    /*!
     * Fee rate Level
     */
    level: string;

    /*!
     * Taker fee rate for the USDT&amp;amp;USDⓈ&amp;amp;Crypto trading pairs and contracts. It is the fee rate of crypto-margined contracts for `FUTURES` and `SWAP`
     */
    taker: string;

    /*!
     * Maker fee rate for the USDT&amp;amp;USDⓈ&amp;amp;Crypto trading pairs and contracts. It is the fee rate of crypto-margined contracts for `FUTURES` and `SWAP`
     */
    maker: string;

    /*!
     * Taker fee rate of USDT-margined contracts, only applicable to `FUTURES/SWAP`
     */
    takerU: string;

    /*!
     * Maker fee rate of USDT-margined contracts, only applicable to `FUTURES/SWAP`
     */
    makerU: string;

    /*!
     * Delivery fee rate
     */
    delivery: string;

    /*!
     * Fee rate for exercising the option
     */
    exercise: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Taker fee rate for the USDC trading pairs(`SPOT/MARGIN`) and contracts(`FUTURES/SWAP`)
     */
    takerUSDC: string;

    /*!
     * Maker fee rate for the USDC trading pairs(`SPOT/MARGIN`) and contracts(`FUTURES/SWAP`)
     */
    makerUSDC: string;

    /*!
     * Data return time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

    /*!
     * Currency category. Note: this parameter is already deprecated
     */
    category: string;

  }

  export type GetFeeRatesResponse = OkxResponse<GetFeeRatesData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-interest-accrued-data
   */
  export interface GetInterestAccruedDataRequestParams {
    /*!
     * Loan type
     * `1`: VIP loans
     * `2`: Market loans
     * Default is `Market loans`
     */
    type?: string;

    /*!
     * Loan currency, e.g. `BTC`
     * Only applicable to `Market loans`
     * Only applicable to`MARGIN`
     */
    ccy?: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     * Only applicable to `Market loans`
     */
    instId?: string;

    /*!
     * Margin mode
     * `cross`
     * `isolated`
     * Only applicable to `Market loans`
     */
    mgnMode?: string;

    /*!
     * Pagination of data to return records earlier than the requested timestamp, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetInterestAccruedDataData = {
    /*!
     * Loan type
     * `1`: VIP loans
     * `2`: Market loans
     */
    type: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     * Only applicable to `Market loans`
     */
    instId: string;

    /*!
     * Margin mode
     * `cross`
     * `isolated`
     */
    mgnMode: string;

    /*!
     * Interest
     */
    interest: string;

    /*!
     * Interest rate (in hour)
     */
    interestRate: string;

    /*!
     * Liability
     */
    liab: string;

    /*!
     * Timestamp for interest accured, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetInterestAccruedDataResponse = OkxResponse<GetInterestAccruedDataData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-interest-rate
   */
  export interface GetInterestRateRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy?: string;

  }

  export type GetInterestRateData = {
    /*!
     * interest rate
     */
    interestRate: string;

    /*!
     * currency
     */
    ccy: string;

  }

  export type GetInterestRateResponse = OkxResponse<GetInterestRateData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-greeks-pa-bs
   */
  export interface SetGreeksPaBsRequestParams {
    /*!
     * Display  type of Greeks.
     * `PA`: Greeks in coins
     * `BS`: Black-Scholes Greeks in dollars
     */
    greeksType: string;

  }

  export type SetGreeksPaBsData = {
    /*!
     * Display type of Greeks.
     */
    greeksType: string;

  }

  export type SetGreeksPaBsResponse = OkxResponse<SetGreeksPaBsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-isolated-margin-trading-settings
   */
  export interface IsolatedMarginTradingSettingsRequestParams {
    /*!
     * Isolated margin trading settings
     * `automatic`:Auto transfers
     * `autonomy`:Manual transfers
     * `quick_margin`:Quick Margin Mode
     */
    isoMode: string;

    /*!
     * Instrument type
     * 
     * `MARGIN`
     * `CONTRACTS`
     */
    type: string;

  }

  export type IsolatedMarginTradingSettingsData = {
    /*!
     * Isolated margin trading settings
     * `automatic`:Auto transfers
     * `autonomy`:Manual transfers
     * `quick_margin`:Quick Margin Mode
     */
    isoMode: string;

  }

  export type IsolatedMarginTradingSettingsResponse = OkxResponse<IsolatedMarginTradingSettingsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-maximum-withdrawals
   */
  export interface GetMaximumWithdrawalsRequestParams {
    /*!
     * Single currency or multiple currencies (no more than 20) separated with comma, e.g. `BTC` or `BTC,ETH`.
     */
    ccy?: string;

  }

  export type GetMaximumWithdrawalsData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Max withdrawal (excluding borrowed assets under `Multi-currency margin`)
     */
    maxWd: string;

    /*!
     * Max withdrawal (including borrowed assets under `Multi-currency margin`)
     */
    maxWdEx: string;

    /*!
     * Max withdrawal under Spot-Derivatives risk offset mode (excluding borrowed assets under `Portfolio margin`)
     * Applicable to `Portfolio margin`
     */
    spotOffsetMaxWd: string;

    /*!
     * Max withdrawal under Spot-Derivatives risk offset mode (including borrowed assets under `Portfolio margin`)
     * Applicable to `Portfolio margin`
     */
    spotOffsetMaxWdEx: string;

  }

  export type GetMaximumWithdrawalsResponse = OkxResponse<GetMaximumWithdrawalsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-account-risk-state
   */
  export interface GetAccountRiskStateRequestParams {
  }

  export type GetAccountRiskStateData = {
    /*!
     * Account risk status in auto-borrow mode
     * true： the account is currently in a specific risk state
     * false： the account is currently not in a specific risk state
     */
    atRisk: string;

    /*!
     * derivatives risk unit list
     */
    atRiskIdx: any[];

    /*!
     * margin risk unit list
     */
    atRiskMgn: any[];

    /*!
     * Unix timestamp format in milliseconds, e.g.`1597026383085`
     */
    ts: string;

  }

  export type GetAccountRiskStateResponse = OkxResponse<GetAccountRiskStateData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-manual-borrow-and-repay-in-quick-margin-mode
   */
  export interface ManualBorrowAndRepayInQuickMarginModeRequestParams {
    /*!
     * Instrument ID, e.g. BTC-USDT
     */
    instId: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * `borrow`  `repay`
     */
    side: string;

    /*!
     * borrow/repay amount
     */
    amt: string;

  }

  export type ManualBorrowAndRepayInQuickMarginModeData = {
    /*!
     * Instrument ID, e.g. BTC-USDT
     */
    instId: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * `borrow`  `repay`
     */
    side: string;

    /*!
     * borrow/repay amount
     */
    amt: string;

  }

  export type ManualBorrowAndRepayInQuickMarginModeResponse = OkxResponse<ManualBorrowAndRepayInQuickMarginModeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-borrow-and-repay-history-in-quick-margin-mode
   */
  export interface GetBorrowAndRepayHistoryInQuickMarginModeRequestParams {
    /*!
     * Instrument ID, e.g. BTC-USDT
     */
    instId?: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * `borrow`  `repay`
     */
    side?: string;

    /*!
     * Pagination of data to return records earlier than the requested `refId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `refId`
     */
    before?: string;

    /*!
     * Filter with a begin timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    begin?: string;

    /*!
     * Filter with an end timestamp. Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    end?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetBorrowAndRepayHistoryInQuickMarginModeData = {
    /*!
     * Instrument ID, e.g. BTC-USDT
     */
    instId: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * `borrow`  `repay`
     */
    side: string;

    /*!
     * Accumulate borrow amount
     */
    accBorrowed: string;

    /*!
     * borrow/repay amount
     */
    amt: string;

    /*!
     * The ID of borrowing or repayment
     */
    refId: string;

    /*!
     * Timestamp for Borrow/Repay
     */
    ts: string;

  }

  export type GetBorrowAndRepayHistoryInQuickMarginModeResponse = OkxResponse<GetBorrowAndRepayHistoryInQuickMarginModeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-vip-loans-borrow-and-repay
   */
  export interface VipLoansBorrowAndRepayRequestParams {
    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * `borrow`  `repay`
     */
    side: string;

    /*!
     * borrow/repay amount
     */
    amt: string;

    /*!
     * Order ID of borrowing, it is necessary while repaying
     */
    ordId?: string;

  }

  export type VipLoansBorrowAndRepayData = {
    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * `borrow`  `repay`
     */
    side: string;

    /*!
     * Already borrow/repay amount
     */
    amt: string;

    /*!
     * Order ID of borrowing
     */
    ordId: string;

    /*!
     * State
     * 1:Borrowing
     * 2:Borrowed
     * 3:Repaying
     * 4:Repaid
     * 5:Borrow failed
     */
    state: string;

  }

  export type VipLoansBorrowAndRepayResponse = OkxResponse<VipLoansBorrowAndRepayData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-borrow-and-repay-history-for-vip-loans
   */
  export interface GetBorrowAndRepayHistoryForVipLoansRequestParams {
    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * Pagination of data to return records earlier than the requested timestamp, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetBorrowAndRepayHistoryForVipLoansData = {
    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Type
     * `1`: borrow
     * `2`: repay
     * `3`: Loan reversed, lack of balance for interest
     */
    type: string;

    /*!
     * Borrow/Repay amount
     */
    tradedLoan: string;

    /*!
     * Borrowed amount for current account
     */
    usedLoan: string;

    /*!
     * Timestamp for Borrow/Repay
     */
    ts: string;

  }

  export type GetBorrowAndRepayHistoryForVipLoansResponse = OkxResponse<GetBorrowAndRepayHistoryForVipLoansData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-interest-accrued-data
   */
  export interface GetVipInterestAccruedDataRequestParams {
    /*!
     * Loan currency, e.g. `BTC`
     * Only applicable to`MARGIN`
     */
    ccy?: string;

    /*!
     * Order ID of borrowing
     */
    ordId?: string;

    /*!
     * Pagination of data to return records earlier than the requested timestamp, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetVipInterestAccruedDataData = {
    /*!
     * Order ID of borrowing
     */
    ordId: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Interest
     */
    interest: string;

    /*!
     * Interest rate (in hours)
     */
    interestRate: string;

    /*!
     * Liability
     */
    liab: string;

    /*!
     * Timestamp for interest accrued, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetVipInterestAccruedDataResponse = OkxResponse<GetVipInterestAccruedDataData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-interest-deducted-data
   */
  export interface GetVipInterestDeductedDataRequestParams {
    /*!
     * Loan currency, e.g. `BTC`
     * Only applicable to`MARGIN`
     */
    ccy?: string;

    /*!
     * Order ID of borrowing
     */
    ordId?: string;

    /*!
     * Pagination of data to return records earlier than the requested timestamp, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetVipInterestDeductedDataData = {
    /*!
     * Order ID of borrowing
     */
    ordId: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Interest
     */
    interest: string;

    /*!
     * Interest rate (in hour)
     */
    interestRate: string;

    /*!
     * Liability
     */
    liab: string;

    /*!
     * Timestamp for interest accured, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetVipInterestDeductedDataResponse = OkxResponse<GetVipInterestDeductedDataData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-loan-order-list
   */
  export interface GetVipLoanOrderListRequestParams {
    /*!
     * Order ID of borrowing
     */
    ordId?: string;

    /*!
     * State `1`:Borrowing `2`:Borrowed `3`:Repaying `4`:Repaid `5`:Borrow failed
     */
    state?: string;

    /*!
     * Loan currency, e.g. BTC
     */
    ccy?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ordId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ordId`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetVipLoanOrderListData = {
    /*!
     * Operation time
     */
    ts: string;

    /*!
     * Loan currency, e.g. BTC
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * State
     * `1`:Borrowing `2`:Borrowed `3`:Repaying `4`:Repaid `5`:Borrow failed
     */
    state: string;

    /*!
     * Original rate of order
     */
    origRate: string;

    /*!
     * Current rate of ccy
     */
    curRate: string;

    /*!
     * Amount due
     */
    dueAmt: string;

    /*!
     * Amount borrowed
     */
    borrowAmt: string;

    /*!
     * Amount repaid
     */
    repayAmt: string;

  }

  export type GetVipLoanOrderListResponse = OkxResponse<GetVipLoanOrderListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-vip-loan-order-detail
   */
  export interface GetVipLoanOrderDetailRequestParams {
    /*!
     * Order ID of loan
     */
    ordId?: string;

    /*!
     * Loan currency, e.g. BTC
     */
    ccy?: string;

    /*!
     * Pagination of data to return records earlier than the requested timestamp, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested timestamp, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetVipLoanOrderDetailData = {
    /*!
     * Operation time
     */
    ts: string;

    /*!
     * Loan currency, e.g. BTC
     */
    ccy: string;

    /*!
     * Operation Type:
     * 1:Borrow
     * 2:Repayment
     * 3:System Repayment
     * 4:Interest Rate Refresh
     */
    type: string;

    /*!
     * Current order rate
     */
    rate: string;

    /*!
     * Borrow/repay amount
     */
    amt: string;

  }

  export type GetVipLoanOrderDetailResponse = OkxResponse<GetVipLoanOrderDetailData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-borrow-interest-and-limit
   */
  export interface GetBorrowInterestAndLimitRequestParams {
    /*!
     * Loan type
     * `1`: VIP loans
     * `2`: Market loans
     * Default is `Market loans`
     */
    type?: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy?: string;

  }

  export type GetBorrowInterestAndLimitData = {
    /*!
     * Current debt in `USDT`
     */
    debt: string;

    /*!
     * Current interest in `USDT`, the unit is `USDT`
     * Only applicable to `Market loans`
     */
    interest: string;

    /*!
     * Next deduct time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    nextDiscountTime: string;

    /*!
     * Next accrual time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    nextInterestTime: string;

    /*!
     * VIP Loan allocation for the current trading account
     * 1. The unit is percent(%). Range is [0, 100]. Precision is 0.01%
     * 2. If master account did not assign anything, then &#34;0&#34;
     * 3. &#34;&#34; if shared between master and sub-account
     */
    loanAlloc: string;

    /*!
     * Details for currencies
     */
    records: any[];

  }

  export type GetBorrowInterestAndLimitResponse = OkxResponse<GetBorrowInterestAndLimitData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-position-builder
   */
  export interface PositionBuilderRequestParams {
    /*!
     * Instrument type
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType?: string;

    /*!
     * Whether import existing positions
     * `true`：Import existing positions and hedge with simulated ones
     * `false`：Only use simulated positions
     * The default is `true`
     */
    inclRealPos?: boolean;

    /*!
     * Spot-derivatives risk offset mode
     * 1: Spot-derivatives (USDT) 2: Spot-derivatives (crypto) 3: Derivatives-only
     * The default is 3
     */
    spotOffsetType?: string;

    /*!
     * List of positions
     */
    simPos?: any[];

  }

  export type PositionBuilderData = {
    /*!
     * risk unit
     */
    riskUnit: string;

    /*!
     * Unix timestamp format in milliseconds, e.g.`1597026383085`
     */
    ts: string;

    /*!
     * Maintenance margin requirement of riskUnit dimension
     */
    mmr: string;

    /*!
     * Initial margin requirement of riskUnit dimension
     */
    imr: string;

    /*!
     * spot &amp;amp; vol movements
     */
    mr1: string;

    /*!
     * theta decay
     */
    mr2: string;

    /*!
     * vega term-structure
     */
    mr3: string;

    /*!
     * basis risk
     */
    mr4: string;

    /*!
     * interest-rate risk
     */
    mr5: string;

    /*!
     * extreme market move
     */
    mr6: string;

    /*!
     * transaction cost &amp;amp; slippage
     */
    mr7: string;

    /*!
     * Initial margin requirement of account dimension
     */
    acctImr: string;

    /*!
     * Maintenance margin requirement of account dimension
     */
    acctMmr: string;

    /*!
     * List of positions
     */
    posData: any[];

  }

  export type PositionBuilderResponse = OkxResponse<PositionBuilderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-greeks
   */
  export interface GetGreeksRequestParams {
    /*!
     * Single currency, e.g. `BTC`.
     */
    ccy?: string;

  }

  export type GetGreeksData = {
    /*!
     * delta：Black-Scholes Greeks in dollars
     */
    deltaBS: string;

    /*!
     * delta：Greeks in coins
     */
    deltaPA: string;

    /*!
     * gamma：Black-Scholes Greeks in dollars,only applicable to OPTION
     */
    gammaBS: string;

    /*!
     * gamma：Greeks in coins,only applicable to OPTION
     */
    gammaPA: string;

    /*!
     * theta：Black-Scholes Greeks in dollars,only applicable to `OPTION`
     */
    thetaBS: string;

    /*!
     * theta：Greeks in coins,only applicable to `OPTION`
     */
    thetaPA: string;

    /*!
     * vega：Black-Scholes Greeks in dollars,only applicable to `OPTION`
     */
    vegaBS: string;

    /*!
     * vega：Greeks in coins,only applicable to `OPTION`
     */
    vegaPA: string;

    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Time of getting Greeks, Unix timestamp format in milliseconds, e.g. 1597026383085
     */
    ts: string;

  }

  export type GetGreeksResponse = OkxResponse<GetGreeksData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-get-pm-position-limitation
   */
  export interface GetPmPositionLimitationRequestParams {
    /*!
     * Instrument type
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Single underlying or multiple underlyings (no more than 3) separated with comma.
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    uly?: string;

    /*!
     * Single instrument family or instrument families (no more than 5) separated with comma.
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    instFamily?: string;

  }

  export type GetPmPositionLimitationData = {
    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily: string;

    /*!
     * Max number of positions
     */
    maxSz: string;

    /*!
     * Limitation of position type, only applicable to cross `OPTION` under portfolio margin mode
     * `1`: Contracts of pending orders and open positions for all derivatives instruments. `2`: Contracts of pending orders for all derivatives instruments. `3`: Pending orders for all derivatives instruments. `4`: Contracts of pending orders and open positions for all derivatives instruments on the same side. `5`: Pending orders for one derivatives instrument. `6`: Contracts of pending orders and open positions for one derivatives instrument. `7`: Contracts of one pending order.
     */
    posType: string;

  }

  export type GetPmPositionLimitationResponse = OkxResponse<GetPmPositionLimitationData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-risk-offset-type
   */
  export interface SetRiskOffsetTypeRequestParams {
    /*!
     * Risk offset type
     * `1`: Spot-derivatives (USDT) risk offset
     * `2`: Spot-derivatives (Crypto) risk offset
     * `3`:Derivatives only mode
     */
    type: string;

  }

  export type SetRiskOffsetTypeData = {
    /*!
     * Risk offset type
     * `1`: Spot-derivatives (USDT) risk offset
     * `2`: Spot-derivatives (Crypto) risk offset
     * `3`:Derivatives only mode
     */
    type: string;

  }

  export type SetRiskOffsetTypeResponse = OkxResponse<SetRiskOffsetTypeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-activate-option
   */
  export interface ActivateOptionRequestParams {
  }

  export type ActivateOptionData = {
    /*!
     * Activation time
     */
    ts: string;

  }

  export type ActivateOptionResponse = OkxResponse<ActivateOptionData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-account-set-auto-loan
   */
  export interface SetAutoLoanRequestParams {
    /*!
     * Whether to automatically make loans
     * Valid values are `true`, `false`
     * The default is `true`
     */
    autoLoan?: boolean;

  }

  export type SetAutoLoanData = {
    /*!
     * Whether to automatically make loans
     */
    autoLoan: boolean;

  }

  export type SetAutoLoanResponse = OkxResponse<SetAutoLoanData>;

}
export namespace subaccount {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-view-sub-account-list
   */
  export interface ViewSubAccountListRequestParams {
    /*!
     * Sub-account status, `true`: Normal ; `false`: Frozen
     */
    enable?: string;

    /*!
     * Sub-account name
     */
    subAcct?: string;

    /*!
     * If you query the data prior to the requested creation time ID, the value will be a Unix timestamp in millisecond format.
     */
    after?: string;

    /*!
     * If you query the data after the requested creation time ID, the value will be a Unix timestamp in millisecond format.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100. The default is 100.
     */
    limit?: string;

  }

  export type ViewSubAccountListData = {
    /*!
     * Sub-account type `1`:Standard sub-account   `2`:Custody trading sub-account
     */
    type: string;

    /*!
     * Sub-account status `true`: Normal  ; `false`:Frozen
     */
    enable: boolean;

    /*!
     * Sub-account name
     */
    subAcct: string;

    /*!
     * Sub-account note
     */
    label: string;

    /*!
     * Mobile number that linked with the sub-account.
     */
    mobile: string;

    /*!
     * If the sub-account switches on the Google Authenticator for login authentication. `true`: On  ; `false`: Off
     */
    gAuth: boolean;

    /*!
     * Whether the sub-account has the right to transfer out.
     * `false`: cannot transfer out
     * `true`: can transfer
     */
    canTransOut: boolean;

    /*!
     * Sub-account creation time, Unix timestamp in millisecond format. e.g. `1597026383085`
     */
    ts: string;

  }

  export type ViewSubAccountListResponse = OkxResponse<ViewSubAccountListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-reset-the-api-key-of-a-sub-account
   */
  export interface ResetTheApiKeyOfASubAccountRequestParams {
    /*!
     * Sub-account name
     */
    subAcct: string;

    /*!
     * Sub-account APIKey
     */
    apiKey: string;

    /*!
     * Sub-account API Key label. The label will be reset if this is passed through.
     */
    label?: string;

    /*!
     * Sub-account API Key permissions
     * `read_only` : Read only
     * `trade` : Trade
     * Separate with commas if more than one.
     * The permission will be reset if this is passed through.
     */
    perm?: string;

    /*!
     * Sub-account API Key linked IP addresses, separate with commas if more than one. Support up to 20 IP addresses.
     * The IP will be reset if this is passed through.
     * If `ip` is set to &#34;&#34;, then no IP addresses is linked to the APIKey.
     */
    ip?: string;

  }

  export type ResetTheApiKeyOfASubAccountData = {
    /*!
     * Sub-account name
     */
    subAcct: string;

    /*!
     * Sub-accountAPI public key
     */
    apiKey: string;

    /*!
     * Sub-account API Key label
     */
    label: string;

    /*!
     * Sub-account API Key access
     * `read_only`: Read only, `trade`: Trade
     */
    perm: string;

    /*!
     * Sub-account API Key IP addresses that linked with API Key
     */
    ip: string;

    /*!
     * Creation time
     */
    ts: string;

  }

  export type ResetTheApiKeyOfASubAccountResponse = OkxResponse<ResetTheApiKeyOfASubAccountData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-sub-account-trading-balance
   */
  export interface GetSubAccountTradingBalanceRequestParams {
    /*!
     * Sub-account name
     */
    subAcct: string;

  }

  export type GetSubAccountTradingBalanceData = {
    /*!
     * The latest time to get account information, millisecond format of Unix timestamp, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * The total amount of equity in USD
     */
    totalEq: string;

    /*!
     * Isolated margin equity in USD
     * Applicable to `Single-currency margin` and `Multi-currency margin` and `Portfolio margin`
     */
    isoEq: string;

    /*!
     * Adjusted / Effective equity in USD
     * The net fiat value of the assets in the account that can provide margins for spot, futures, perpetual swap and options under the cross margin mode.
     * Cause in multi-ccy or PM mode, the asset and margin requirement will all be converted to USD value to process the order check or liquidation.
     * Due to the volatility of each currency market, our platform calculates the actual USD value of each currency based on discount rates to balance market risks.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    adjEq: string;

    /*!
     * Margin frozen for pending cross orders in USD
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    ordFroz: string;

    /*!
     * Initial margin requirement in USD
     * The sum of initial margins of all open positions and pending orders under cross margin mode in USD.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    imr: string;

    /*!
     * Maintenance margin requirement in USD
     * The sum of maintenance margins of all open positions under cross margin mode in USD.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    mmr: string;

    /*!
     * Margin ratio in USD
     * The index for measuring the risk of a certain asset in the account.
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    mgnRatio: string;

    /*!
     * Notional value of positions in `USD`
     * Applicable to `Multi-currency margin` and `Portfolio margin`
     */
    notionalUsd: string;

    /*!
     * Detailed asset information in all currencies
     */
    details: any[];

  }

  export type GetSubAccountTradingBalanceResponse = OkxResponse<GetSubAccountTradingBalanceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-sub-account-funding-balance
   */
  export interface GetSubAccountFundingBalanceRequestParams {
    /*!
     * Sub-account name
     */
    subAcct: string;

    /*!
     * Single currency or multiple currencies (no more than 20) separated with comma, e.g. `BTC` or `BTC,ETH`.
     */
    ccy?: string;

  }

  export type GetSubAccountFundingBalanceData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Balance
     */
    bal: string;

    /*!
     * Frozen balance
     */
    frozenBal: string;

    /*!
     * Available balance
     * The balance that can be withdrawn or transferred or used on spot trading
     */
    availBal: string;

  }

  export type GetSubAccountFundingBalanceResponse = OkxResponse<GetSubAccountFundingBalanceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-history-of-sub-account-transfer
   */
  export interface HistoryOfSubAccountTransferRequestParams {
    /*!
     * Currency, such as BTC
     */
    ccy?: string;

    /*!
     * `0`: Transfers from master account to sub-account ;`1` : Transfers from sub-account to master account.
     */
    type?: string;

    /*!
     * Sub-account name
     */
    subAcct?: string;

    /*!
     * If you query the data prior to the requested bill ID, the value will be a Unix timestamp in millisecond format.
     */
    after?: string;

    /*!
     * If you query the data after the requested bill ID, the value will be a Unix timestamp in millisecond format.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100. The default is 100.
     */
    limit?: string;

  }

  export type HistoryOfSubAccountTransferData = {
    /*!
     * Bill ID
     */
    billId: string;

    /*!
     * Account balance currency
     */
    ccy: string;

    /*!
     * Transfer amount
     */
    amt: string;

    /*!
     * Bill type
     */
    type: string;

    /*!
     * Sub-account name
     */
    subAcct: string;

    /*!
     * Sub-account creation time with Unix timestamp in millisecond format,`1597026383085`  e.g., 1597026383085
     */
    ts: string;

  }

  export type HistoryOfSubAccountTransferResponse = OkxResponse<HistoryOfSubAccountTransferData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-master-accounts-manage-the-transfers-between-sub-accounts
   */
  export interface MasterAccountsManageTheTransfersBetweenSubAccountsRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Transfer amount
     */
    amt: string;

    /*!
     * `6`:Funding Account   `18`:Trading account
     */
    from: string;

    /*!
     * `6`:Funding Account   `18`:Trading account
     */
    to: string;

    /*!
     * Sub-account name of the account that transfers funds out.
     */
    fromSubAccount: string;

    /*!
     * Sub-account name of the account that transfers funds in.
     */
    toSubAccount: string;

    /*!
     * Whether or not borrowed coins can be transferred out under `Multi-currency margin` and `Portfolio margin`
     * the default is `false`
     */
    loanTrans?: boolean;

    /*!
     * Ignore position risk
     * Default is `false`
     * Applicable to `Portfolio margin`
     */
    omitPosRisk?: string;

  }

  export type MasterAccountsManageTheTransfersBetweenSubAccountsData = {
    /*!
     * Transfer ID
     */
    transId: string;

  }

  export type MasterAccountsManageTheTransfersBetweenSubAccountsResponse = OkxResponse<MasterAccountsManageTheTransfersBetweenSubAccountsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-set-permission-of-transfer-out
   */
  export interface SetPermissionOfTransferOutRequestParams {
    /*!
     * Name of the sub-account. Single sub-account or multiple sub-account (no more than 20) separated with comma.
     */
    subAcct: string;

    /*!
     * Whether the sub-account has the right to transfer out. The default is `true`.
     * `false`: cannot transfer out
     * `true`: can transfer
     */
    canTransOut?: boolean;

  }

  export type SetPermissionOfTransferOutData = {
    /*!
     * Name of the sub-account
     */
    subAcct: string;

    /*!
     * Whether the sub-account has the right to transfer out.
     * `false`: cannot transfer out
     * `true`: can transfer out
     */
    canTransOut: boolean;

  }

  export type SetPermissionOfTransferOutResponse = OkxResponse<SetPermissionOfTransferOutData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-custody-trading-sub-account-list
   */
  export interface GetCustodyTradingSubAccountListRequestParams {
    /*!
     * Sub-account name
     */
    subAcct?: string;

  }

  export type GetCustodyTradingSubAccountListData = {
    /*!
     * Sub-account name
     */
    subAcct: string;

  }

  export type GetCustodyTradingSubAccountListResponse = OkxResponse<GetCustodyTradingSubAccountListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-the-user-39-s-affiliate-rebate-information
   */
  export interface GetTheUser39SAffiliateRebateInformationRequestParams {
    /*!
     * The user&#39;s API key
     */
    apiKey: string;

  }

  export type GetTheUser39SAffiliateRebateInformationData = {
    /*!
     * Whether the user is invited by the current affiliate. `true`, `false`
     */
    result: boolean;

    /*!
     * Whether there is affiliate rebate.
     * `0` There is affiliate rebate
     * `1` There is no affiliate rebate. Because the account which is requesting this endpint is not affiliate
     * `2` There is no affiliate rebate. Because there is no relationship of invatation or recall，e.g. api key does not exist
     * `4` There is no affiliate rebate. Because the user level is equal to or more than VIP3
     */
    type: string;

  }

  export type GetTheUser39SAffiliateRebateInformationResponse = OkxResponse<GetTheUser39SAffiliateRebateInformationData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-set-sub-accounts-vip-loan
   */
  export interface SetSubAccountsVipLoanRequestParams {
    /*!
     * true or false
     */
    enable: boolean;

    /*!
     * If enable = false, this will not be validated
     */
    alloc?: any;

  }

  export type SetSubAccountsVipLoanData = {
    /*!
     * Result of the request
     * Valid value is `true` or `false`.
     */
    result: boolean;

  }

  export type SetSubAccountsVipLoanResponse = OkxResponse<SetSubAccountsVipLoanData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-subaccount-get-sub-account-borrow-interest-and-limit
   */
  export interface GetSubAccountBorrowInterestAndLimitRequestParams {
    /*!
     * Name of the sub-account. Can only put 1 sub account.
     */
    subAcct?: string;

    /*!
     * Loan currency, e.g. `BTC`
     */
    ccy?: string;

  }

  export type GetSubAccountBorrowInterestAndLimitData = {
    /*!
     * Name of sub account
     */
    subAcct: string;

    /*!
     * Current debt in `USDT`
     */
    debt: string;

    /*!
     * Current interest in `USDT`, the unit is `USDT`
     * Only applicable to `Market loans`
     */
    interest: string;

    /*!
     * Next deduct time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    nextDiscountTime: string;

    /*!
     * Next accrual time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    nextInterestTime: string;

    /*!
     * VIP Loan allocation for the current trading account
     * 1. The unit is percent(%). Range is [0, 100]. Precision is 0.01%
     * 2. If master account did not assign anything, then &#34;0&#34;
     * 3. &#34;&#34; if shared between master and sub-account
     */
    loanAlloc: string;

    /*!
     * Details for currencies
     */
    records: any[];

  }

  export type GetSubAccountBorrowInterestAndLimitResponse = OkxResponse<GetSubAccountBorrowInterestAndLimitData>;

}
export namespace gridTrading {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-place-grid-algo-order
   */
  export interface PlaceGridAlgoOrderRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT-SWAP`
     */
    instId: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Upper price of price range
     */
    maxPx: string;

    /*!
     * Lower price of price range
     */
    minPx: string;

    /*!
     * Grid quantity
     */
    gridNum: string;

    /*!
     * Grid type
     * `1`: Arithmetic, `2`: Geometric
     * Default is Arithmetic
     * `moon_grid` only support `2`
     */
    runType?: string;

    /*!
     * TP tigger price
     * Applicable to `Spot grid`/`Contract grid`
     */
    tpTriggerPx?: string;

    /*!
     * SL tigger price
     * Applicable to `Spot grid`/`Contract grid`
     */
    slTriggerPx?: string;

    /*!
     * Order tag
     */
    tag?: string;

    /*!
     * Client-supplied Algo ID
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    algoClOrdId?: string;

    /*!
     * Trigger Parameters
     */
    triggerParams?: any[];

  }

  export type PlaceGridAlgoOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type PlaceGridAlgoOrderResponse = OkxResponse<PlaceGridAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-amend-grid-algo-order
   */
  export interface AmendGridAlgoOrderRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT-SWAP`
     */
    instId: string;

    /*!
     * New stop-loss trigger price
     * if slTriggerPx is set &#34;&#34; means stop-loss trigger price is canceled.
     * Either `slTriggerPx` or `tpTriggerPx` is required.
     */
    slTriggerPx?: string;

    /*!
     * New take-profit trigger price
     * if tpTriggerPx is set &#34;&#34; means take-profit trigger price is canceled.
     */
    tpTriggerPx?: string;

    /*!
     * Trigger Parameters
     */
    triggerParams?: any[];

  }

  export type AmendGridAlgoOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type AmendGridAlgoOrderResponse = OkxResponse<AmendGridAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-stop-grid-algo-order
   */
  export interface StopGridAlgoOrderRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Stop type
     * Spot grid/Moon grid `1`: Sell base currency `2`: Keep base currency
     * Contract grid `1`: Market Close All positions `2`: Keep positions
     */
    stopType: string;

  }

  export type StopGridAlgoOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type StopGridAlgoOrderResponse = OkxResponse<StopGridAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-close-position-for-contract-grid
   */
  export interface ClosePositionForContractGridRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Market close all the positions or not
     */
    mktClose: boolean;

    /*!
     * Close position amount, with unit of `contract`
     * If `mktClose` is `false`, the parameter is required.
     */
    sz?: string;

    /*!
     * Close position price
     * If `mktClose` is `false`, the parameter is required.
     */
    px?: string;

  }

  export type ClosePositionForContractGridData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Close position order ID
     * If `mktClose` is `true`, the parameter will return &#34;&#34;.
     */
    ordId: string;

  }

  export type ClosePositionForContractGridResponse = OkxResponse<ClosePositionForContractGridData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-cancel-close-position-order-for-contract-grid
   */
  export interface CancelClosePositionOrderForContractGridRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Close position order ID
     */
    ordId: string;

  }

  export type CancelClosePositionOrderForContractGridData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Close position order ID
     */
    ordId: string;

  }

  export type CancelClosePositionOrderForContractGridResponse = OkxResponse<CancelClosePositionOrderForContractGridData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-instant-trigger-grid-algo-order
   */
  export interface InstantTriggerGridAlgoOrderRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

  }

  export type InstantTriggerGridAlgoOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, `0` means success.
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful.
     */
    sMsg: string;

  }

  export type InstantTriggerGridAlgoOrderResponse = OkxResponse<InstantTriggerGridAlgoOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-list
   */
  export interface GetGridAlgoOrderListRequestParams {
    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Algo ID
     */
    algoId?: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId?: string;

    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `FUTURES`
     * `SWAP`
     */
    instType?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `algoId`.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100; The default is 100
     */
    limit?: string;

  }

  export type GetGridAlgoOrderListData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Algo order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Algo order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Algo order state
     * `starting`
     * `running`
     * `stopping`
     * `no_close_position`: stopped algo order but have not closed position yet
     */
    state: string;

    /*!
     * Rebate transfer info
     */
    rebateTrans: any[];

    /*!
     * Trigger Parameters
     */
    triggerParams: any[];

    /*!
     * Upper price of price range
     */
    maxPx: string;

    /*!
     * Lower price of price range
     */
    minPx: string;

    /*!
     * Grid quantity
     */
    gridNum: string;

    /*!
     * Grid type
     * `1`: Arithmetic, `2`: Geometric
     */
    runType: string;

    /*!
     * Take-profit trigger price
     */
    tpTriggerPx: string;

    /*!
     * Stop-loss trigger price
     */
    slTriggerPx: string;

    /*!
     * The number of arbitrages executed
     */
    arbitrageNum: string;

    /*!
     * Total P&amp;amp;L
     */
    totalPnl: string;

    /*!
     * P&amp;amp;L ratio
     */
    pnlRatio: string;

    /*!
     * Investment amount
     * Spot grid investment amount calculated on quote currency
     */
    investment: string;

    /*!
     * Grid profit
     */
    gridProfit: string;

    /*!
     * Variable P&amp;amp;L
     */
    floatProfit: string;

    /*!
     * Algo order stop reason
     * `0`: None
     * `1`: Manual stop
     * `2`: Take profit
     * `3`: Stop loss
     * `4`: Risk control
     * `5`: Delivery
     * `6`: Signal
     */
    cancelType: string;

    /*!
     * Actual Stop type
     * Spot/Moon grid `1`: Sell base currency `2`: Keep base currency
     * Contract grid `1`: Market Close All positions `2`: Keep positions
     */
    stopType: string;

    /*!
     * Quote currency investment amount
     * Only applicable to `Spot grid`/`Moon grid`
     */
    quoteSz: string;

    /*!
     * Base currency investment amount
     * Only applicable to `Spot grid`
     */
    baseSz: string;

    /*!
     * Contract grid type
     * `long`,`short`,`neutral`
     * Only applicable to `contract grid`
     */
    direction: string;

    /*!
     * Whether or not to open a position when the strategy is activated
     * Only applicable to `contract grid`
     */
    basePos: boolean;

    /*!
     * Used margin based on `USDT`
     * Only applicable to `contract grid`
     */
    sz: string;

    /*!
     * Leverage
     * Only applicable to `contract grid`
     */
    lever: string;

    /*!
     * Actual Leverage
     * Only applicable to `contract grid`
     */
    actualLever: string;

    /*!
     * Estimated liquidation price
     * Only applicable to `contract grid`
     */
    liqPx: string;

    /*!
     * Underlying
     * Only applicable to `contract grid`
     */
    uly: string;

    /*!
     * Instrument family
     * Only applicable to `FUTURES`/`SWAP`/`OPTION`
     * Only applicable to `contract grid`
     */
    instFamily: string;

    /*!
     * Margin used by pending orders
     * Only applicable to `contract grid`
     */
    ordFrozen: string;

    /*!
     * Available margin
     * Only applicable to `contract grid`
     */
    availEq: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetGridAlgoOrderListResponse = OkxResponse<GetGridAlgoOrderListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-history
   */
  export interface GetGridAlgoOrderHistoryRequestParams {
    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Algo ID
     */
    algoId?: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId?: string;

    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `FUTURES`
     * `SWAP`
     */
    instType?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `algoId`.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100; The default is 100
     */
    limit?: string;

  }

  export type GetGridAlgoOrderHistoryData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Algo order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Algo order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Algo order state
     * `stopped`
     */
    state: string;

    /*!
     * Rebate transfer info
     */
    rebateTrans: any[];

    /*!
     * Trigger Parameters
     */
    triggerParams: any[];

    /*!
     * Upper price of price range
     */
    maxPx: string;

    /*!
     * Lower price of price range
     */
    minPx: string;

    /*!
     * Grid quantity
     */
    gridNum: string;

    /*!
     * Grid type
     * `1`: Arithmetic, `2`: Geometric
     */
    runType: string;

    /*!
     * Take-profit trigger price
     */
    tpTriggerPx: string;

    /*!
     * Stop-loss trigger price
     */
    slTriggerPx: string;

    /*!
     * The number of arbitrages executed
     */
    arbitrageNum: string;

    /*!
     * Total P&amp;amp;L
     */
    totalPnl: string;

    /*!
     * P&amp;amp;L ratio
     */
    pnlRatio: string;

    /*!
     * Investment amount
     * Spot grid investment amount calculated on quote currency
     */
    investment: string;

    /*!
     * Grid profit
     */
    gridProfit: string;

    /*!
     * Variable P&amp;amp;L
     */
    floatProfit: string;

    /*!
     * Algo order stop reason
     * `0`: None
     * `1`: Manual stop
     * `2`: Take profit
     * `3`: Stop loss
     * `4`: Risk control
     * `5`: Delivery
     * `6`: Signal
     */
    cancelType: string;

    /*!
     * Actual Stop type
     * Spot/Moon grid `1`: Sell base currency `2`: Keep base currency
     * Contract grid `1`: Market Close All positions `2`: Keep positions
     */
    stopType: string;

    /*!
     * Quote currency investment amount
     * Only applicable to `Spot grid`/`Moon grid`
     */
    quoteSz: string;

    /*!
     * Base currency investment amount
     * Only applicable to `Spot grid`
     */
    baseSz: string;

    /*!
     * Contract grid type
     * `long`,`short`,`neutral`
     * Only applicable to `contract grid`
     */
    direction: string;

    /*!
     * Whether or not to open a position when the strategy is activated
     * Only applicable to `contract grid`
     */
    basePos: boolean;

    /*!
     * Used margin based on `USDT`
     * Only applicable to `contract grid`
     */
    sz: string;

    /*!
     * Leverage
     * Only applicable to `contract grid`
     */
    lever: string;

    /*!
     * Actual Leverage
     * Only applicable to `contract grid`
     */
    actualLever: string;

    /*!
     * Estimated liquidation price
     * Only applicable to `contract grid`
     */
    liqPx: string;

    /*!
     * Underlying
     * Only applicable to `contract grid`
     */
    uly: string;

    /*!
     * Instrument family
     * Only applicable to `FUTURES`/`SWAP`/`OPTION`
     * Only applicable to `contract grid`
     */
    instFamily: string;

    /*!
     * Margin used by pending orders
     * Only applicable to `contract grid`
     */
    ordFrozen: string;

    /*!
     * Available margin
     * Only applicable to `contract grid`
     */
    availEq: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetGridAlgoOrderHistoryResponse = OkxResponse<GetGridAlgoOrderHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-details
   */
  export interface GetGridAlgoOrderDetailsRequestParams {
    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Algo ID
     */
    algoId: string;

  }

  export type GetGridAlgoOrderDetailsData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Algo order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Algo order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Algo order state
     * `starting`
     * `running`
     * `stopping`
     * `no_close_position`: stopped algo order but have not closed position yet
     * `stopped`
     */
    state: string;

    /*!
     * Rebate transfer info
     */
    rebateTrans: any[];

    /*!
     * Trigger Parameters
     */
    triggerParams: any[];

    /*!
     * Upper price of price range
     */
    maxPx: string;

    /*!
     * Lower price of price range
     */
    minPx: string;

    /*!
     * Grid quantity
     */
    gridNum: string;

    /*!
     * Grid type
     * `1`: Arithmetic, `2`: Geometric
     */
    runType: string;

    /*!
     * Take-profit trigger price
     */
    tpTriggerPx: string;

    /*!
     * Stop-loss trigger price
     */
    slTriggerPx: string;

    /*!
     * The number of trades executed
     */
    tradeNum: string;

    /*!
     * The number of arbitrages executed
     */
    arbitrageNum: string;

    /*!
     * Amount per grid
     */
    singleAmt: string;

    /*!
     * Estimated minimum Profit margin per grid
     */
    perMinProfitRate: string;

    /*!
     * Estimated maximum Profit margin per grid
     */
    perMaxProfitRate: string;

    /*!
     * Price at launch
     */
    runPx: string;

    /*!
     * Total P&amp;amp;L
     */
    totalPnl: string;

    /*!
     * P&amp;amp;L ratio
     */
    pnlRatio: string;

    /*!
     * Investment amount
     * Spot grid investment amount calculated on quote currency
     */
    investment: string;

    /*!
     * Grid profit
     */
    gridProfit: string;

    /*!
     * Variable P&amp;amp;L
     */
    floatProfit: string;

    /*!
     * Total annualized rate
     */
    totalAnnualizedRate: string;

    /*!
     * Grid annualized rate
     */
    annualizedRate: string;

    /*!
     * Algo order stop reason
     * `0`: None
     * `1`: Manual stop
     * `2`: Take profit
     * `3`: Stop loss
     * `4`: Risk control
     * `5`: Delivery
     * `6`: Signal
     */
    cancelType: string;

    /*!
     * Stop type
     * Spot grid/Moon grid `1`: Sell base currency `2`: Keep base currency
     * Contract grid `1`: Market Close All positions `2`: Keep positions
     */
    stopType: string;

    /*!
     * Total count of pending sub orders
     */
    activeOrdNum: string;

    /*!
     * Quote currency investment amount
     * Only applicable to `Spot grid`/`Moon grid`
     */
    quoteSz: string;

    /*!
     * Base currency investment amount
     * Only applicable to `Spot grid`
     */
    baseSz: string;

    /*!
     * Assets of quote currency currently held
     * Only applicable to `Spot grid`/`Moon grid`
     */
    curQuoteSz: string;

    /*!
     * Assets of base currency currently held
     * Only applicable to `Spot grid`/`Moon grid`
     */
    curBaseSz: string;

    /*!
     * Current available profit based on quote currency
     * Only applicable to `Spot grid`/`Moon grid`
     */
    profit: string;

    /*!
     * Stop result
     * `0`: default, `1`: Successful selling of currency at market price, `-1`: Failed to sell currency at market price
     * Only applicable to `Spot grid`/`Moon grid`
     */
    stopResult: string;

    /*!
     * Contract grid type
     * `long`,`short`,`neutral`
     * Only applicable to `contract grid`
     */
    direction: string;

    /*!
     * Whether or not to open a position when the strategy is activated
     * Only applicable to `contract grid`
     */
    basePos: boolean;

    /*!
     * Used margin based on `USDT`
     * Only applicable to `contract grid`
     */
    sz: string;

    /*!
     * Leverage
     * Only applicable to `contract grid`
     */
    lever: string;

    /*!
     * Actual Leverage
     * Only applicable to `contract grid`
     */
    actualLever: string;

    /*!
     * Estimated liquidation price
     * Only applicable to `contract grid`
     */
    liqPx: string;

    /*!
     * Underlying
     * Only applicable to `contract grid`
     */
    uly: string;

    /*!
     * Instrument family
     * Only applicable to `FUTURES`/`SWAP`/`OPTION`
     * Only applicable to `contract grid`
     */
    instFamily: string;

    /*!
     * Margin used by pending orders
     * Only applicable to `contract grid`
     */
    ordFrozen: string;

    /*!
     * Available margin
     * Only applicable to `contract grid`
     */
    availEq: string;

    /*!
     * Total equity of strategy account
     * Only applicable to `contract grid`
     */
    eq: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetGridAlgoOrderDetailsResponse = OkxResponse<GetGridAlgoOrderDetailsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-sub-orders
   */
  export interface GetGridAlgoSubOrdersRequestParams {
    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Sub order state
     * `live`
     * `filled`
     */
    type: string;

    /*!
     * Group ID
     */
    groupId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `algoId`.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100; The default is 100
     */
    limit?: string;

  }

  export type GetGridAlgoSubOrdersData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Group ID
     */
    groupId: string;

    /*!
     * Sub order ID
     */
    ordId: string;

    /*!
     * Sub order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Sub order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Sub order trade mode
     * Margin mode `cross` `isolated`
     * Non-Margin mode `cash`
     */
    tdMode: string;

    /*!
     * Margin currency
     * Only applicable to cross MARGIN orders in Single-currency margin.
     */
    ccy: string;

    /*!
     * Sub order type
     * `market`: Market order
     * `limit`: Limit order
     */
    ordType: string;

    /*!
     * Sub order quantity to buy or sell
     */
    sz: string;

    /*!
     * Sub order state
     * `canceled`
     * `live`
     * `partially_filled`
     * `filled`
     * `cancelling`
     */
    state: string;

    /*!
     * Sub order side
     * `buy` `sell`
     */
    side: string;

    /*!
     * Sub order price
     */
    px: string;

    /*!
     * Sub order fee amount
     */
    fee: string;

    /*!
     * Sub order fee currency
     */
    feeCcy: string;

    /*!
     * Sub order rebate amount
     */
    rebate: string;

    /*!
     * Sub order rebate currency
     */
    rebateCcy: string;

    /*!
     * Sub order average filled price
     */
    avgPx: string;

    /*!
     * Sub order accumulated fill quantity
     */
    accFillSz: string;

    /*!
     * Sub order position side
     * `long` `short` `net`
     */
    posSide: string;

    /*!
     * Sub order profit and loss
     */
    pnl: string;

    /*!
     * Contract value
     * Only applicable to `FUTURES/SWAP`
     */
    ctVal: string;

    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetGridAlgoSubOrdersResponse = OkxResponse<GetGridAlgoSubOrdersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-algo-order-positions
   */
  export interface GetGridAlgoOrderPositionsRequestParams {
    /*!
     * Algo order type
     * `contract_grid`: contract grid
     */
    algoOrdType: string;

    /*!
     * Algo ID
     */
    algoId: string;

  }

  export type GetGridAlgoOrderPositionsData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID, e.g. &#34;BTC-USDT-SWAP&#34;
     */
    instId: string;

    /*!
     * Algo order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Algo order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Average open price
     */
    avgPx: string;

    /*!
     * Margin currency
     */
    ccy: string;

    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Estimated liquidation price
     */
    liqPx: string;

    /*!
     * Position side
     * `net`
     */
    posSide: string;

    /*!
     * Quantity of positions
     */
    pos: string;

    /*!
     * Margin mode
     * `cross`
     * `isolated`
     */
    mgnMode: string;

    /*!
     * Margin ratio
     */
    mgnRatio: string;

    /*!
     * Initial margin requirement
     */
    imr: string;

    /*!
     * Maintenance margin requirement
     */
    mmr: string;

    /*!
     * Unrealized profit and loss
     */
    upl: string;

    /*!
     * Unrealized profit and loss ratio
     */
    uplRatio: string;

    /*!
     * Latest traded price
     */
    last: string;

    /*!
     * Notional value of positions in `USD`
     */
    notionalUsd: string;

    /*!
     * Auto decrease line, signal area
     * Divided into 5 levels, from 1 to 5, the smaller the number, the weaker the adl intensity.
     */
    adl: string;

    /*!
     * Mark price
     */
    markPx: string;

  }

  export type GetGridAlgoOrderPositionsResponse = OkxResponse<GetGridAlgoOrderPositionsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-spot-moon-grid-withdraw-income
   */
  export interface SpotMoonGridWithdrawIncomeRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

  }

  export type SpotMoonGridWithdrawIncomeData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Withdraw profit
     */
    profit: string;

  }

  export type SpotMoonGridWithdrawIncomeResponse = OkxResponse<SpotMoonGridWithdrawIncomeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-compute-margin-balance
   */
  export interface ComputeMarginBalanceRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Adjust margin balance type
     * `add` `reduce`
     */
    type: string;

    /*!
     * Adjust margin balance amount
     * Default is zero.
     */
    amt?: string;

  }

  export type ComputeMarginBalanceData = {
    /*!
     * Maximum adjustable margin balance amount
     */
    maxAmt: string;

    /*!
     * Leverage after adjustment of margin balance
     */
    lever: string;

  }

  export type ComputeMarginBalanceResponse = OkxResponse<ComputeMarginBalanceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-adjust-margin-balance
   */
  export interface AdjustMarginBalanceRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Adjust margin balance type
     * `add` `reduce`
     */
    type: string;

    /*!
     * Adjust margin balance amount
     * Either `amt` or `percent` is required.
     */
    amt?: string;

    /*!
     * Adjust margin balance percentage
     */
    percent?: string;

  }

  export type AdjustMarginBalanceData = {
    /*!
     * Algo ID
     */
    algoId: string;

  }

  export type AdjustMarginBalanceResponse = OkxResponse<AdjustMarginBalanceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-get-grid-ai-parameter-public
   */
  export interface GetGridAiParameterPublicRequestParams {
    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Contract grid type
     * `long`,`short`,`neutral`
     * Required in the case of `contract_grid`
     */
    direction?: string;

    /*!
     * Back testing duration
     * `7D`: 7 Days, `30D`: 30 Days, `180D`: 180 Days
     * The default is `7D` for `Spot grid`,`180D` for `Moon grid`
     * Only `7D` is available for `Contract grid`
     */
    duration?: string;

  }

  export type GetGridAiParameterPublicData = {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP
     */
    instId: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     * `moon_grid`: Moon grid
     */
    algoOrdType: string;

    /*!
     * Back testing duration
     * `7D`: 7 Days, `30D`: 30 Days, `180D`: 180 Days
     */
    duration: string;

    /*!
     * Grid quantity
     */
    gridNum: string;

    /*!
     * Upper price of price range
     */
    maxPx: string;

    /*!
     * Lower price of price range
     */
    minPx: string;

    /*!
     * Estimated maximum Profit margin per grid
     */
    perMaxProfitRate: string;

    /*!
     * Estimated minimum Profit margin per grid
     */
    perMinProfitRate: string;

    /*!
     * Grid annualized rate
     */
    annualizedRate: string;

    /*!
     * The minimum invest amount
     */
    minInvestment: string;

    /*!
     * The invest currency
     */
    ccy: string;

    /*!
     * Grid type
     * `1`: Arithmetic, `2`: Geometric
     */
    runType: string;

    /*!
     * Contract grid type
     * `long`,`short`,`neutral`
     * Only applicable to contract grid
     */
    direction: string;

    /*!
     * Leverage
     * Only applicable to contract grid
     */
    lever: string;

  }

  export type GetGridAiParameterPublicResponse = OkxResponse<GetGridAiParameterPublicData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-compute-min-investment-public
   */
  export interface ComputeMinInvestmentPublicRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT-SWAP`
     */
    instId: string;

    /*!
     * Algo order type
     * `grid`: Spot grid
     * `contract_grid`: Contract grid
     */
    algoOrdType: string;

    /*!
     * Upper price of price range
     */
    maxPx: string;

    /*!
     * Lower price of price range
     */
    minPx: string;

    /*!
     * Grid quantity
     */
    gridNum: string;

    /*!
     * Grid type
     * `1`: Arithmetic, `2`: Geometric
     */
    runType: string;

    /*!
     * Contract grid type
     * `long`,`short`,`neutral`
     * Only applicable to `contract grid`
     */
    direction?: string;

    /*!
     * Leverage
     * Only applicable to `contract grid`
     */
    lever?: string;

    /*!
     * Whether or not open a position when the strategy activates
     * Default is `false`
     * Neutral contract grid should omit the parameter
     * Only applicable to `contract grid`
     */
    basePos?: boolean;

    /*!
     * Invest Data
     */
    investmentData?: any[];

  }

  export type ComputeMinInvestmentPublicData = {
    /*!
     * Minimum invest Data
     */
    investmentData: any[];

    /*!
     * Single grid trading amount
     * In terms of `spot grid`,the unit is `quote currency`
     * In terms of `contract grid`,the unit is `contract`
     */
    singleAmt: string;

  }

  export type ComputeMinInvestmentPublicResponse = OkxResponse<ComputeMinInvestmentPublicData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-grid-trading-rsi-back-testing-public
   */
  export interface RsiBackTestingPublicRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT`
     * Only applicable to `SPOT`
     */
    instId: string;

    /*!
     * K-line type
     * `3m`, `5m`, `15m`, `30m` (`m`: minute)
     * `1H`, `4H` (`H`: hour)
     * `1D` (`D`: day)
     * This field is only valid when `triggerStrategy` is `rsi`
     */
    timeframe: string;

    /*!
     * Threshold
     * The value should be an integer between 1 to 100
     */
    thold: string;

    /*!
     * Time Period
     * `14`
     */
    timePeriod: string;

    /*!
     * Trigger condition
     * `cross_up`
     * `cross_down`
     * `above`
     * `below`
     * `cross`
     * Default is `cross_down`
     */
    triggerCond?: string;

    /*!
     * Back testing duration
     * `1M` (`M`: month)
     * Default is `1M`
     */
    duration?: string;

  }

  export type RsiBackTestingPublicData = {
    /*!
     * Trigger number
     */
    triggerNum: string;

  }

  export type RsiBackTestingPublicResponse = OkxResponse<RsiBackTestingPublicData>;

}
export namespace recurringBuy {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-place-recurring-buy-order
   */
  export interface PlaceRecurringBuyOrderRequestParams {
    /*!
     * Custom name for trading bot, no more than 40 characters
     */
    stgyName: string;

    /*!
     * Recurring buy info
     */
    recurringList: any[];

    /*!
     * Period
     * `monthly`
     * `weekly`
     * `daily`
     */
    period: string;

    /*!
     * Recurring buy date
     * When the period is `monthly`, the value range is an integer of [1,28]
     * When the period is `weekly`, the value range is an integer of [1,7]
     * When the period is `daily`, the value is `1`
     */
    recurringDay: string;

    /*!
     * Recurring buy time, the value range is an integer of [0,23]
     */
    recurringTime: string;

    /*!
     * UTC time zone，the value range is an integer of [-12,14]
     * e.g. &#34;8&#34; representing UTC+8 (East 8 District), Beijing Time
     */
    timeZone: string;

    /*!
     * Quantity invested per cycle
     */
    amt: string;

    /*!
     * The invested quantity unit, can only be `USDT`/`USDC`
     */
    investmentCcy: string;

    /*!
     * Trading mode
     * Margin mode: `cross`
     * Non-Margin mode: `cash`
     */
    tdMode: string;

    /*!
     * Client-supplied Algo ID
     * There will be a value when algo order attaching algoClOrdId is triggered, or it will be &#34;&#34;.
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 32 characters.
     */
    algoClOrdId?: string;

    /*!
     * Order tag
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 16 characters.
     */
    tag?: string;

  }

  export type PlaceRecurringBuyOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, 0 means success
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful
     */
    sMsg: string;

  }

  export type PlaceRecurringBuyOrderResponse = OkxResponse<PlaceRecurringBuyOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-amend-recurring-buy-order
   */
  export interface AmendRecurringBuyOrderRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * New custom name for trading bot after adjustment, no more than 40 characters
     */
    stgyName: string;

  }

  export type AmendRecurringBuyOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, 0 means success
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful
     */
    sMsg: string;

  }

  export type AmendRecurringBuyOrderResponse = OkxResponse<AmendRecurringBuyOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-stop-recurring-buy-order
   */
  export interface StopRecurringBuyOrderRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

  }

  export type StopRecurringBuyOrderData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * The code of the event execution result, 0 means success
     */
    sCode: string;

    /*!
     * Rejection message if the request is unsuccessful
     */
    sMsg: string;

  }

  export type StopRecurringBuyOrderResponse = OkxResponse<StopRecurringBuyOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-order-list
   */
  export interface GetRecurringBuyOrderListRequestParams {
    /*!
     * Algo ID
     */
    algoId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `algoId`.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100; The default is 100
     */
    limit?: string;

  }

  export type GetRecurringBuyOrderListData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Algo order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Algo order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Algo order type
     * `recurring`: recurring buy
     */
    algoOrdType: string;

    /*!
     * Algo order state
     * `running`
     * `stopping`
     */
    state: string;

    /*!
     * Custom name for trading bot, no more than 40 characters
     */
    stgyName: string;

    /*!
     * Recurring buy info
     */
    recurringList: any[];

    /*!
     * Period
     * `monthly`
     * `weekly`
     * `daily`
     */
    period: string;

    /*!
     * Recurring buy date
     * When the period is `monthly`, the value range is an integer of [1,28]
     * When the period is `weekly`, the value range is an integer of [1,7]
     * When the period is `daily`, the value is `1`
     */
    recurringDay: string;

    /*!
     * Recurring buy time, the value range is an integer of [0,23]
     */
    recurringTime: string;

    /*!
     * UTC time zone，the value range is an integer of [-12,14]
     * e.g. &#34;8&#34; representing UTC+8 (East 8 District), Beijing Time
     */
    timeZone: string;

    /*!
     * Quantity invested per cycle
     */
    amt: string;

    /*!
     * Accumulate quantity invested
     */
    investmentAmt: string;

    /*!
     * The invested quantity unit, can only be `USDT`/`USDC`
     */
    investmentCcy: string;

    /*!
     * Total P&amp;amp;L
     */
    totalPnl: string;

    /*!
     * Total annualized rate of yield
     */
    totalAnnRate: string;

    /*!
     * Rate of yield
     */
    pnlRatio: string;

    /*!
     * Market value in unit of `USDT`
     */
    mktCap: string;

    /*!
     * Accumulate recurring buy cycles
     */
    cycles: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetRecurringBuyOrderListResponse = OkxResponse<GetRecurringBuyOrderListData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-order-history
   */
  export interface GetRecurringBuyOrderHistoryRequestParams {
    /*!
     * Algo ID
     */
    algoId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `algoId`.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100; The default is 100
     */
    limit?: string;

  }

  export type GetRecurringBuyOrderHistoryData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Algo order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Algo order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Algo order type
     * `recurring`: recurring buy
     */
    algoOrdType: string;

    /*!
     * Algo order state
     * `stopped`
     */
    state: string;

    /*!
     * Custom name for trading bot, no more than 40 characters
     */
    stgyName: string;

    /*!
     * Recurring buy info
     */
    recurringList: any[];

    /*!
     * Period
     * `monthly`
     * `weekly`
     * `daily`
     */
    period: string;

    /*!
     * Recurring buy date
     * When the period is `monthly`, the value range is an integer of [1,28]
     * When the period is `weekly`, the value range is an integer of [1,7]
     * When the period is `daily`, the value is `1`
     */
    recurringDay: string;

    /*!
     * Recurring buy time, the value range is an integer of [0,23]
     */
    recurringTime: string;

    /*!
     * UTC time zone，the value range is an integer of [-12,14]
     * e.g. &#34;8&#34; representing UTC+8 (East 8 District), Beijing Time
     */
    timeZone: string;

    /*!
     * Quantity invested per cycle
     */
    amt: string;

    /*!
     * Accumulate quantity invested
     */
    investmentAmt: string;

    /*!
     * The invested quantity unit, can only be `USDT`/`USDC`
     */
    investmentCcy: string;

    /*!
     * Total P&amp;amp;L
     */
    totalPnl: string;

    /*!
     * Total annualized rate of yield
     */
    totalAnnRate: string;

    /*!
     * Rate of yield
     */
    pnlRatio: string;

    /*!
     * Market value in unit of `USDT`
     */
    mktCap: string;

    /*!
     * Accumulate recurring buy cycles
     */
    cycles: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetRecurringBuyOrderHistoryResponse = OkxResponse<GetRecurringBuyOrderHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-order-details
   */
  export interface GetRecurringBuyOrderDetailsRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

  }

  export type GetRecurringBuyOrderDetailsData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Client-supplied Algo ID
     */
    algoClOrdId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Algo order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Algo order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Algo order type
     * `recurring`: recurring buy
     */
    algoOrdType: string;

    /*!
     * Algo order state
     * `running`
     * `stopping`
     * `stopped`
     */
    state: string;

    /*!
     * Custom name for trading bot, no more than 40 characters
     */
    stgyName: string;

    /*!
     * Recurring buy info
     */
    recurringList: any[];

    /*!
     * Period
     * `monthly`
     * `weekly`
     * `daily`
     */
    period: string;

    /*!
     * Recurring buy date
     * When the period is `monthly`, the value range is an integer of [1,28]
     * When the period is `weekly`, the value range is an integer of [1,7]
     * When the period is `daily`, the value is `1`
     */
    recurringDay: string;

    /*!
     * Recurring buy time, the value range is an integer of [0,23]
     */
    recurringTime: string;

    /*!
     * UTC time zone，the value range is an integer of [-12,14]
     * e.g. &#34;8&#34; representing UTC+8 (East 8 District), Beijing Time
     */
    timeZone: string;

    /*!
     * Quantity invested per cycle
     */
    amt: string;

    /*!
     * Accumulate quantity invested
     */
    investmentAmt: string;

    /*!
     * The invested quantity unit, can only be `USDT`/`USDC`
     */
    investmentCcy: string;

    /*!
     * Total P&amp;amp;L
     */
    totalPnl: string;

    /*!
     * Total annualized rate of yield
     */
    totalAnnRate: string;

    /*!
     * Rate of yield
     */
    pnlRatio: string;

    /*!
     * Market value in unit of `USDT`
     */
    mktCap: string;

    /*!
     * Accumulate recurring buy cycles
     */
    cycles: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetRecurringBuyOrderDetailsResponse = OkxResponse<GetRecurringBuyOrderDetailsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-recurring-buy-get-recurring-buy-sub-orders
   */
  export interface GetRecurringBuySubOrdersRequestParams {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Sub order ID
     */
    ordId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `algoId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `algoId`.
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is 100; The default is 100
     */
    limit?: string;

  }

  export type GetRecurringBuySubOrdersData = {
    /*!
     * Algo ID
     */
    algoId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Algo order type
     * `recurring`: recurring buy
     */
    algoOrdType: string;

    /*!
     * Sub order ID
     */
    ordId: string;

    /*!
     * Sub order created time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    cTime: string;

    /*!
     * Sub order updated time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    uTime: string;

    /*!
     * Sub order trade mode
     * Margin mode : `cross`
     * Non-Margin mode : `cash`
     */
    tdMode: string;

    /*!
     * Sub order type
     * `market`: Market order
     */
    ordType: string;

    /*!
     * Sub order quantity to buy or sell
     */
    sz: string;

    /*!
     * Sub order state
     * `canceled`
     * `live`
     * `partially_filled`
     * `filled`
     * `cancelling`
     */
    state: string;

    /*!
     * Sub order side
     * `buy` `sell`
     */
    side: string;

    /*!
     * Sub order limit price
     * If it&#39;s a market order, &#34;-1&#34; will be return
     */
    px: string;

    /*!
     * Sub order fee
     */
    fee: string;

    /*!
     * Sub order fee currency
     */
    feeCcy: string;

    /*!
     * Sub order average filled price
     */
    avgPx: string;

    /*!
     * Sub order accumulated fill quantity
     */
    accFillSz: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetRecurringBuySubOrdersResponse = OkxResponse<GetRecurringBuySubOrdersData>;

}
export namespace savings {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-saving-balance
   */
  export interface GetSavingBalanceRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy?: string;

  }

  export type GetSavingBalanceData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Currency amount
     */
    amt: string;

    /*!
     * Currency earnings
     */
    earnings: string;

    /*!
     * Lending rate
     */
    rate: string;

    /*!
     * Lending amount
     */
    loanAmt: string;

    /*!
     * Pending amount
     */
    pendingAmt: string;

    /*!
     * Redempting amount
     */
    redemptAmt: string;

  }

  export type GetSavingBalanceResponse = OkxResponse<GetSavingBalanceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-savings-purchase-redemption
   */
  export interface SavingsPurchaseRedemptionRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Purchase/redemption amount
     */
    amt: string;

    /*!
     * Action type.
     * `purchase`: purchase saving shares
     * `redempt`: redeem saving shares
     */
    side: string;

    /*!
     * Annual purchase rate
     * Only applicable to purchase saving shares
     * The interest rate of the new subscription will cover the interest rate of the last subscription
     * The rate value range is between 1% and 365%
     */
    rate: string;

  }

  export type SavingsPurchaseRedemptionData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Purchase/Redemption amount
     */
    amt: string;

    /*!
     * Action type
     */
    side: string;

    /*!
     * Annual purchase rate
     */
    rate: string;

  }

  export type SavingsPurchaseRedemptionResponse = OkxResponse<SavingsPurchaseRedemptionData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-set-lending-rate
   */
  export interface SetLendingRateRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Annual lending rate
     * The rate value range is between 1% and 365%
     */
    rate: string;

  }

  export type SetLendingRateData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Annual lending rate
     */
    rate: string;

  }

  export type SetLendingRateResponse = OkxResponse<SetLendingRateData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-lending-history
   */
  export interface GetLendingHistoryRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetLendingHistoryData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Lending amount
     */
    amt: string;

    /*!
     * Currency earnings
     */
    earnings: string;

    /*!
     * Lending annual interest rate
     */
    rate: string;

    /*!
     * Lending time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetLendingHistoryResponse = OkxResponse<GetLendingHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-public-borrow-info-public
   */
  export interface GetPublicBorrowInfoPublicRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy?: string;

  }

  export type GetPublicBorrowInfoPublicData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * 24H average borrowing amount
     */
    avgAmt: string;

    /*!
     * 24H average borrowing amount in `USD` value
     */
    avgAmtUsd: string;

    /*!
     * 24H average lending rate
     */
    avgRate: string;

    /*!
     * Last annual interest rate
     */
    preRate: string;

    /*!
     * Next estimate annual interest rate
     */
    estRate: string;

  }

  export type GetPublicBorrowInfoPublicResponse = OkxResponse<GetPublicBorrowInfoPublicData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-savings-get-public-borrow-history-public
   */
  export interface GetPublicBorrowHistoryPublicRequestParams {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetPublicBorrowHistoryPublicData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Borrowed amount
     */
    amt: string;

    /*!
     * Borrow annual interest rate
     */
    rate: string;

    /*!
     * Time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetPublicBorrowHistoryPublicResponse = OkxResponse<GetPublicBorrowHistoryPublicData>;

}
export namespace earn {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-get-offers
   */
  export interface GetOffersRequestParams {
    /*!
     * Product ID
     */
    productId?: string;

    /*!
     * Protocol type
     * `staking`: staking `defi`: DEFI
     */
    protocolType?: string;

    /*!
     * Investment currency, e.g. `BTC`
     */
    ccy?: string;

  }

  export type GetOffersData = {
    /*!
     * Currency type, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Product ID
     */
    productId: string;

    /*!
     * Protocol
     */
    protocol: string;

    /*!
     * Protocol type
     * `staking`：staking `defi`：DEFI
     */
    protocolType: string;

    /*!
     * Protocol term
     * For current, this field is 0, and for others it shows the number of deposit days
     */
    term: string;

    /*!
     * Estimated annualization
     * If the annualization is 7% , this field is 0.07
     */
    apy: string;

    /*!
     * Whether the protocol supports early redemption
     */
    earlyRedeem: boolean;

    /*!
     * Current target currency information available for investment
     */
    investData: any[];

    /*!
     * Earning data
     */
    earningData: any[];

    /*!
     * Product state
     * `purchasable`: Purchasable
     * `sold_out`: Sold out
     * `Stop`: Suspension of subscription
     */
    state: string;

  }

  export type GetOffersResponse = OkxResponse<GetOffersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-purchase
   */
  export interface PurchaseRequestParams {
    /*!
     * Product ID
     */
    productId: string;

    /*!
     * Investment data
     */
    investData: any[];

    /*!
     * Investment term
     * Investment term must be specified for fixed-term projects
     */
    term?: string;

    /*!
     * Order tag
     * A combination of case-sensitive alphanumerics, all numbers, or all letters of up to 16 characters.
     */
    tag?: string;

  }

  export type PurchaseData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type PurchaseResponse = OkxResponse<PurchaseData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-redeem
   */
  export interface RedeemRequestParams {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Protocol type
     * `staking`: staking `defi`: DEFI
     */
    protocolType: string;

    /*!
     * Whether allows early redemption
     * Default is `false`
     */
    allowEarlyRedeem?: boolean;

  }

  export type RedeemData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type RedeemResponse = OkxResponse<RedeemData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-cancel-purchases-redemptions
   */
  export interface CancelPurchasesRedemptionsRequestParams {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Protocol type
     * `staking`: staking `defi`: DEFI
     */
    protocolType: string;

  }

  export type CancelPurchasesRedemptionsData = {
    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type CancelPurchasesRedemptionsResponse = OkxResponse<CancelPurchasesRedemptionsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-get-active-orders
   */
  export interface GetActiveOrdersRequestParams {
    /*!
     * Product ID
     */
    productId?: string;

    /*!
     * Protocol type
     * `staking`: staking `defi`: DEFI
     */
    protocolType?: string;

    /*!
     * Investment currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * Order state
     * `8`: Pending
     * `13`: Cancelling
     * `9`: Onchain
     * `1`: Earning
     * `2`: Redeeming
     */
    state?: string;

  }

  export type GetActiveOrdersData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Product ID
     */
    productId: string;

    /*!
     * Order state
     * 8: Pending
     * 13: Cancelling
     * 9: Onchain
     * 1: Earning
     * 2: Redeeming
     */
    state: string;

    /*!
     * Protocol
     */
    protocol: string;

    /*!
     * Protocol type
     * `staking`: staking `defi`: DEFI
     */
    protocolType: string;

    /*!
     * Protocol term
     * For current, this field is 0, and for others it shows the number of deposit days
     */
    term: string;

    /*!
     * Estimated annualization
     * If the annualization is 7% , this field is 0.07
     * Retain to 4 decimal places (truncated)
     */
    apy: string;

    /*!
     * Investment data
     */
    investData: any[];

    /*!
     * Earning data
     */
    earningData: any[];

    /*!
     * Order purchased time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    purchasedTime: string;

    /*!
     * Estimated redemption settlement time
     */
    estSettlementTime: string;

    /*!
     * Deadline for cancellation of redemption application
     */
    cancelRedemptionDeadline: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetActiveOrdersResponse = OkxResponse<GetActiveOrdersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-earn-get-order-history
   */
  export interface GetOrderHistoryRequestParams {
    /*!
     * Product ID
     */
    productId?: string;

    /*!
     * Protocol type
     * `staking`: staking `defi`: DEFI
     */
    protocolType?: string;

    /*!
     * Investment currency, e.g. `BTC`
     */
    ccy?: string;

    /*!
     * Pagination of data to return records earlier than the requested ID. The value passed is the corresponding `ordId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested ID. The value passed is the corresponding `ordId`
     */
    before?: string;

    /*!
     * Number of results per request. The default is `100`. The maximum is `100`.
     */
    limit?: string;

  }

  export type GetOrderHistoryData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Order ID
     */
    ordId: string;

    /*!
     * Product ID
     */
    productId: string;

    /*!
     * Order state
     * 3: Completed (including canceled and redeemed)
     */
    state: string;

    /*!
     * Protocol
     */
    protocol: string;

    /*!
     * Protocol type
     * `staking`: staking `defi`: DEFI
     */
    protocolType: string;

    /*!
     * Protocol term
     * For current, this field is 0, and for others it shows the number of deposit days
     */
    term: string;

    /*!
     * Estimated annualization
     * If the annualization is 7% , this field is 0.07
     * Retain to 4 decimal places (truncated)
     */
    apy: string;

    /*!
     * Investment data
     */
    investData: any[];

    /*!
     * Earning data
     */
    earningData: any[];

    /*!
     * Order purchased time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    purchasedTime: string;

    /*!
     * Order redeemed time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    redeemedTime: string;

    /*!
     * Order tag
     */
    tag: string;

  }

  export type GetOrderHistoryResponse = OkxResponse<GetOrderHistoryData>;

}
export namespace copyTrading {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-existing-leading-positions
   */
  export interface GetExistingLeadingPositionsRequestParams {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP
     */
    instId?: string;

  }

  export type GetExistingLeadingPositionsData = {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP
     */
    instId: string;

    /*!
     * Leading position ID
     */
    subPosId: string;

    /*!
     * Position side
     * `long`
     * `short`
     * `net`
     * (Long positions have positive pos; short positions have negative pos)
     */
    posSide: string;

    /*!
     * Margin mode. `cross` `isolated`
     */
    mgnMode: string;

    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Order ID for opening position
     */
    openOrdId: string;

    /*!
     * Average open price
     */
    openAvgPx: string;

    /*!
     * Open time
     */
    openTime: string;

    /*!
     * Quantity of positions
     */
    subPos: string;

    /*!
     * Take-profit trigger price. Take-profit order price will be the market price after triggering.
     */
    tpTriggerPx: string;

    /*!
     * Stop-loss trigger price. Stop-loss order price will be the market price after triggering.
     */
    slTriggerPx: string;

    /*!
     * Stop order ID
     */
    algoId: string;

  }

  export type GetExistingLeadingPositionsResponse = OkxResponse<GetExistingLeadingPositionsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-leading-position-history
   */
  export interface GetLeadingPositionHistoryRequestParams {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP
     */
    instId?: string;

    /*!
     * Pagination of data to return records earlier than the requested `subPosId`.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `subPosId`.
     */
    before?: string;

    /*!
     * Number of results per request. Maximum is 100. Default is 100.
     */
    limit?: string;

  }

  export type GetLeadingPositionHistoryData = {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP
     */
    instId: string;

    /*!
     * Leading position ID
     */
    subPosId: string;

    /*!
     * Position side
     * `long`
     * `short`
     * `net`
     * (long position has positive pos; short position has negative pos)
     */
    posSide: string;

    /*!
     * Margin mode. `cross` `isolated`
     */
    mgnMode: string;

    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Order ID for opening position
     */
    openOrdId: string;

    /*!
     * Average open price
     */
    openAvgPx: string;

    /*!
     * Time of opening
     */
    openTime: string;

    /*!
     * Quantity of positions
     */
    subPos: string;

    /*!
     * Time of closing position
     */
    closeTime: string;

    /*!
     * Average price of closing position
     */
    closeAvgPx: string;

    /*!
     * Profit and loss
     */
    pnl: string;

    /*!
     * P&amp;amp;L ratio
     */
    pnlRatio: string;

  }

  export type GetLeadingPositionHistoryResponse = OkxResponse<GetLeadingPositionHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-place-leading-stop-order
   */
  export interface PlaceLeadingStopOrderRequestParams {
    /*!
     * Leading position ID
     */
    subPosId: string;

    /*!
     * Take-profit trigger price. Take-profit order price will be the market price after triggering. At least one of tpTriggerPx and slTriggerPx must be filled
     */
    tpTriggerPx?: string;

    /*!
     * Stop-loss trigger price. Stop-loss order price will be the market price after triggering.
     */
    slTriggerPx?: string;

    /*!
     * Take-profit trigger price type
     * 
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     * Default is `last`
     */
    tpTriggerPxType?: string;

    /*!
     * Stop-loss trigger price type
     * `last`: last price
     * `index`: index price
     * `mark`: mark price
     * Default is last
     */
    slTriggerPxType?: string;

  }

  export type PlaceLeadingStopOrderData = {
    /*!
     * Leading position ID
     */
    subPosId: string;

  }

  export type PlaceLeadingStopOrderResponse = OkxResponse<PlaceLeadingStopOrderData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-close-leading-position
   */
  export interface CloseLeadingPositionRequestParams {
    /*!
     * Leading position ID
     */
    subPosId: string;

  }

  export type CloseLeadingPositionData = {
    /*!
     * Leading position ID
     */
    subPosId: string;

  }

  export type CloseLeadingPositionResponse = OkxResponse<CloseLeadingPositionData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-leading-instruments
   */
  export interface GetLeadingInstrumentsRequestParams {
  }

  export type GetLeadingInstrumentsData = {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP
     */
    instId: string;

    /*!
     * Whether instrument is a leading instrument. `true` or `false`
     */
    enabled: boolean;

  }

  export type GetLeadingInstrumentsResponse = OkxResponse<GetLeadingInstrumentsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-amend-leading-instruments
   */
  export interface AmendLeadingInstrumentsRequestParams {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP. If there are multiple instruments, separate them with commas. Maximum of 31 instruments can be selected.
     */
    instId: string;

  }

  export type AmendLeadingInstrumentsData = {
    /*!
     * Instrument ID, e.g. BTC-USDT-SWAP
     */
    instId: string;

    /*!
     * Whether the instrument is a leading instrument. `true` or `false`
     */
    enabled: boolean;

  }

  export type AmendLeadingInstrumentsResponse = OkxResponse<AmendLeadingInstrumentsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-profit-sharing-details
   */
  export interface GetProfitSharingDetailsRequestParams {
    /*!
     * Pagination of data to return records earlier than the requested `profitSharingId`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `profitSharingId`
     */
    before?: string;

    /*!
     * Number of results per request. Maximum is 100. Default is 100.
     */
    limit?: string;

  }

  export type GetProfitSharingDetailsData = {
    /*!
     * The currency of profit sharing.
     */
    ccy: string;

    /*!
     * Profit sharing amount. Default is 0.
     */
    profitSharingAmt: string;

    /*!
     * Nickname of copy trader.
     */
    nickName: string;

    /*!
     * Profit sharing ID.
     */
    profitSharingId: string;

    /*!
     * Profit sharing time.
     */
    ts: string;

  }

  export type GetProfitSharingDetailsResponse = OkxResponse<GetProfitSharingDetailsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-total-profit-sharing
   */
  export interface GetTotalProfitSharingRequestParams {
  }

  export type GetTotalProfitSharingData = {
    /*!
     * The currency of profit sharing.
     */
    ccy: string;

    /*!
     * Total profit sharing amount.
     */
    totalProfitSharingAmt: string;

  }

  export type GetTotalProfitSharingResponse = OkxResponse<GetTotalProfitSharingData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-copy-trading-get-unrealized-profit-sharing-details
   */
  export interface GetUnrealizedProfitSharingDetailsRequestParams {
  }

  export type GetUnrealizedProfitSharingDetailsData = {
    /*!
     * The currency of profit sharing. e.g. USDT
     */
    ccy: string;

    /*!
     * Unrealized profit sharing amount.
     */
    unrealizedProfitSharingAmt: string;

    /*!
     * Nickname of copy trader.
     */
    nickName: string;

    /*!
     * Update time.
     */
    ts: string;

  }

  export type GetUnrealizedProfitSharingDetailsResponse = OkxResponse<GetUnrealizedProfitSharingDetailsData>;

}
export namespace marketData {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-tickers
   */
  export interface GetTickersRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Underlying, e.g. `BTC-USD`
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

  }

  export type GetTickersData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Last traded price
     */
    last: string;

    /*!
     * Last traded size
     */
    lastSz: string;

    /*!
     * Best ask price
     */
    askPx: string;

    /*!
     * Best ask size
     */
    askSz: string;

    /*!
     * Best bid price
     */
    bidPx: string;

    /*!
     * Best bid size
     */
    bidSz: string;

    /*!
     * Open price in the past 24 hours
     */
    open24h: string;

    /*!
     * Highest price in the past 24 hours
     */
    high24h: string;

    /*!
     * Lowest price in the past 24 hours
     */
    low24h: string;

    /*!
     * 24h trading volume, with a unit of `currency`.
     * If it is a `derivatives` contract, the value is the number of base currency.
     * If it is `SPOT/MARGIN`, the value is the quantity in quote currency.
     */
    volCcy24h: string;

    /*!
     * 24h trading volume, with a unit of `contract`.
     * If it is a `derivatives` contract, the value is the number of contracts.
     * If it is `SPOT/MARGIN`, the value is the quantity in base currency.
     */
    vol24h: string;

    /*!
     * Open price in the UTC 0
     */
    sodUtc0: string;

    /*!
     * Open price in the UTC 8
     */
    sodUtc8: string;

    /*!
     * Ticker data generation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetTickersResponse = OkxResponse<GetTickersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-ticker
   */
  export interface GetTickerRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId: string;

  }

  export type GetTickerData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Last traded price
     */
    last: string;

    /*!
     * Last traded size
     */
    lastSz: string;

    /*!
     * Best ask price
     */
    askPx: string;

    /*!
     * Best ask size
     */
    askSz: string;

    /*!
     * Best bid price
     */
    bidPx: string;

    /*!
     * Best bid size
     */
    bidSz: string;

    /*!
     * Open price in the past 24 hours
     */
    open24h: string;

    /*!
     * Highest price in the past 24 hours
     */
    high24h: string;

    /*!
     * Lowest price in the past 24 hours
     */
    low24h: string;

    /*!
     * 24h trading volume, with a unit of `currency`.
     * If it is a `derivatives` contract, the value is the number of base currency.
     * If it is `SPOT/MARGIN`, the value is the quantity in quote currency.
     */
    volCcy24h: string;

    /*!
     * 24h trading volume, with a unit of `contract`.
     * If it is a `derivatives` contract, the value is the number of contracts.
     * If it is `SPOT/MARGIN`, the value is the quantity in base currency.
     */
    vol24h: string;

    /*!
     * Open price in the UTC 0
     */
    sodUtc0: string;

    /*!
     * Open price in the UTC 8
     */
    sodUtc8: string;

    /*!
     * Ticker data generation time, Unix timestamp format in milliseconds, e.g. `1597026383085`.
     */
    ts: string;

  }

  export type GetTickerResponse = OkxResponse<GetTickerData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-tickers
   */
  export interface GetIndexTickersRequestParams {
    /*!
     * Quote currency
     * Currently there is only an index with `USD/USDT/BTC` as the quote currency.
     */
    quoteCcy?: string;

    /*!
     * Index, e.g. `BTC-USD`
     * Either `quoteCcy` or `instId` is required.
     */
    instId?: string;

  }

  export type GetIndexTickersData = {
    /*!
     * Index
     */
    instId: string;

    /*!
     * Latest index price
     */
    idxPx: string;

    /*!
     * Highest price in the past 24 hours
     */
    high24h: string;

    /*!
     * Lowest price in the past 24 hours
     */
    low24h: string;

    /*!
     * Open price in the past 24 hours
     */
    open24h: string;

    /*!
     * Open price in the UTC 0
     */
    sodUtc0: string;

    /*!
     * Open price in the UTC 8
     */
    sodUtc8: string;

    /*!
     * Index price update time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetIndexTickersResponse = OkxResponse<GetIndexTickersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-order-book
   */
  export interface GetOrderBookRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Order book depth per side. Maximum 400, e.g. 400 bids + 400 asks
     * Default returns to `1` depth data
     */
    sz?: string;

  }

  export type GetOrderBookData = {
    /*!
     * Order book on sell side
     */
    asks: any[];

    /*!
     * Order book on buy side
     */
    bids: any[];

    /*!
     * Order book generation time
     */
    ts: string;

  }

  export type GetOrderBookResponse = OkxResponse<GetOrderBookData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-order-lite-book
   */
  export interface GetOrderLiteBookRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

  }

  export type GetOrderLiteBookData = {
    /*!
     * Order book on sell side
     */
    asks: any[];

    /*!
     * Order book on buy side
     */
    bids: any[];

    /*!
     * Order book generation time
     */
    ts: string;

  }

  export type GetOrderLiteBookResponse = OkxResponse<GetOrderLiteBookData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-candlesticks
   */
  export interface GetCandlesticksRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-190927-5000-C`
     */
    instId: string;

    /*!
     * Bar size, the default is `1m`
     * e.g. [1m/3m/5m/15m/30m/1H/2H/4H]
     * Hong Kong time opening price k-line：[6H/12H/1D/2D/3D/1W/1M/3M]
     * UTC time opening price k-line：[/6Hutc/12Hutc/1Dutc/2Dutc/3Dutc/1Wutc/1Mutc/3Mutc]
     */
    bar?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `300`. The default is `100`.
     */
    limit?: string;

  }

  export type GetCandlesticksData = [
    /*!
     * Opening time of the candlestick, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    string,

    /*!
     * Open price
     */
    string,

    /*!
     * highest price
     */
    string,

    /*!
     * Lowest price
     */
    string,

    /*!
     * Close price
     */
    string,

    /*!
     * Trading volume, with a unit of `contract`.
     * If it is a `derivatives` contract, the value is the number of contracts.
     * If it is `SPOT/MARGIN`, the value is the quantity in base currency.
     */
    string,

    /*!
     * Trading volume, with a unit of `currency`.
     * If it is a `derivatives` contract, the value is the number of base currency.
     * If it is `SPOT/MARGIN`, the value is the quantity in quote currency.
     */
    string,

    /*!
     * Trading volume, the value is the quantity in quote currency
     * e.g. The unit is USDT for BTC-USDT and BTC-USDT-SWAP;
     * The unit is USD for BTC-USD-SWAP
     */
    string,

    /*!
     * The state of candlesticks.
     * `0` represents that it is uncompleted, `1` represents that it is completed.
     */
    string,

  ]

  export type GetCandlesticksResponse = OkxResponse<GetCandlesticksData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-candlesticks-history
   */
  export interface GetCandlesticksHistoryRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-200927`
     */
    instId: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Bar size, the default is `1m`
     * e.g. [1m/3m/5m/15m/30m/1H/2H/4H]
     * Hong Kong time opening price k-line：[6H/12H/1D/2D/3D/1W/1M/3M]
     * UTC time opening price k-line：[6Hutc/12Hutc/1Dutc/2Dutc/3Dutc/1Wutc/1Mutc/3Mutc]
     */
    bar?: string;

    /*!
     * Number of results per request. The maximum is `100`. The default is `100`.
     */
    limit?: string;

  }

  export type GetCandlesticksHistoryData = [
    /*!
     * Opening time of the candlestick, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    string,

    /*!
     * Open price
     */
    string,

    /*!
     * Highest price
     */
    string,

    /*!
     * Lowest price
     */
    string,

    /*!
     * Close price
     */
    string,

    /*!
     * Trading volume, with a unit of `contract`.
     * If it is a `derivatives` contract, the value is the number of contracts.
     * If it is `SPOT/MARGIN`, the value is the quantity in base currency.
     */
    string,

    /*!
     * Trading volume, with a unit of `currency`.
     * If it is a `derivatives` contract, the value is the number of base currency.
     * If it is `SPOT/MARGIN`, the value is the quantity in quote currency.
     */
    string,

    /*!
     * Trading volume, the value is the quantity in quote currency
     * e.g. The unit is USDT for BTC-USDT and BTC-USDT-SWAP;
     * The unit is USD for BTC-USD-SWAP
     */
    string,

    /*!
     * The state of candlesticks.
     * `0` represents that it is uncompleted, `1` represents that it is completed.
     */
    string,

  ]

  export type GetCandlesticksHistoryResponse = OkxResponse<GetCandlesticksHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-candlesticks
   */
  export interface GetIndexCandlesticksRequestParams {
    /*!
     * Index, e.g. `BTC-USD`
     */
    instId: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Bar size, the default is `1m`
     * e.g. [1m/3m/5m/15m/30m/1H/2H/4H]
     * Hong Kong time opening price k-line：[6H/12H/1D/1W/1M/3M]
     * UTC time opening price k-line：[/6Hutc/12Hutc/1Dutc/1Wutc/1Mutc/3Mutc]
     */
    bar?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetIndexCandlesticksData = [
    /*!
     * Opening time of the candlestick, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    string,

    /*!
     * Open price
     */
    string,

    /*!
     * highest price
     */
    string,

    /*!
     * Lowest price
     */
    string,

    /*!
     * Close price
     */
    string,

    /*!
     * The state of candlesticks.
     * `0` represents that it is uncompleted, `1` represents that it is completed.
     */
    string,

  ]

  export type GetIndexCandlesticksResponse = OkxResponse<GetIndexCandlesticksData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-candlesticks-history
   */
  export interface GetIndexCandlesticksHistoryRequestParams {
    /*!
     * Index, e.g. `BTC-USD`
     */
    instId: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Bar size, the default is `1m`
     * e.g. [1m/3m/5m/15m/30m/1H/2H/4H]
     * Hong Kong time opening price k-line：[6H/12H/1D/1W/1M]
     * UTC time opening price k-line：[/6Hutc/12Hutc/1Dutc/1Wutc/1Mutc]
     */
    bar?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetIndexCandlesticksHistoryData = [
    /*!
     * Opening time of the candlestick, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    string,

    /*!
     * Open price
     */
    string,

    /*!
     * highest price
     */
    string,

    /*!
     * Lowest price
     */
    string,

    /*!
     * Close price
     */
    string,

    /*!
     * The state of candlesticks.
     * `0` represents that it is uncompleted, `1` represents that it is completed.
     */
    string,

  ]

  export type GetIndexCandlesticksHistoryResponse = OkxResponse<GetIndexCandlesticksHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-mark-price-candlesticks
   */
  export interface GetMarkPriceCandlesticksRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Bar size, the default is `1m`
     * e.g. [1m/3m/5m/15m/30m/1H/2H/4H]
     * Hong Kong time opening price k-line：[6H/12H/1D/1W/1M/3M]
     * UTC time opening price k-line：[6Hutc/12Hutc/1Dutc/1Wutc/1Mutc/3Mutc]
     */
    bar?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetMarkPriceCandlesticksData = [
    /*!
     * Opening time of the candlestick, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    string,

    /*!
     * Open price
     */
    string,

    /*!
     * highest price
     */
    string,

    /*!
     * Lowest price
     */
    string,

    /*!
     * Close price
     */
    string,

    /*!
     * The state of candlesticks.
     * `0` represents that it is uncompleted, `1` represents that it is completed.
     */
    string,

  ]

  export type GetMarkPriceCandlesticksResponse = OkxResponse<GetMarkPriceCandlesticksData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-mark-price-candlesticks-history
   */
  export interface GetMarkPriceCandlesticksHistoryRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Bar size, the default is `1m`
     * e.g. [1m/3m/5m/15m/30m/1H/2H/4H]
     * Hong Kong time opening price k-line：[6H/12H/1D/1W/1M]
     * UTC time opening price k-line：[6Hutc/12Hutc/1Dutc/1Wutc/1Mutc]
     */
    bar?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetMarkPriceCandlesticksHistoryData = [
    /*!
     * Opening time of the candlestick, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    string,

    /*!
     * Open price
     */
    string,

    /*!
     * highest price
     */
    string,

    /*!
     * Lowest price
     */
    string,

    /*!
     * Close price
     */
    string,

    /*!
     * The state of candlesticks.
     * `0` represents that it is uncompleted, `1` represents that it is completed.
     */
    string,

  ]

  export type GetMarkPriceCandlesticksHistoryResponse = OkxResponse<GetMarkPriceCandlesticksHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-trades
   */
  export interface GetTradesRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Number of results per request. The maximum is `500`; The default is `100`
     */
    limit?: string;

  }

  export type GetTradesData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Trade ID
     */
    tradeId: string;

    /*!
     * Trade price
     */
    px: string;

    /*!
     * Trade quantity
     */
    sz: string;

    /*!
     * Trade side
     * `buy`
     * `sell`
     */
    side: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. `1597026383085`.
     */
    ts: string;

  }

  export type GetTradesResponse = OkxResponse<GetTradesData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-trades-history
   */
  export interface GetTradesHistoryRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

    /*!
     * Pagination Type
     * `1`: tradeId `2`: timestamp
     * The default is `1`
     */
    type?: string;

    /*!
     * Pagination of data to return records earlier than the requested tradeId or ts.
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested tradeId.
     * Do not support timestamp for pagination
     */
    before?: string;

    /*!
     * Number of results per request. The maximum and default both are `100`
     */
    limit?: string;

  }

  export type GetTradesHistoryData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Trade ID
     */
    tradeId: string;

    /*!
     * Trade price
     */
    px: string;

    /*!
     * Trade quantity
     */
    sz: string;

    /*!
     * Trade side
     * `buy`
     * `sell`
     */
    side: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. `1597026383085`.
     */
    ts: string;

  }

  export type GetTradesHistoryResponse = OkxResponse<GetTradesHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-option-trades
   */
  export interface GetOptionTradesRequestParams {
    /*!
     * Instrument family, e.g. BTC-USD
     * Applicable to `OPTION`
     */
    instFamily: string;

  }

  export type GetOptionTradesData = {
    /*!
     * 24h trading volume, with a unit of contract.
     */
    vol24h: string;

    /*!
     * Option type, C: Call P: Put
     */
    optType: string;

    /*!
     * The list trade data
     */
    tradeInfo: any[];

  }

  export type GetOptionTradesResponse = OkxResponse<GetOptionTradesData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-24h-total-volume
   */
  export interface Get24hTotalVolumeRequestParams {
  }

  export type Get24hTotalVolumeData = {
    /*!
     * 24-hour total trading volume from the order book trading in &#34;USD&#34;
     */
    volUsd: string;

    /*!
     * 24-hour total trading volume from the order book trading in &#34;CNY&#34;
     */
    volCny: string;

    /*!
     * Data return time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type Get24hTotalVolumeResponse = OkxResponse<Get24hTotalVolumeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-oracle
   */
  export interface GetOracleRequestParams {
  }

  export type GetOracleData = {
    /*!
     * ABI-encoded values [kind, timestamp, key, value], where kind equals &#39;prices&#39;, timestamp is the time when price was obtained, key is the asset ticker (e.g. btc) and value is the asset price.
     */
    messages: string;

    /*!
     * Readable asset prices
     */
    prices: string;

    /*!
     * Ethereum-compatible ECDSA signatures for each message
     */
    signatures: string;

    /*!
     * Time of latest datapoint, Unix timestamp, e.g. `1597026387`
     */
    timestamp: string;

  }

  export type GetOracleResponse = OkxResponse<GetOracleData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-exchange-rate
   */
  export interface GetExchangeRateRequestParams {
  }

  export type GetExchangeRateData = {
    /*!
     * Exchange rate
     */
    usdCny: string;

  }

  export type GetExchangeRateResponse = OkxResponse<GetExchangeRateData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-components
   */
  export interface GetIndexComponentsRequestParams {
    /*!
     * index, e.g `BTC-USDT`
     */
    index: string;

  }

  export type GetIndexComponentsData = {
    /*!
     * Index
     */
    index: string;

    /*!
     * Latest Index Price
     */
    last: string;

    /*!
     * Data generation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

    /*!
     * Components
     */
    components: string;

  }

  export type GetIndexComponentsResponse = OkxResponse<GetIndexComponentsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-block-tickers
   */
  export interface GetBlockTickersRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Underlying, e.g. `BTC-USD`
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family, e.g. `BTC-USD`
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

  }

  export type GetBlockTickersData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * 24h trading volume, with a unit of `currency`.
     * If it is a `derivatives` contract, the value is the number of base currency.
     * If it is `SPOT/MARGIN`, the value is the quantity in quote currency.
     */
    volCcy24h: string;

    /*!
     * 24h trading volume, with a unit of `contract`.
     * If it is a `derivatives` contract, the value is the number of contracts.
     * If it is `SPOT/MARGIN`, the value is the quantity in base currency.
     */
    vol24h: string;

    /*!
     * Block ticker data generation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetBlockTickersResponse = OkxResponse<GetBlockTickersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-block-ticker
   */
  export interface GetBlockTickerRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId: string;

  }

  export type GetBlockTickerData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * 24h trading volume, with a unit of `currency`.
     * If it is a `derivatives` contract, the value is the number of base currency.
     * If it is `SPOT/MARGIN`, the value is the quantity in quote currency.
     */
    volCcy24h: string;

    /*!
     * 24h trading volume, with a unit of `contract`.
     * If it is a `derivatives` contract, the value is the number of contracts.
     * If it is `SPOT/MARGIN`, the value is the quantity in base currency.
     */
    vol24h: string;

    /*!
     * Block ticker data generation time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetBlockTickerResponse = OkxResponse<GetBlockTickerData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-market-data-get-block-trades
   */
  export interface GetBlockTradesRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT`
     */
    instId: string;

  }

  export type GetBlockTradesData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Trade ID
     */
    tradeId: string;

    /*!
     * Trade price
     */
    px: string;

    /*!
     * Trade quantity
     */
    sz: string;

    /*!
     * Trade side
     * `buy`
     * `sell`
     */
    side: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. `1597026383085`.
     */
    ts: string;

  }

  export type GetBlockTradesResponse = OkxResponse<GetBlockTradesData>;

}
export namespace publicData {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-instruments
   */
  export interface GetInstrumentsRequestParams {
    /*!
     * Instrument type
     * `SPOT`
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Underlying
     * Only applicable to `FUTURES/SWAP/OPTION`.If instType is `OPTION`, either `uly` or `instFamily` is required.
     */
    uly?: string;

    /*!
     * Instrument family
     * Only applicable to `FUTURES/SWAP/OPTION`. If instType is `OPTION`, either `uly` or `instFamily` is required.
     */
    instFamily?: string;

    /*!
     * Instrument ID
     */
    instId?: string;

  }

  export type GetInstrumentsData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID,  e.g. `BTC-USD-SWAP`
     */
    instId: string;

    /*!
     * Underlying, e.g. `BTC-USD`
     * Only applicable to `FUTURES/SWAP/OPTION`
     */
    uly: string;

    /*!
     * Instrument family, e.g. `BTC-USD`
     * Only applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily: string;

    /*!
     * Currency category. Note: this parameter is already deprecated
     */
    category: string;

    /*!
     * Base currency, e.g. `BTC`  in`BTC-USDT`
     * Only applicable to `SPOT/MARGIN`
     */
    baseCcy: string;

    /*!
     * Quote currency, e.g. `USDT` in `BTC-USDT`
     * Only applicable to `SPOT/MARGIN`
     */
    quoteCcy: string;

    /*!
     * Settlement and margin currency, e.g. `BTC`
     * Only applicable to `FUTURES/SWAP/OPTION`
     */
    settleCcy: string;

    /*!
     * Contract value
     * Only applicable to `FUTURES/SWAP/OPTION`
     */
    ctVal: string;

    /*!
     * Contract multiplier
     * Only applicable to `FUTURES/SWAP/OPTION`
     */
    ctMult: string;

    /*!
     * Contract value currency
     * Only applicable to `FUTURES/SWAP/OPTION`
     */
    ctValCcy: string;

    /*!
     * Option type, `C`: Call  `P`: put
     * Only applicable to `OPTION`
     */
    optType: string;

    /*!
     * Strike price
     * Only applicable to `OPTION`
     */
    stk: string;

    /*!
     * Listing time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    listTime: string;

    /*!
     * Expiry time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     * Only applicable to `FUTURES/OPTION`
     */
    expTime: string;

    /*!
     * Max Leverage,
     * Not applicable to `SPOT`, `OPTION`
     */
    lever: string;

    /*!
     * Tick size,  e.g. `0.0001`
     * For Option, it is minimum tickSz among tick band, please use &#34;Get option tickBands&#34; if you want get option tickBands.
     */
    tickSz: string;

    /*!
     * Lot size, e.g. BTC-USDT-SWAP: `1`
     */
    lotSz: string;

    /*!
     * Minimum order size.
     * If it is a derivatives contract, the value is the number of contracts.
     * If it is `SPOT`/`MARGIN`, the value is the quantity in `base currency`.
     */
    minSz: string;

    /*!
     * Contract type
     * `linear`: linear contract
     * `inverse`: inverse contract
     * Only applicable to `FUTURES/SWAP`
     */
    ctType: string;

    /*!
     * Alias
     * `this_week`
     * `next_week`
     * `quarter`
     * `next_quarter`
     * Only applicable to `FUTURES`
     */
    alias: string;

    /*!
     * Instrument status
     * `live`
     * `suspend`
     * `preopen`. e.g. There will be preopen before the Futures and Options new contracts state is live.
     * `test`: Test pairs, can&#39;t be traded
     */
    state: string;

    /*!
     * The maximum order quantity of the contract or spot limit order.
     * 
     * If it is a derivatives contract, the value is the number of contracts.
     * If it is `SPOT`/`MARGIN`, the value is the quantity in `base currency`.
     */
    maxLmtSz: string;

    /*!
     * The maximum order quantity of the contract or spot market order.
     * If it is a derivatives contract, the value is the number of contracts.
     * If it is `SPOT`/`MARGIN`, the value is the quantity in &#34;USDT&#34;.
     */
    maxMktSz: string;

    /*!
     * The maximum order quantity of the contract or spot twap order.
     * If it is a derivatives contract, the value is the number of contracts.
     * If it is `SPOT`/`MARGIN`, the value is the quantity in `base currency`.
     */
    maxTwapSz: string;

    /*!
     * The maximum order quantity of the contract or spot iceBerg order.
     * If it is a derivatives contract, the value is the number of contracts.
     * If it is `SPOT`/`MARGIN`, the value is the quantity in `base currency`.
     */
    maxIcebergSz: string;

    /*!
     * The maximum order quantity of the contract or spot trigger order.
     * If it is a derivatives contract, the value is the number of contracts.
     * If it is `SPOT`/`MARGIN`, the value is the quantity in `base currency`.
     */
    maxTriggerSz: string;

    /*!
     * The maximum order quantity of the contract or spot stop market order.
     * If it is a derivatives contract, the value is the number of contracts.
     * If it is `SPOT`/`MARGIN`, the value is the quantity in &#34;USDT&#34;.
     */
    maxStopSz: string;

  }

  export type GetInstrumentsResponse = OkxResponse<GetInstrumentsData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-delivery-exercise-history
   */
  export interface GetDeliveryExerciseHistoryRequestParams {
    /*!
     * Instrument type
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Underlying, only applicable to `FUTURES/OPTION`
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    uly?: string;

    /*!
     * Instrument family, only applicable to `FUTURES/OPTION`
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    instFamily?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetDeliveryExerciseHistoryData = {
    /*!
     * Delivery/exercise time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

    /*!
     * Delivery/exercise details
     */
    details: string;

  }

  export type GetDeliveryExerciseHistoryResponse = OkxResponse<GetDeliveryExerciseHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-open-interest
   */
  export interface GetOpenInterestRequestParams {
    /*!
     * Instrument type
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`.
     * If instType is `OPTION`, either `uly` or `instFamily` is required.
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     * If instType is `OPTION`, either `uly` or `instFamily` is required.
     */
    instFamily?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-180216`
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instId?: string;

  }

  export type GetOpenInterestData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Open interest (cont)
     */
    oi: string;

    /*!
     * Open interest (coin)
     */
    oiCcy: string;

    /*!
     * Data return time,  Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetOpenInterestResponse = OkxResponse<GetOpenInterestData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-funding-rate
   */
  export interface GetFundingRateRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     * only applicable to `SWAP`
     */
    instId: string;

  }

  export type GetFundingRateData = {
    /*!
     * Instrument type  `SWAP`
     */
    instType: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId: string;

    /*!
     * Current funding rate
     */
    fundingRate: string;

    /*!
     * Forecasted funding rate for the next period
     */
    nextFundingRate: string;

    /*!
     * Settlement time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    fundingTime: string;

    /*!
     * Forecasted funding time for the next period , Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    nextFundingTime: string;

  }

  export type GetFundingRateResponse = OkxResponse<GetFundingRateData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-funding-rate-history
   */
  export interface GetFundingRateHistoryRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     * only applicable to `SWAP`
     */
    instId: string;

    /*!
     * Pagination of data to return records newer than the requested `fundingTime`
     */
    before?: string;

    /*!
     * Pagination of data to return records earlier than the requested `fundingTime`
     */
    after?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetFundingRateHistoryData = {
    /*!
     * Instrument type
     * `SWAP`
     */
    instType: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId: string;

    /*!
     * Predicted funding rate
     */
    fundingRate: string;

    /*!
     * Actual funding rate
     */
    realizedRate: string;

    /*!
     * Settlement time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    fundingTime: string;

  }

  export type GetFundingRateHistoryResponse = OkxResponse<GetFundingRateHistoryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-limit-price
   */
  export interface GetLimitPriceRequestParams {
    /*!
     * Instrument ID, e.g. `BTC-USDT-SWAP`
     * only applicable to `FUTURES/SWAP/OPTION`
     */
    instId: string;

  }

  export type GetLimitPriceData = {
    /*!
     * Instrument type
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Instrument ID, e.g. `BTC-USDT-SWAP`
     */
    instId: string;

    /*!
     * Highest buy limit
     */
    buyLmt: string;

    /*!
     * Lowest sell limit
     */
    sellLmt: string;

    /*!
     * Data return time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetLimitPriceResponse = OkxResponse<GetLimitPriceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-option-market-data
   */
  export interface GetOptionMarketDataRequestParams {
    /*!
     * Underlying, only applicable to `OPTION`
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    uly?: string;

    /*!
     * Instrument family, only applicable to `OPTION`
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    instFamily?: string;

    /*!
     * Contract expiry date, the format is &#34;YYMMDD&#34;, e.g. &#34;200527&#34;
     */
    expTime?: string;

  }

  export type GetOptionMarketDataData = {
    /*!
     * Instrument type
     * `OPTION`
     */
    instType: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-200103-5500-C`
     */
    instId: string;

    /*!
     * Underlying
     */
    uly: string;

    /*!
     * Sensitivity of option price to `uly` price
     */
    delta: string;

    /*!
     * The delta is sensitivity to `uly` price
     */
    gamma: string;

    /*!
     * Sensitivity of option price to implied volatility
     */
    vega: string;

    /*!
     * Sensitivity of option price to remaining maturity
     */
    theta: string;

    /*!
     * Sensitivity of option price to `uly` price in BS mode
     */
    deltaBS: string;

    /*!
     * The delta is sensitivity to `uly` price in BS mode
     */
    gammaBS: string;

    /*!
     * Sensitivity of option price to implied volatility in BS mode
     */
    vegaBS: string;

    /*!
     * Sensitivity of option price to remaining maturity in BS mode
     */
    thetaBS: string;

    /*!
     * Leverage
     */
    lever: string;

    /*!
     * Mark volatility
     */
    markVol: string;

    /*!
     * Bid volatility
     */
    bidVol: string;

    /*!
     * Ask volatility
     */
    askVol: string;

    /*!
     * Realized volatility (not currently used)
     */
    realVol: string;

    /*!
     * Forward price
     */
    fwdPx: string;

    /*!
     * Data update time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetOptionMarketDataResponse = OkxResponse<GetOptionMarketDataData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-estimated-delivery-exercise-price
   */
  export interface GetEstimatedDeliveryExercisePriceRequestParams {
    /*!
     * Instrument ID,  e.g. `BTC-USD-200214`
     * only applicable to `FUTURES/OPTION`
     */
    instId: string;

  }

  export type GetEstimatedDeliveryExercisePriceData = {
    /*!
     * Instrument type
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Instrument ID,  e.g. `BTC-USD-180216`
     */
    instId: string;

    /*!
     * Estimated delivery price
     */
    settlePx: string;

    /*!
     * Data return time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetEstimatedDeliveryExercisePriceResponse = OkxResponse<GetEstimatedDeliveryExercisePriceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-discount-rate-and-interest-free-quota
   */
  export interface GetDiscountRateAndInterestFreeQuotaRequestParams {
    /*!
     * Currency
     */
    ccy?: string;

    /*!
     * Discount level
     * `1`:level 1
     * `2`:level 2
     * `3`:level 3
     * `4`:level 4
     * `5`:level 5
     */
    discountLv?: string;

  }

  export type GetDiscountRateAndInterestFreeQuotaData = {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Interest-free quota
     */
    amt: string;

    /*!
     * Discount rate level
     * &lt;a href=&#34;/support/hc/zh-cn/articles/360054690531-%E5%9B%9B-%E8%B7%A8%E5%B8%81%E7%A7%8D%E4%BF%9D%E8%AF%81%E9%87%91%E6%A8%A1%E5%BC%8F-%E5%85%A8%E4%BB%93%E4%BA%A4%E6%98%93%E4%BB%8B%E7%BB%8D&#34;&gt;Discount rate level intruduction&lt;/a&gt;
     */
    discountLv: string;

    /*!
     * Discount details
     */
    discountInfo: any[];

  }

  export type GetDiscountRateAndInterestFreeQuotaResponse = OkxResponse<GetDiscountRateAndInterestFreeQuotaData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-system-time
   */
  export interface GetSystemTimeRequestParams {
  }

  export type GetSystemTimeData = {
    /*!
     * System time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetSystemTimeResponse = OkxResponse<GetSystemTimeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-mark-price
   */
  export interface GetMarkPriceRequestParams {
    /*!
     * Instrument type
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly?: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily?: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-SWAP`
     */
    instId?: string;

  }

  export type GetMarkPriceData = {
    /*!
     * Instrument type
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Instrument ID, e.g. `BTC-USD-200214`
     */
    instId: string;

    /*!
     * Mark price
     */
    markPx: string;

    /*!
     * Data return time, Unix timestamp format in milliseconds, e.g. `1597026383085`
     */
    ts: string;

  }

  export type GetMarkPriceResponse = OkxResponse<GetMarkPriceData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-position-tiers
   */
  export interface GetPositionTiersRequestParams {
    /*!
     * Instrument type
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Trade mode
     * Margin mode `cross` `isolated`
     */
    tdMode: string;

    /*!
     * Single underlying or multiple underlyings (no more than 3) separated with comma.
     * If instType is `SWAP/FUTURES/OPTION`, either `uly` or `instFamily` is required.
     * If both are passed, `instFamily` will be used.
     */
    uly?: string;

    /*!
     * Single instrument familiy or multiple instrument families (no more than 5) separated with comma.
     * If instType is `SWAP/FUTURES/OPTION`, either `uly` or `instFamily` is required.
     * If both are passed, `instFamily` will be used.
     */
    instFamily?: string;

    /*!
     * Single instrument or multiple instruments (no more than 5) separated with comma.
     * Either instId or ccy is required, if both are passed, instId will be used, ignore when instType is one of `SWAP`,`FUTURES`,`OPTION`
     */
    instId?: string;

    /*!
     * Margin currency
     * Only applicable to cross MARGIN. It will return borrowing amount for `Multi-currency margin` and `Portfolio margin` when `ccy` takes effect.
     */
    ccy?: string;

    /*!
     * Tiers
     */
    tier?: string;

  }

  export type GetPositionTiersData = {
    /*!
     * Underlying
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    uly: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Tiers
     */
    tier: string;

    /*!
     * The minimum borrowing amount or position of this gear is only applicable to margin/options/perpetual/delivery, the minimum position is 0 by default
     * It will return the minimum borrowing amount when `ccy` takes effect.
     */
    minSz: string;

    /*!
     * The maximum borrowing amount or number of positions held in this position is only applicable to margin/options/perpetual/delivery
     * It will return the maximum borrowing amount when `ccy` takes effect.
     */
    maxSz: string;

    /*!
     * Maintenance margin requirement rate
     */
    mmr: string;

    /*!
     * Initial margin requirement rate
     */
    imr: string;

    /*!
     * Maximum available leverage
     */
    maxLever: string;

    /*!
     * Option Margin Coefficient (only applicable to options)
     */
    optMgnFactor: string;

    /*!
     * Quote currency borrowing amount (only applicable to leverage and the case when `instId` takes effect)
     */
    quoteMaxLoan: string;

    /*!
     * Base currency borrowing amount (only applicable to leverage and the case when `instId` takes effect)
     */
    baseMaxLoan: string;

  }

  export type GetPositionTiersResponse = OkxResponse<GetPositionTiersData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-interest-rate-and-loan-quota
   */
  export interface GetInterestRateAndLoanQuotaRequestParams {
  }

  export type GetInterestRateAndLoanQuotaData = {
    /*!
     * Basic interest rate
     */
    basic: any[];

    /*!
     * Interest info for vip users
     */
    vip: any[];

    /*!
     * Interest info for regular users
     */
    regular: any[];

  }

  export type GetInterestRateAndLoanQuotaResponse = OkxResponse<GetInterestRateAndLoanQuotaData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-interest-rate-and-loan-quota-for-vip-loans
   */
  export interface GetInterestRateAndLoanQuotaForVipLoansRequestParams {
  }

  export type GetInterestRateAndLoanQuotaForVipLoansData = {
    /*!
     * Currency, e.g. `BTC`
     */
    ccy: string;

    /*!
     * Daily rate
     */
    rate: string;

    /*!
     * Max borrow
     */
    quota: string;

    /*!
     * Loan quota information under different VIP levels
     */
    levelList: any[];

  }

  export type GetInterestRateAndLoanQuotaForVipLoansResponse = OkxResponse<GetInterestRateAndLoanQuotaForVipLoansData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-underlying
   */
  export interface GetUnderlyingRequestParams {
    /*!
     * Instrument type
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

  }

  export type GetUnderlyingData = {
    /*!
     * Underlying
     */
    uly: any[];

  }

  export type GetUnderlyingResponse = OkxResponse<GetUnderlyingData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-insurance-fund
   */
  export interface GetInsuranceFundRequestParams {
    /*!
     * Instrument type
     * `MARGIN`
     * `SWAP`
     * `FUTURES`
     * `OPTION`
     */
    instType: string;

    /*!
     * Type
     * `liquidation_balance_deposit`
     * `bankruptcy_loss`
     * `platform_revenue`
     * The default is `all type`
     */
    type?: string;

    /*!
     * Underlying
     * Required for `FUTURES/SWAP/OPTION`
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    uly?: string;

    /*!
     * Instrument family
     * Required for `FUTURES/SWAP/OPTION`
     * Either `uly` or `instFamily` is required. If both are passed, `instFamily` will be used.
     */
    instFamily?: string;

    /*!
     * Currency, only applicable to `MARGIN`
     */
    ccy?: string;

    /*!
     * Pagination of data to return records newer than the requested `ts`
     */
    before?: string;

    /*!
     * Pagination of data to return records earlier than the requested `ts`
     */
    after?: string;

    /*!
     * Number of results per request. The maximum is `100`; The default is `100`
     */
    limit?: string;

  }

  export type GetInsuranceFundData = {
    /*!
     * The total balance of insurance fund, in USD
     */
    total: string;

    /*!
     * Instrument family
     * Applicable to `FUTURES/SWAP/OPTION`
     */
    instFamily: string;

    /*!
     * Insurance fund data
     */
    details: any;

  }

  export type GetInsuranceFundResponse = OkxResponse<GetInsuranceFundData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-unit-convert
   */
  export interface UnitConvertRequestParams {
    /*!
     * Convert type
     * 1: Convert currency to contract. It will be rounded up when the value of contract is decimal
     * 2: Convert contract to currency
     * The defautl is 1
     */
    type?: string;

    /*!
     * Instrument ID, only applicable to `FUTURES/SWAP/OPTION`
     */
    instId: string;

    /*!
     * Quantity to buy or sell
     * It is quantity of currency while converting currency to contract;
     * It is quantity of contract while contract to currency. Quantity of coin needs to be positive integer
     */
    sz: string;

    /*!
     * Order price
     * For crypto-margined contracts, it is necessary while converting;
     * For USDT-margined contracts, it is necessary while converting between usdt and contract, it is optional while converting between coin and contract.
     * For OPTION, it is optional.
     */
    px?: string;

    /*!
     * The unit of currency. `coin` `usds`: usdt or usdc, only applicable to USDⓈ-margined contracts from `FUTURES/SWAP`
     */
    unit?: string;

  }

  export type UnitConvertData = {
    /*!
     * Convert type
     * 1: Convert currency to contract. It will be rounded up when the value of contract is decimal
     * 2: Convert contract to currency
     */
    type: string;

    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Order price
     */
    px: string;

    /*!
     * Quantity to buy or sell
     * It is quantity of contract while converting currency to contract; It is quantity of currency while contract to currency.
     */
    sz: string;

    /*!
     * The unit of currency. `coin` `usds`: usdt or usdc
     */
    unit: string;

  }

  export type UnitConvertResponse = OkxResponse<UnitConvertData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-option-trades
   */
  export interface GetOptionTradesRequestParams {
    /*!
     * Instrument ID, e.g. BTC-USD-221230-4000-C, Either `instId` or `instFamily` is required. If both are passed, `instId` will be used.
     */
    instId?: string;

    /*!
     * Instrument family, e.g. BTC-USD
     */
    instFamily?: string;

    /*!
     * Option type, `C`: Call  `P`: put
     */
    optType?: string;

  }

  export type GetOptionTradesData = {
    /*!
     * Instrument ID
     */
    instId: string;

    /*!
     * Instrument family
     */
    instFamily: string;

    /*!
     * Trade ID
     */
    tradeId: string;

    /*!
     * Trade price
     */
    px: string;

    /*!
     * Trade quantity
     */
    sz: string;

    /*!
     * Trade side
     * `buy`
     * `sell`
     */
    side: string;

    /*!
     * Option type, C: Call P: Put
     */
    optType: string;

    /*!
     * Implied volatility while trading (Correspond to trade price)
     */
    fillVol: string;

    /*!
     * Forward price while trading
     */
    fwdPx: string;

    /*!
     * Index price while trading
     */
    indexPx: string;

    /*!
     * Mark price while trading
     */
    markPx: string;

    /*!
     * Trade time, Unix timestamp format in milliseconds, e.g. `1597026383085`.
     */
    ts: string;

  }

  export type GetOptionTradesResponse = OkxResponse<GetOptionTradesData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-public-data-get-option-tickbands
   */
  export interface GetOptionTickbandsRequestParams {
    /*!
     * Instrument type
     * `OPTION`
     */
    instType: string;

    /*!
     * Instrument family
     * Only applicable to OPTION
     */
    instFamily?: string;

  }

  export type GetOptionTickbandsData = {
    /*!
     * Instrument type
     */
    instType: string;

    /*!
     * Instrument family
     */
    instFamily: string;

    /*!
     * Tick size band
     */
    tickBand: string;

  }

  export type GetOptionTickbandsResponse = OkxResponse<GetOptionTickbandsData>;

}
export namespace tradingData {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-support-coin
   */
  export interface GetSupportCoinRequestParams {
  }

  export type GetSupportCoinData = {
    /*!
     * Currency supported by derivatives trading data
     */
    contract: string[];

    /*!
     * Currency supported by option trading data
     */
    option: string[];

    /*!
     * Currency supported by spot trading data
     */
    spot: string[];

  }

  export type GetSupportCoinResponse = OkxResponse<GetSupportCoinData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-taker-volume
   */
  export interface GetTakerVolumeRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Instrument type
     * `SPOT`,`CONTRACTS`
     */
    instType: string;

    /*!
     * Begin time, e.g. `1597026383085`
     */
    begin?: string;

    /*!
     * End time, e.g. `1597026383011`
     */
    end?: string;

    /*!
     * Period, the default is `5m`, e.g. [`5m/1H/1D`]
     * `5m` granularity can only query data within two days at most
     * `1H` granularity can only query data within 30 days at most
     * `1D` granularity can only query data within 180 days at most
     */
    period?: string;

  }

  export type GetTakerVolumeData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * Sell volume
     */
    sellVol: string;

    /*!
     * Buy volume
     */
    buyVol: string;

  }

  export type GetTakerVolumeResponse = OkxResponse<GetTakerVolumeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-margin-lending-ratio
   */
  export interface GetMarginLendingRatioRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Begin time, e.g. `1597026383085`
     */
    begin?: string;

    /*!
     * End time, e.g. `1597026383085`
     */
    end?: string;

    /*!
     * Period, the default is `5m`, e.g. [`5m/1H/1D`]
     * `5m`granularity can only query data within two days at most
     * `1H` granularity can only query data within 30 days at most
     * `1D` granularity can only query data within 180 days at most
     */
    period?: string;

  }

  export type GetMarginLendingRatioData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * Margin lending ratio
     */
    ratio: string;

  }

  export type GetMarginLendingRatioResponse = OkxResponse<GetMarginLendingRatioData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-long-short-ratio
   */
  export interface GetLongShortRatioRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Begin time, e.g. `1597026383085`
     */
    begin?: string;

    /*!
     * End time, e.g. `1597026383011`
     */
    end?: string;

    /*!
     * Period, the default is `5m`, e.g. [`5m/1H/1D`]
     * `5m` granularity can only query data within two days at most
     * `1H` granularity can only query data within 30 days at most
     * `1D` granularity can only query data within 180 days at most
     */
    period?: string;

  }

  export type GetLongShortRatioData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * Long/Short ratio
     */
    ratio: string;

  }

  export type GetLongShortRatioResponse = OkxResponse<GetLongShortRatioData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-contracts-open-interest-and-volume
   */
  export interface GetContractsOpenInterestAndVolumeRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Begin time, e.g. `1597026383085`
     */
    begin?: string;

    /*!
     * End time, e.g. `1597026383011`
     */
    end?: string;

    /*!
     * Period, the default is `5m`, e.g. [`5m/1H/1D`]
     * `5m` granularity can only query data within two days at most
     * `1H` granularity can only query data within 30 days at most
     * `1D` granularity can only query data within 180 days at most
     */
    period?: string;

  }

  export type GetContractsOpenInterestAndVolumeData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * Total open interest（USD）
     */
    oi: string;

    /*!
     * Total volume（USD）
     */
    vol: string;

  }

  export type GetContractsOpenInterestAndVolumeResponse = OkxResponse<GetContractsOpenInterestAndVolumeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-options-open-interest-and-volume
   */
  export interface GetOptionsOpenInterestAndVolumeRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Period, the default is `8H`. e.g. [`8H/1D`]
     * Each granularity can only query 72 pieces of data at the earliest
     */
    period?: string;

  }

  export type GetOptionsOpenInterestAndVolumeData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * Total open interest (`coin` as the unit)
     */
    oi: string;

    /*!
     * Total volume (`coin` as the unit)
     */
    vol: string;

  }

  export type GetOptionsOpenInterestAndVolumeResponse = OkxResponse<GetOptionsOpenInterestAndVolumeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-put-call-ratio
   */
  export interface GetPutCallRatioRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Period, the default is `8H`. e.g. [`8H/1D`]
     * Each granularity can only query 72 pieces of data at the earliest
     */
    period?: string;

  }

  export type GetPutCallRatioData = {
    /*!
     * Timestamp of data generation time
     */
    ts: string;

    /*!
     * Long/Short open interest ratio
     */
    oiRatio: string;

    /*!
     * Long/Short volume ratio
     */
    volRatio: string;

  }

  export type GetPutCallRatioResponse = OkxResponse<GetPutCallRatioData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-open-interest-and-volume-expiry
   */
  export interface GetOpenInterestAndVolumeExpiryRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Period, the default is `8H`. e.g. [`8H/1D`]
     * Each granularity can only query 72 pieces of data at the earliest
     */
    period?: string;

  }

  export type GetOpenInterestAndVolumeExpiryData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * Contract expiry date, the format is `YYYYMMDD`, e.g. `20210623`
     */
    expTime: string;

    /*!
     * Total call open interest (`coin` as the unit)
     */
    callOI: string;

    /*!
     * Total put  open interest (`coin` as the unit)
     */
    putOI: string;

    /*!
     * Total call trading volume (`coin` as the unit)
     */
    callVol: string;

    /*!
     * Total put trading volume (`coin` as the unit)
     */
    putVol: string;

  }

  export type GetOpenInterestAndVolumeExpiryResponse = OkxResponse<GetOpenInterestAndVolumeExpiryData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-open-interest-and-volume-strike
   */
  export interface GetOpenInterestAndVolumeStrikeRequestParams {
    /*!
     * Currency
     */
    ccy: string;

    /*!
     * Contract expiry date, the format is `YYYYMMdd`, e.g. `20210623`
     */
    expTime: string;

    /*!
     * Period, the default is `8H`. e.g. [`8H/1D`]
     * Each granularity can only query 72 pieces of data at the earliest
     */
    period?: string;

  }

  export type GetOpenInterestAndVolumeStrikeData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * Strike price
     */
    strike: string;

    /*!
     * Total call open interest (`coin` as the unit)
     */
    callOI: string;

    /*!
     * Total put open interest (`coin` as the unit)
     */
    putOI: string;

    /*!
     * Total call trading volume (`coin` as the unit)
     */
    callVol: string;

    /*!
     * Total put trading volume (`coin` as the unit)
     */
    putVol: string;

  }

  export type GetOpenInterestAndVolumeStrikeResponse = OkxResponse<GetOpenInterestAndVolumeStrikeData>;

  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-taker-flow
   */
  export interface GetTakerFlowRequestParams {
    /*!
     * currency
     */
    ccy: string;

    /*!
     * period, the default is `8H`. e.g. [`8H/1D`]
     * Each granularity can only query 72 pieces of data at the earliest
     */
    period?: string;

  }

  export type GetTakerFlowData = {
    /*!
     * Timestamp
     */
    ts: string;

    /*!
     * call option buy volume,  in settlement currency
     */
    callBuyVol: string;

    /*!
     * call option sell volume,  in settlement currency
     */
    callSellVol: string;

    /*!
     * put option buy volume,  in settlement currency
     */
    putBuyVol: string;

    /*!
     * put option sell volume,  in settlement currency
     */
    putSellVol: string;

    /*!
     * call block volume
     */
    callBlockVol: string;

    /*!
     * put  block volume
     */
    putBlockVol: string;

  }

  export type GetTakerFlowResponse = OkxResponse<GetTakerFlowData>;

}
export namespace status {
  /*!
   * see: https://www.okx.com/docs-v5/en/#rest-api-status
   */
  export interface GetStatusRequestParams {
    /*!
     * System maintenance status,`scheduled`: waiting;  `ongoing`: processing; `pre_open`: pre_open; `completed`: completed ;`canceled`: canceled.
     * Generally, `pre_open` last about 10 minutes. There will be `pre_open` when the time of upgrade is too long.
     * If this parameter is not filled, the data with status `scheduled`, `ongoing` and `pre_open` will be returned by default
     */
    state?: string;

  }

  export type GetStatusData = {
    /*!
     * The title of system maintenance instructions
     */
    title: string;

    /*!
     * System maintenance status
     */
    state: string;

    /*!
     * Begin time of system maintenance, Unix timestamp format in milliseconds, e.g. `1617788463867`
     */
    begin: string;

    /*!
     * Time of resuming trading totally. Unix timestamp format in milliseconds, e.g. `1617788463867`.
     * It is expected end time before `completed`, changed to actual end time after `completed`.
     */
    end: string;

    /*!
     * The time of pre_open. Canceling orders, placing Post Only orders, and transferring funds to trading accounts are back after `preOpenBegin`.
     */
    preOpenBegin: string;

    /*!
     * Hyperlink for system maintenance details, if there is no return value, the default value will be empty. e.g. “”
     */
    href: string;

    /*!
     * Service type, `0`：WebSocket ; `5`：Trading service; `6`: Block trading; `7`: Trading bot; `8`: Trading service (in batches of accounts); `9`: Trading service (in batches of products); `99`: Others (e.g. Suspend partial instruments)
     */
    serviceType: string;

    /*!
     * System, `unified`：Trading account
     */
    system: string;

    /*!
     * Rescheduled description, e.g. `Rescheduled from 2021-01-26T16:30:00.000Z to 2021-01-28T16:30:00.000Z`
     */
    scheDesc: string;

    /*!
     * Maintenance type
     * `1`: Scheduled maintenance; `2`: Unscheduled maintenance; `3`: System disruption
     */
    maintType: string;

    /*!
     * Environment.
     * `1`: Production Trading, `2`: Demo Trading
     */
    env: string;

  }

  export type GetStatusResponse = OkxResponse<GetStatusData>;

}
