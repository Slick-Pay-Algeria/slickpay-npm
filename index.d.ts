declare module '@slick-pay-algeria/slickpay-npm' {

    class Account {

        constructor(publicKey: string, sandbox: boolean);
        store(data: any): Promise<any>;
        show(uuid: string): Promise<any>;
        index(offset?: number, page?: number): Promise<any>;
        update(uuid: string, data: any): Promise<any>;
        destroy(uuid: string): Promise<any>;
    }

    class Contact {

        constructor(publicKey: string, sandbox: boolean);
        store(data: any): Promise<any>;
        show(uuid: string): Promise<any>;
        index(offset?: number, page?: number): Promise<any>;
        update(uuid: string, data: any): Promise<any>;
        destroy(uuid: string): Promise<any>;
    }

    class Transfer {

        constructor(publicKey: string, sandbox: boolean);
        commission(amount: number): Promise<any>;
        store(data: any): Promise<any>;
        show(id: number): Promise<any>;
        index(offset?: number, page?: number): Promise<any>;
        update(id: number, data: any): Promise<any>;
        destroy(id: number): Promise<any>;
    }

    class Aggregation {

        constructor(publicKey: string, sandbox: boolean);
        commission(amount: number): Promise<any>;
        store(data: any): Promise<any>;
        show(id: number): Promise<any>;
        index(offset?: number, page?: number): Promise<any>;
        update(id: number, data: any): Promise<any>;
        destroy(id: number): Promise<any>;
    }

    class Invoice {

        constructor(publicKey: string, sandbox: boolean);
        commission(amount: number): Promise<any>;
        store(data: any): Promise<any>;
        show(id: number): Promise<any>;
        index(offset?: number, page?: number): Promise<any>;
        update(id: number, data: any): Promise<any>;
        destroy(id: number): Promise<any>;
    }

    class MerchantInvoice {

        constructor(publicKey: string, sandbox: boolean);
        store(data: any): Promise<any>;
        show(id: number): Promise<any>;
        index(offset?: number, page?: number): Promise<any>;
        update(id: number, data: any): Promise<any>;
        destroy(id: number): Promise<any>;
    }
}