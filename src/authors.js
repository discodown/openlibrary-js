const fetch = require("node-fetch")

class AuthorsAPI {
    constructor(limit = 50, offset = 50) {
        this.limit = limit;
        this.offset = offset;
        this.BASE_API_URL = "https://openlibrary.org/authors/"
    }

    async getAuthor(authorId) {
        const req_url = `${this.BASE_API_URL}/${authorId}.json`;

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getAuthorWorks(authorId) {
        const req_url = `${this.BASE_API_URL}/${authorId}/worls.json?limit=${this.limit}?offset=${this.offset}`;

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = {AuthorsAPI}