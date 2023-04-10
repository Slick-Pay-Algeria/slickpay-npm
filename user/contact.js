import Core from '../core.js'

import axios from "axios";

export default class Contact {

    constructor(publicKey, sandbox = false) {
        this.publicKey = publicKey;
        this.sandbox = sandbox;
    }

    /**
     * Store a new contact in storage.
     *
     * @param {any} data
     * @returns Promise
     */
    store(data) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url('users/contacts'), data, {
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
     * Get the specified contact data.
     *
     * @param {string} uuid
     * @returns Promise
     */
    show(uuid) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.get(core.url(`users/contacts/${uuid}`), {
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
     * Get a listing of the user contact.
     *
     * @param {number} id
     * @returns Promise
     */
    index(offset = 0, page = 1) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            var url = `users/contacts?fake=1`;

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
     * Update the specified contact in storage.
     *
     * @param {string} uuid
     * @param {any} data
     * @returns Promise
     */
    update(uuid, data) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.post(core.url(`users/contacts/${uuid}`), data, {
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
     * Remove the specified contact from storage.
     *
     * @param {string} uuid
     * @returns Promise
     */
    destroy(uuid) {

        return new Promise(async (resolve, reject) => {

            const core = new Core(this.publicKey, this.sandbox);

            await axios.delete(core.url(`users/contacts/${uuid}`), {
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