import Core from '../core.js'

import axios from "axios";

export default class Invoice {

    constructor(publicKey, sandbox = false) {
        this.publicKey = publicKey;
        this.sandbox = sandbox;
    }

    /**
     * Calculate invoice commission.
     *
     * @param {number} amount
     * @returns Promise
     */
    commission(amount) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url(`users/invoices`), {
                amount: amount
            }, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.publicKey}`
                }
            })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    const status = error.response ? error.response.status : 500;
                    const data = error.response ? error.response.data : null;
                    const statusText = error.response ? error.response.statusText : error.message;
                    reject(core.response(status, data, statusText));
                });

        });
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

            await axios.post(core.url('users/invoices'), data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.publicKey}`
                }
            })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    const status = error.response ? error.response.status : 500;
                    const data = error.response ? error.response.data : null;
                    const statusText = error.response ? error.response.statusText : error.message;
                    reject(core.response(status, data, statusText));
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

            await axios.get(core.url(`users/invoices/${id}`), {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.publicKey}`
                }
            })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    const status = error.response ? error.response.status : 500;
                    const data = error.response ? error.response.data : null;
                    const statusText = error.response ? error.response.statusText : error.message;
                    reject(core.response(status, data, statusText));
                });

        });
    }

    /**
     * Get a listing of the user invoice.
     *
     * @param {number} id
     * @returns Promise
     */
    index(offset = 0, page = 1) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            var url = `users/invoices?fake=1`;

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
                    const status = error.response ? error.response.status : 500;
                    const data = error.response ? error.response.data : null;
                    const statusText = error.response ? error.response.statusText : error.message;
                    reject(core.response(status, data, statusText));
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

            await axios.post(core.url(`users/invoices/${id}`), data, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.publicKey}`
                }
            })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    const status = error.response ? error.response.status : 500;
                    const data = error.response ? error.response.data : null;
                    const statusText = error.response ? error.response.statusText : error.message;
                    reject(core.response(status, data, statusText));
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

            await axios.delete(core.url(`users/invoices/${id}`), {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.publicKey}`
                }
            })
                .then((result) => {
                    resolve(core.response(result.status, result.data, result.statusText));
                }).catch((error) => {
                    const status = error.response ? error.response.status : 500;
                    const data = error.response ? error.response.data : null;
                    const statusText = error.response ? error.response.statusText : error.message;
                    reject(core.response(status, data, statusText));
                });

        });
    }
}