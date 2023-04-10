import Core from '../core.js'

import axios from "axios";

export default class Invoice {

    constructor(publicKey, sandbox = false) {
        this.publicKey = publicKey;
        this.sandbox = sandbox;
    }

    /**
     * Store a new invoice in storage.
     *
     * @param {any} data
     * @returns Promise
     */
    store(data) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url('merchants/invoices'), data, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${this.publicKey}`
                    }
                })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    reject(core.response(error.response.status, error.response.data, error.response.statusText));
                });

        });
    }

    /**
     * Get the specified invoice data.
     *
     * @param {number} id
     * @returns Promise
     */
    show(id) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.get(core.url(`merchants/invoices/${id}`), {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${this.publicKey}`
                    }
                })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    reject(core.response(error.response.status, error.response.data, error.response.statusText));
                });

        });
    }

    /**
     * Get a listing of the merchant invoice.
     *
     * @param {number} id
     * @returns Promise
     */
    index(offset = 0, page = 1) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            var url = `merchants/invoices?fake=1`;

            if (offset) url += `&offset=${offset}`;
            if (offset && page) url += `&page=${page}`;

            await axios.get(core.url(url), {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${this.publicKey}`
                    }
                })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    reject(core.response(error.response.status, error.response.data, error.response.statusText));
                });

        });
    }

    /**
     * Update the specified invoice in storage.
     *
     * @param {number} id
     * @param {any} data
     * @returns Promise
     */
    update(id, data) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url(`merchants/invoices/${id}`), data, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${this.publicKey}`
                    }
                })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    reject(core.response(error.response.status, error.response.data, error.response.statusText));
                });

        });
    }

    /**
     * Remove the specified invoice from storage.
     *
     * @param {number} id
     * @returns Promise
     */
    destroy(id) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.delete(core.url(`merchants/invoices/${id}`), {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${this.publicKey}`
                    }
                })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    reject(core.response(error.response.status, error.response.data, error.response.statusText));
                });

        });
    }
}