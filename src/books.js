const fetch = require("node-fetch")

const jscmdTypes = ["viewapi", "data"]
const formatTypes = ["json", "javascript"]

class BookIdentifiers {
    constructor(isbn, oclc, lccn, olid) {
        this.ISBN = isbn;
        this.OCLC = oclc;
        this.LCCN = lccn;
        this.OLID = olid;
    }
}

class BooksAPI {

    constructor(format = 'javascript', jscmd = 'viewapi', callback = null) {
        this.BASE_API_URL = "https://openlibrary.org/api/books?bibkeys=";
        this.format = format;
        this.jscmd = jscmd;
        this.callback = callback;

    }

    async getBooks(identifiers) {
        let req_url = this.BASE_API_URL;

        if (identifiers["ISBN"].length != 0) {
            req_url = req_url.concat(`ISBN:${identifiers["ISBN"].toString()},`);
        }
        if (identifiers["OCLC"].length != 0) {
            req_url = req_url.concat(`OCLC:${identifiers["OCLC"].toString()},`)
        }
        if (identifiers["LCCN"].length != 0) {
            req_url = req_url.concat(`LCCN:${identifiers["LCCN"].toString()},`)
        }
        if (identifiers["OLID"].length != 0) {
            req_url = req_url.concat(`OLID:${identifiers["OLID"].toString()},`)
        }

        req_url = req_url.substring(0, req_url.length-1);

        if (this.format == 'json') {
            req_url = req_url.concat('&format=json');
        }
        else {
            if (this.callback != null) {
                req_url = req_url.concat(`&callback=${this.callback}`);
            }
        }

        req_url = req_url.concat(`&jscmd=${this.jscmd}`)

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getBooksByISBN(identifiers) {
        let req_url = this.BASE_API_URL;
        req_url = req_url.concat(`ISBN:${identifiers.toString()}`);

        if (this.format == 'json') {
            req_url = req_url.concat('&format=json');
        }
        else {
            if (this.callback != null) {
                req_url = req_url.concat(`&callback=${this.callback}`);
            }
        }

        req_url = req_url.concat(`&jscmd=${this.jscmd}`)

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getBooksByOCLC(identifiers) {
        let req_url = this.BASE_API_URL;
        req_url = req_url.concat(`OCLC:${identifiers.toString()}`);

        if (this.format == 'json') {
            req_url = req_url.concat('&format=json');
        }
        else {
            if (this.callback != null) {
                req_url = req_url.concat(`&callback=${this.callback}`);
            }
        }

        req_url = req_url.concat(`&jscmd=${this.jscmd}`)

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getBooksByLCCN(identifiers) {
        let req_url = this.BASE_API_URL;
        req_url = req_url.concat(`LCCN:${identifiers.toString()}`);

        if (this.format == 'json') {
            req_url = req_url.concat('&format=json');
        }
        else {
            if (this.callback != null) {
                req_url = req_url.concat(`&callback=${this.callback}`);
            }
        }

        req_url = req_url.concat(`&jscmd=${this.jscmd}`)

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getBooksByOLID(identifiers) {
        let req_url = this.BASE_API_URL;
        req_url = req_url.concat(`OLID:${identifiers.toString()}`);

        if (this.format == 'json') {
            req_url = req_url.concat('&format=json');
        }
        else {
            if (this.callback != null) {
                req_url = req_url.concat(`&callback=${this.callback}`);
            }
        }

        req_url = req_url.concat(`&jscmd=${this.jscmd}`)

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

class WorksAPI {
    constructor() {
        this.BASE_API_URL = "https://openlibrary.org/works/";
    }

    async getWork(work) {
        const req_url = this.BASE_API_URL + work + ".json";

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getEditions(work) {
        const req_url = this.BASE_API_URL + work + "/editions.json";

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getBookshelves(work) {
        const req_url = this.BASE_API_URL + work + "/bookshelves.json";

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getRatings(work) {
        const req_url = this.BASE_API_URL + work + "/ratings.json";

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

class EditionsAPI {
    constructor() {
        this.BASE_API_URL = "https://openlibrary.org/books/"
    }

    async getEdition(edition) {
        const req_url = this.BASE_API_URL + edition + ".json";

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

class IsbnAPI {
    constructor() {
        this.BASE_API_URL = "https://openlibrary.org/isbn/"
    }

    async getEdition(edition) {
        const req_url = this.BASE_API_URL + edition + ".json";

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = { BookIdentifiers, BooksAPI, WorksAPI, EditionsAPI, IsbnAPI };