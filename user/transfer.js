import Core from '../core.js'

import axios from "axios";

export default class Transfer {

    constructor(publicKey, sandbox = false) {
        this.publicKey = publicKey;
        this.sandbox = sandbox;
    }

    /**
     * Calculate transfer commission.
     *
     * @param {number} amount
     * @returns Promise
     */
    commission(amount) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url(`users/transfers`), {
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
     * Store a new transfer in storage.
     *
     * @param {any} data
     * @returns Promise
     */
    store(data) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url('users/transfers'), data, {
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
     * Get the specified transfer data.
     *
     * @param {number} id
     * @returns Promise
     */
    show(id) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.get(core.url(`users/transfers/${id}`), {
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
     * Get a listing of the user transfer.
     *
     * @param {number} id
     * @returns Promise
     */
    index(offset = 0, page = 1) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            var url = `users/transfers?fake=1`;

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
     * Update the specified transfer in storage.
     *
     * @param {number} id
     * @param {any} data
     * @returns Promise
     */
    update(id, data) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url(`users/transfers/${id}`), data, {
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
     * Remove the specified transfer from storage.
     *
     * @param {number} id
     * @returns Promise
     */
    destroy(id) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.delete(core.url(`users/transfers/${id}`), {
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