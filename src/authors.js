const fetch = require("node-fetch")

class AuthorsAPI {
    constructor(limit = 50) {
        this.limit = limit;
        this.BASE_API_URL = "https://openlibrary.org/authors/"
    }

    async getAuthor(authorId) {
        const req_url = `${this.BASE_API_URL}/${authorId}.json`;

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getAuthorWorks(authorId, offset = 0) {
        let req_url = `${this.BASE_API_URL}/${authorId}/works.json?limit=${this.limit}`;
        if (offset > 0) {
            req_url = req_url + `?offset=${offset}`;
        }

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = { AuthorsAPI };