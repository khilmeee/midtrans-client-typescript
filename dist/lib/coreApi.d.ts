import { ApiConfig } from "./apiConfig";
import { HttpClient } from "./httpClient";
import { Transaction } from "./transaction";
/**
 * CoreApi object able to do API request to Midtrans Core API
 */
export declare class CoreApi {
    apiConfig: ApiConfig;
    httpClient: HttpClient;
    transaction: Transaction;
    /**
     * Initiate with options
     * @param  {Object} options - should have these props:
     * isProduction, serverKey, clientKey
     */
    constructor(options?: {
        isProduction?: boolean;
        serverKey?: string;
        clientKey?: string;
    });
    /**
     * Do `/v2/charge` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    charge(parameter?: object): Promise<object | any>;
    /**
     * Do `/v2/capture` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    capture(parameter?: object): Promise<object>;
    /**
     * Do `/v2/card/register` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    cardRegister(parameter?: object): Promise<object>;
    /**
     * Do `/v2/token` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    cardToken(parameter?: object): Promise<object>;
    /**
     * Do `/v2/point_inquiry/<tokenId>` API request to Core API
     * @param  {String} tokenId - tokenId of credit card (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    cardPointInquiry(tokenId: string): Promise<object>;
    /**
     * Create `/v2/pay/account` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com/#create-pay-account)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    linkPaymentAccount(parameter?: object): Promise<object | any>;
    /**
     * Do `/v2/pay/account/<accountId>` API request to Core API
     * @param  {String} accountId - accountId for specific payment channel (more params detail refer to: https://api-docs.midtrans.com/#get-pay-account)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getPaymentAccount(accountId: string): Promise<object>;
    /**
     * Unbind `/v2/pay/account/<accountId>/unbind` API request to Core API
     * @param  {String} accountId - accountId for specific payment channel (more params detail refer to: https://api-docs.midtrans.com/#unbind-pay-account)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    unlinkPaymentAccount(accountId: string): Promise<object>;
    /**
     * Create `/v1/subscription` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com/#create-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    createSubscription(parameter?: object): Promise<object | any>;
    /**
     * Do `/v1/subscription/<subscriptionId>` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#get-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getSubscription(subscriptionId: string): Promise<object>;
    /**
     * Do `/v1/subscription/<subscriptionId>/disable` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#disable-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    disableSubscription(subscriptionId: string): Promise<object>;
    /**
     * Do `/v1/subscription/<subscriptionId>/enable` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#enable-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    enableSubscription(subscriptionId: string): Promise<object>;
    /**
     * Do update subscription `/v1/subscription/<subscriptionId>` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#update-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    updateSubscription(subscriptionId: string, parameter?: object): Promise<object>;
}
