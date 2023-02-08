const fetch = require("node-fetch");

class CoversAPI {
    constructor(notFound = true) {
        this.BASE_API_URL = "https://covers.openlibrary.org/";
        this.default = notFound;
    }

    async getCoverImageBlob(key, value, size = 'M') {
        const req_url = this.BASE_API_URL + `b/${key}/${value}-${size}.jpg?default=${this.default}`;

        const res = await fetch(req_url);
        const blob = await res.blob();

        return blob;
    }

    async getCoverInfo(key, value, size = 'M') {
        const req_url = this.BASE_API_URL + `b/${key}/${value}-${size}.json?default=${this.default}`;

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getAuthorPhoto(key, value, size = 'M') {
        const req_url = this.BASE_API_URL + `a/${key}/${value}-${size}.jpg?default=${this.default}`;

        const res = await fetch(req_url);
        const blob = await res.blob();

        return blob;
    }
}

module.exports = { CoversAPI };