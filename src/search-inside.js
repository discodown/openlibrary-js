const fetch = require("node-fetch");

class SearchInsideAPI {
    constructor(callback = null) {
        this.callback = callback;
    }

    async searchInside(hostname, id, doc, path, q) {
        let req_url = `https://${hostname}/fulltext/inside.php?item_id=${id}&doc=${doc}&path=${path}&q=${q}`;

        if (this.callback != null) {
            req_url = req_url + `&callback=${this.callback}`;
        }

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async locateItem(id) {
        const req_url = `https://archive.org/metadata/${id}`;

        const res = await fetch(req_url);
        const data = await res.json();

        const hostname = data["d1"];

        return hostname;
    }

    async getMetadata(id) {
        const req_url = `https://archive.org/metadata/${id}`;

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = { SearchInsideAPI };