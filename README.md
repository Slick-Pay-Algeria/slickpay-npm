<p align="center"><a href="https://slick-pay.com" target="_blank"><img src="https://azimutbscenter.com/logos/slick-pay.png" width="380" height="auto" alt="Slick-Pay Logo"></a></p>

## Description

[Node.js](https://www.npmjs.com) module for [Slick-Pay](https://slick-pay.com) API implementation.

* [Installation](#installation)
* [How to use?](#how-to-use)
    * [User](#user)
    * [Merchant](#merchant)
* [More help](#more-help)

## Installation

Just run this command line :

```sh
npm i @slick-pay-algeria/slickpay-npm
```

## How to use?

> **Important:** Please check the [online documentation](https://devapi.slick-pay.com) for more details about Slick-Pay API requests parameters & responses.

### User

```ts
class Account {

    constructor(publicKey: string, sandbox: boolean);
    store(data: any): Promise<any>; // Store a new account in storage.
    show(uuid: string): Promise<any>; // Get the specified account data.
    index(offset?: number, page?: number): Promise<any>; // Get a listing of the user account.
    update(uuid: string, data: any): Promise<any>; // Update the specified account in storage.
    destroy(uuid: string): Promise<any>; // Remove the specified account from storage.
}

class Contact {

    constructor(publicKey: string, sandbox: boolean);
    store(data: any): Promise<any>; // Store a new contact in storage.
    show(uuid: string): Promise<any>; // Get the specified contact data.
    index(offset?: number, page?: number): Promise<any>; // Get a listing of the user contact.
    update(uuid: string, data: any): Promise<any>; // Update the specified contact in storage.
    destroy(uuid: string): Promise<any>; // Remove the specified contact from storage.
}

class Transfer {

    constructor(publicKey: string, sandbox: boolean);
    commission(amount: number): Promise<any>; // Calculate transfer commission.
    store(data: any): Promise<any>; // Store a new transfer in storage.
    show(id: number): Promise<any>; // Get the specified transfer data.
    index(offset?: number, page?: number): Promise<any>; // Get a listing of the user transfer.
    update(id: number, data: any): Promise<any>; // Update the specified transfer in storage.
    destroy(id: number): Promise<any>; // Remove the specified transfer from storage.
}

class Aggregation {

    constructor(publicKey: string, sandbox: boolean);
    commission(amount: number): Promise<any>; // Calculate aggregation commission.
    store(data: any): Promise<any>; // Store a new aggregation in storage.
    show(id: number): Promise<any>; // Get the specified aggregation data.
    index(offset?: number, page?: number): Promise<any>; // Get a listing of the user aggregation.
    update(id: number, data: any): Promise<any>; // Update the specified aggregation in storage.
    destroy(id: number): Promise<any>; // Remove the specified aggregation from storage.
}

class Invoice {

    constructor(publicKey: string, sandbox: boolean);
    commission(amount: number): Promise<any>; // Calculate invoice commission.
    store(data: any): Promise<any>; // Store a new invoice in storage.
    show(id: number): Promise<any>; // Get the specified invoice data.
    index(offset?: number, page?: number): Promise<any>; // Get a listing of the user invoice.
    update(id: number, data: any): Promise<any>; // Update the specified invoice in storage.
    destroy(id: number): Promise<any>; // Remove the specified invoice from storage.
}
```

### Merchant

```ts
class MerchantInvoice {

    constructor(publicKey: string, sandbox: boolean);
    store(data: any): Promise<any>; // Store a new invoice in storage.
    show(id: number): Promise<any>; // Get the specified invoice data.
    index(offset?: number, page?: number): Promise<any>; // Get a listing of the merchant invoice.
    update(id: number, data: any): Promise<any>; // Update the specified invoice in storage.
    destroy(id: number): Promise<any>; // Remove the specified invoice from storage.
}
```

## More help

* [Slick-Pay website](https://slick-pay.com)
* [Reporting Issues / Feature Requests](https://github.com/Slick-Pay-Algeria/slickpay-npm/issues)